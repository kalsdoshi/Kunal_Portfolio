import { useState } from "react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const rotateX = isHovering ? mousePosition.y * -20 : 0;
  const rotateY = isHovering ? mousePosition.x * 20 : 0;

  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-16 text-center">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Container with 3D Tilt */}
          <div
            className="tilt-card relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="gradient-border overflow-hidden transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden rounded-[0.875rem]">
                <img
                  src="/developer-pic-1.png"
                  alt="Kunal Doshi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/5 rounded-full blur-xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Hi there! I am a Computer Science Engineering student with a strong interest in Artificial Intelligence, Machine Learning, and Deep Learning. I enjoy understanding how intelligent systems learn from data and make predictions. My curiosity drives me to explore both theoretical and practical aspects of AI.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I am particularly interested in neural networks and how deep learning models can solve complex real-world problems. I enjoy experimenting with models, studying algorithms, and improving my understanding of core AI concepts through continuous learning.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I'm currently open to new opportunities and exciting projects. 
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;