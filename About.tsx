import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Calendar, Award, Code, Heart } from 'lucide-react';
import aboutIllustration from '@/assets/about-illustration.jpg';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BTech in Computer Science Engineering',
      detail: 'GGSIPU, CGPA: 7.11 (2022-2026)'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'SIH 2024 Qualified, HackOn with Amazon',
      detail: 'Selected among top teams in prestigious hackathons'
    },
    {
      icon: Code,
      title: 'Problem Solving',
      description: '500+ Problems Solved',
      detail: 'LeetCode, Codeforces, and competitive programming'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Innovation & Technology',
      detail: 'Building solutions that make a difference'
    }
  ];

  const values = [
    'Continuous Learning',
    'Problem Solving',
    'Team Collaboration',
    'Innovation',
    'Quality Code',
    'User Experience'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tech-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer dedicated to creating innovative solutions and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image and Stats */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
              <div className="relative">
                <img
                  src={aboutIllustration}
                  alt="About Lovely Pandey"
                  className="w-full h-80 object-cover rounded-2xl glass-card"
                />
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="glass-card p-4 hover:neon-glow transition-all duration-300 group"
                  >
                    <IconComponent className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Hi there! I'm Lovely Pandey 👋
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Computer Science Engineering student at Guru Gobind Singh Indraprastha University, 
                  driven by an insatiable curiosity for technology and innovation. My journey began with a simple 
                  "Hello, World!" and has evolved into creating comprehensive web applications and solving complex algorithms.
                </p>
                
                <p>
                  With experience as a Web Developer at 1STOP, I've collaborated on responsive web applications, 
                  integrated APIs, and ensured optimal performance. My dedication to problem-solving is reflected 
                  in my 500+ solved problems on LeetCode and active participation in competitive programming.
                </p>
                
                <p>
                  I believe in learning by building. From AI-powered medical assistants to real-time video 
                  conferencing apps, each project teaches me something new and pushes the boundaries of what's possible. 
                  I'm particularly interested in full-stack development, AI/ML applications, and creating solutions 
                  that have real-world impact.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">What I Value</h4>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center space-x-2 glass-card p-3 hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div className="glass-card p-6 space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Currently Based in Delhi, India
              </h4>
              <p className="text-muted-foreground text-sm">
                Open to remote opportunities and excited about collaborating with innovative teams worldwide. 
                Always ready to take on new challenges and contribute to meaningful projects.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('projects');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore My Projects
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
    </section>
  );
};

export default About;