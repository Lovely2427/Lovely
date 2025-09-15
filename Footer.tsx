import { Github, Linkedin, Mail, Code2, Trophy, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    },
    {
      icon: Mail,
      href: 'mailto:lovelypandey2427@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-xl border-t border-glass-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tech-gradient font-mono">&lt;LP/&gt;</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions. 
              Building the future, one line of code at a time.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Lovely Pandey</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.slice(1))}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/30 hover:bg-primary/10 border border-glass-border hover:border-primary/30 transition-all duration-300 group hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
            <div className="pt-2">
              <Button
                size="sm"
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Lovely_Pandey_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Lovely Pandey. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Built with React & TypeScript</span>
            <span className="hidden md:inline">•</span>
            <span>Designed for Excellence</span>
          </div>
        </div>

        {/* Achievement Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 glass-card p-3 hover:shadow-neon transition-all duration-300">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              500+ Problems Solved • SIH 2024 Qualified • Ready for New Challenges
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;