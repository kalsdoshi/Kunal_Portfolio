const skillCategories = [
{
  title: "Frontend Development",
  skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
},
{
  title: "Backend Development",
  skills: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs"],
},
{
  title: "AI / ML",
  skills: [
    "Machine Learning",
    "Image Processing",
    "Statistics",
    "Python",
    "Computer Vision",
  ],
},
{
  title: "Tools & Fundamentals",
  skills: ["Git & GitHub", "VS Code", "AWS (Basics)", "DBMS", "Computer Networks"],
},

];

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-sm md:text-base text-center mb-8 md:mb-16 max-w-2xl mx-auto">
          I work with a variety of technologies to bring ideas to life. Here's my current toolkit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-4 md:p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
