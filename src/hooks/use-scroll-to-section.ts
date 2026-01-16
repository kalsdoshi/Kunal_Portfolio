/**
 * Custom hook for smooth scrolling to sections
 * Centralizes scroll handling logic for better code reuse
 */
export const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return { scrollToSection, handleLinkClick };
};
