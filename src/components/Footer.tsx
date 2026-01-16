import { ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <button onClick={scrollToTop} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
          Back to top
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>;
};
export default Footer;