import { Code, Database, Wrench, BarChart, Globe, Lightbulb, Users, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C++', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Python', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'TypeScript', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'Java', level: 70, color: 'from-red-500 to-red-600' },
        { name: 'C', level: 85, color: 'from-gray-600 to-gray-700' }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 85, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Next.js', level: 75, color: 'from-black to-gray-800' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-orange-600' },
        { name: 'Tailwind CSS', level: 80, color: 'from-teal-500 to-teal-600' },
        { name: 'Vue.js', level: 70, color: 'from-green-400 to-green-500' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-600 to-green-700' },
        { name: 'Express.js', level: 85, color: 'from-gray-700 to-gray-800' },
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 70, color: 'from-blue-600 to-blue-700' },
        { name: 'REST APIs', level: 85, color: 'from-purple-500 to-purple-600' }
      ]
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'from-gray-800 to-black' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Postman', level: 80, color: 'from-orange-500 to-orange-600' },
        { name: 'Docker', level: 65, color: 'from-blue-400 to-blue-500' },
        { name: 'Linux', level: 70, color: 'from-yellow-600 to-yellow-700' }
      ]
    },
    {
      title: 'Data & Analysis',
      icon: BarChart,
      skills: [
        { name: 'Microsoft Excel', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'Power BI', level: 70, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Pandas', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'NumPy', level: 70, color: 'from-blue-500 to-blue-600' },
        { name: 'Matplotlib', level: 65, color: 'from-red-500 to-red-600' }
      ]
    }
  ];

  const nonTechnicalSkills = [
    {
      title: 'Problem Solving',
      description: 'Analytical thinking and creative solutions',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Team Collaboration',
      description: 'Effective communication and teamwork',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Project Management',
      description: 'Planning, execution, and delivery',
      icon: Target,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Adaptability and growth mindset',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tech-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Technical Skills</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="glass-card p-6 hover:shadow-neon transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Non-Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechnicalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="glass-card p-6 text-center hover:shadow-neon transition-all duration-300 group hover:scale-105"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitive Programming Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card p-8 text-center hover:shadow-neon transition-all duration-300 group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              500+
            </div>
            <div className="text-lg font-semibold text-foreground mb-1">LeetCode Problems</div>
            <div className="text-sm text-muted-foreground">Consistent problem solving</div>
          </div>
          
          <div className="glass-card p-8 text-center hover:shadow-neon transition-all duration-300 group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              Newbie
            </div>
            <div className="text-lg font-semibold text-foreground mb-1">Codeforces Rating</div>
            <div className="text-sm text-muted-foreground">Active competitive programming</div>
          </div>
          
          <div className="glass-card p-8 text-center hover:shadow-neon transition-all duration-300 group">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              2+
            </div>
            <div className="text-lg font-semibold text-foreground mb-1">Hackathon Selections</div>
            <div className="text-sm text-muted-foreground">SIH 2024, HackOn Amazon</div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Continuous Learning Journey</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Current Focus Areas</h4>
              <div className="space-y-3">
                {[
                  'Advanced System Design Patterns',
                  'Cloud Computing (AWS, Azure)',
                  'Machine Learning & AI Applications',
                  'DevOps & CI/CD Pipelines',
                  'Microservices Architecture'
                ].map((area) => (
                  <div key={area} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Next Goals</h4>
              <div className="space-y-3">
                {[
                  'Contribute to Open Source Projects',
                  'Build Scalable SaaS Applications',
                  'Master Advanced Algorithms',
                  'Explore Blockchain Development',
                  'Lead Technical Teams'
                ].map((goal) => (
                  <div key={goal} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
    </section>
  );
};

export default Skills;