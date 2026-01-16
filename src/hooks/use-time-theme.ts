import { useState, useEffect } from 'react';

type ThemeLevel = 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night';

interface ThemeConfig {
  level: ThemeLevel;
  warmthValue: number; // 0-1 for warmth intensity
  sessionMinutes: number;
}

export const useAdaptiveTheme = () => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    level: 'morning',
    warmthValue: 0,
    sessionMinutes: 0,
  });

  useEffect(() => {
    const startTime = Date.now();

    const updateTheme = () => {
      const now = new Date();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      
      // Calculate session time in minutes
      const elapsed = Math.floor((Date.now() - startTime) / 60000);

      // Determine theme level based on system time
      let level: ThemeLevel = 'morning';
      let baseWarmth = 0;

      if (hour >= 5 && hour < 7) {
        level = 'dawn';
        baseWarmth = 0.2;
      } else if (hour >= 7 && hour < 12) {
        level = 'morning';
        baseWarmth = 0;
      } else if (hour >= 12 && hour < 17) {
        level = 'afternoon';
        baseWarmth = 0.05;
      } else if (hour >= 17 && hour < 21) {
        level = 'evening';
        const eveningProgress = (hour - 17 + minutes / 60) / 4;
        baseWarmth = 0.15 + eveningProgress * 0.2;
      } else {
        level = 'night';
        baseWarmth = 0.35;
      }

      // Add warmth based on session time (starts after 30 seconds for faster feedback)
      let sessionWarmth = 0;
      if (elapsed > 0.5) {
        const sessionProgress = Math.min(elapsed / 5, 1); // Full warmth at 5 minutes
        sessionWarmth = sessionProgress * 0.25;
      }

      const totalWarmth = Math.min(baseWarmth + sessionWarmth, 0.6);

      setThemeConfig({
        level,
        warmthValue: totalWarmth,
        sessionMinutes: elapsed,
      });

      // Apply warmth effect via filter
      const warmthPercent = totalWarmth * 100;
      const filterString = `brightness(${1 - totalWarmth * 0.1}) sepia(${totalWarmth * 0.3})`;
      document.documentElement.style.filter = filterString;
      
      // Also apply to CSS variable
      document.documentElement.style.setProperty('--warmth-intensity', String(totalWarmth));
    };

    // Update immediately
    updateTheme();

    // Update every 10 seconds for real-time feedback
    const interval = setInterval(updateTheme, 10000);

    return () => clearInterval(interval);
  }, []);

  return themeConfig;
};

