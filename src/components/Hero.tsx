import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground text-sm md:text-base mb-4 tracking-wide uppercase">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">Kunal Doshi</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Computer Science Engineering Student
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          I design clean and efficient solutions with a growing focus on Artificial Intelligence and Machine Learning. Passionate about turning ideas into real-world applications through code, data, and continuous learning.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button onClick={scrollToProjects} size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => {
          const element = document.querySelector("#contact");
          if (element) element.scrollIntoView({
            behavior: "smooth"
          });
        }}>
            Get In Touch
          </Button>
        </div>
        <div className="mt-20 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>;
};
export default Hero;