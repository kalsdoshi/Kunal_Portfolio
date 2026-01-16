import { Mail, Github, Linkedin, Twitter } from "lucide-react";
const socialLinks = [{
  icon: Github,
  href: "https://github.com/kalsdoshi",
  label: "GitHub"
}, {
  icon: Linkedin,
  href: "https://www.linkedin.com/in/kunal-doshi-2703ab28b/",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "https://twitter.com",
  label: "Twitter"
}];
const Contact = () => {
  return <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Feel free to reach out!
        </p>
        
        <a href="mailto:kunaldosh48@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity mb-12 group"><Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          kunaldosh48@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6">
          {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all">
              <social.icon className="w-5 h-5" />
            </a>)}
        </div>
      </div>
    </section>;
};
export default Contact;