import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code2, Trophy } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Lovely2427',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/lovely-pandey-528511259/',
      label: 'LinkedIn'
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/Lovely24/',
      label: 'LeetCode'
    },
    {
      icon: Trophy,
      href: 'https://codeforces.com/profile/Lovely24',
      label: 'Codeforces'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-neon-cyan rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-neon-purple rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-primary text-lg font-mono animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Lovely Pandey
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold tech-gradient animate-slide-up" style={{ animationDelay: '0.6s' }}>
              Full Stack Developer & Problem Solver
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
            Aspiring Software Engineer passionate about building innovative web applications. 
            Solved <span className="text-primary font-semibold">500+</span> coding problems and 
            experienced in modern technologies like React, Node.js, and Python.
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 text-center animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="glass-card p-4 hover:neon-glow transition-all duration-300">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">LeetCode Problems</div>
            </div>
            <div className="glass-card p-4 hover:neon-glow transition-all duration-300">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="glass-card p-4 hover:neon-glow transition-all duration-300">
              <div className="text-2xl font-bold text-primary">3.5+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in" style={{ animationDelay: '1.2s' }}>
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-8 py-6 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '1.4s' }}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full border border-glass-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-neon"
                  aria-label={social.label}
                >
                  <IconComponent className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-glass-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;