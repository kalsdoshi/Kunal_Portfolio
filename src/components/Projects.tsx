import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "BulkMart",
    description:
      "A web-based grocery application for browsing products and managing bulk purchases with a clean, user-friendly interface.",
    image: "/BulkMart.png",
    tags: ["React", "Node.js", "Vite", "Html/CSS"],
    githubUrl: "https://github.com/TejjanArora2877/Bulkmart",
  },
  {
    title: "Fitness Tracker App",
    description:
      "An application that tracks user fitness activities and health metrics to help monitor progress and maintain a healthy lifestyle.",
    image: "/Fitness.png",
    tags: ["Java", "Swing","Xampp"],
    githubUrl: "https://github.com/kalsdoshi/Java-MiniProject-Fitness-Tracker",
  },
  {
    title: "Plant Disease Detector",
    description:
      "An AI-powered application that detects plant diseases from leaf images using machine learning and deep learning techniques.",
    image: "/Plant.png",
    tags: ["Keras", "Django", "Sklearn","OpenCV","Html/CSS"],
    githubUrl: "https://github.com/kalsdoshi/plant-disease-detector-main",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built with care and attention to detail.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
