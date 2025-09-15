import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2, Trophy, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lovelypandey2427@gmail.com',
      href: 'mailto:lovelypandey2427@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9318413076',
      href: 'tel:+919318413076'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Lovely2427',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lovely-pandey-528511259/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Code2,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Lovely24/',
      color: 'hover:text-yellow-400'
    },
    {
      icon: Trophy,
      label: 'Codeforces',
      href: 'https://codeforces.com/profile/Lovely24',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tech-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project or discuss exciting opportunities? 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8 hover:shadow-neon transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-glass-border focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-glass-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50 border-glass-border focus:border-primary"
                  placeholder="Project Collaboration, Job Opportunity, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-glass-border focus:border-primary resize-none"
                  placeholder="Tell me about your project, idea, or opportunity..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 py-6 text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8 hover:shadow-neon transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 hover:shadow-neon transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-background/30 hover:bg-primary/10 border border-glass-border hover:border-primary/30 transition-all duration-300 group hover:scale-105"
                    >
                      <IconComponent className={`w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors ${social.color}`} />
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card p-8 hover:shadow-neon transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-foreground">Currently Available</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                I'm actively seeking new opportunities in full-stack development, 
                software engineering, and innovative tech projects.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Full-time positions</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Freelance projects</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Collaborative opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Response Promise */}
        <div className="text-center mt-12">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              ⚡ Quick Response Guarantee
            </h4>
            <p className="text-muted-foreground">
              I typically respond to messages within 24 hours. 
              For urgent matters, feel free to reach out directly via phone or LinkedIn.
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-48"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -translate-x-48"></div>
    </section>
  );
};

export default Contact;