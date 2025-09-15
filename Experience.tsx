import { Building, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const experience = {
    title: 'Web Developer',
    company: '1STOP',
    duration: 'August 2024 – September 2024',
    type: 'Internship',
    location: 'Remote',
    achievements: [
      'Collaborated in end-to-end development of responsive web applications, translating design mockups into functional user interfaces',
      'Utilized HTML, CSS, JavaScript, AJAX, and JSON for front-end development',
      'Integrated React.js components for dynamic front-end rendering',
      'Troubleshot and resolved front-end and API-related issues, ensuring 99% uptime',
      'Integrated third-party REST APIs to extend functionality and enhance user experience',
      'Optimized performance across the application stack'
    ],
    skills: ['HTML/CSS', 'JavaScript', 'React.js', 'AJAX', 'JSON', 'REST APIs', 'Performance Optimization']
  };

  const achievements = [
    {
      title: 'Smart India Hackathon 2024',
      description: 'Qualified among 50+ teams nationwide',
      icon: '🏆',
      color: 'text-yellow-400'
    },
    {
      title: 'HackOn with Amazon Season 5',
      description: 'Selected among 130+ teams for Smart Payment Optimization',
      icon: '🚀',
      color: 'text-primary'
    },
    {
      title: 'LeetCode Problem Solver',
      description: '500+ problems solved with consistent progress',
      icon: '💡',
      color: 'text-green-400'
    },
    {
      title: 'Competitive Programming',
      description: 'Active participant on Codeforces platform',
      icon: '⚡',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tech-gradient">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building experience through hands-on projects and competitive achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Experience</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="relative glass-card p-6 ml-16 hover:shadow-neon transition-all duration-300 group">
                {/* Timeline dot */}
                <div className="absolute -left-16 top-8 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{experience.title}</h4>
                      <p className="text-lg text-primary font-medium">{experience.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
                      {experience.type}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.duration}
                  </div>
                  
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements & Recognition */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Achievements & Recognition</h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="glass-card p-6 hover:shadow-neon transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Education</h3>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 hover:shadow-neon transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-foreground">
                    Bachelor of Technology in Computer Science Engineering
                  </h4>
                  <p className="text-lg text-primary">Guru Gobind Singh Indraprastha University</p>
                  <p className="text-muted-foreground">CGPA: 7.11</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full">
                    Aug 2022 – Aug 2026
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-glass-border">
                <h5 className="text-sm font-medium text-foreground mb-3">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming',
                    'Database Management Systems',
                    'Web Development',
                    'Software Engineering',
                    'Computer Networks',
                    'Operating Systems'
                  ].map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 hover:shadow-neon transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Postman API Student Expert</h4>
                  <p className="text-sm text-muted-foreground">API Testing & Development</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 hover:shadow-neon transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">DSA in C++</h4>
                  <p className="text-sm text-muted-foreground">Coding Ninjas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl translate-y-48 translate-x-48"></div>
    </section>
  );
};

export default Experience;