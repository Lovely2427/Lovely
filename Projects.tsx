import { ExternalLink, Github, Code, Database, Brain, Video, Bot, BarChart3, FileText, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'MediLens – AI Visual Medical Assistance',
      description: 'AI-powered medical imaging assistant using Python, Streamlit, and Google\'s Generative AI, enabling healthcare professionals to analyze images and generate detailed diagnostic reports within seconds.',
      longDescription: 'Designed to enhance diagnostic efficiency and accuracy by providing structured recommendations and treatment suggestions, supporting quick decision-making in time-sensitive medical scenarios.',
      tech: ['Python', 'Streamlit', 'Google AI', 'Computer Vision', 'Healthcare AI'],
      github: 'https://github.com/Lovely2427/MediLens-AI_VisualMedicalAssistance',
      live: null,
      icon: Brain,
      gradient: 'from-pink-500 to-rose-500',
      featured: true
    },
    {
      title: 'DigitalNest - Brainly Clone',
      description: 'Full-stack web platform using Node.js, Express.js, React, and MongoDB, enabling 100+ users to authenticate via local credentials and Google OAuth 2.0.',
      longDescription: 'Implemented responsive user interface for creating and managing personalized mood boards, improving user engagement by 35%, with secure RESTful API integration.',
      tech: ['TypeScript', 'React.js', 'Node.js', 'MongoDB', 'OAuth 2.0', 'Zod'],
      github: 'https://github.com/Lovely2427/DigitalNest',
      live: null,
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'Charcha-Club – Video Conferencing',
      description: 'Real-time peer-to-peer video conferencing web application utilizing WebRTC, Socket.io, and Node.js, enabling high-performance media streaming with minimal latency.',
      longDescription: 'Optimized peer connection lifecycle management, reducing call drop rates by 25% and improving connection stability across modern browsers including Chrome, Firefox, and Edge.',
      tech: ['JavaScript', 'WebRTC', 'Socket.io', 'Express.js', 'Real-time'],
      github: 'https://github.com/Lovely2427/Charcha-Club',
      live: null,
      icon: Video,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Auto-Internshala',
      description: 'Automated web scraping solution that streamlines Internshala job searches through seamless login, custom filtering, and data extraction with 70% accuracy.',
      longDescription: 'Built configurable headless browser system processing 500+ listings per session, reducing manual application time by 90% with structured JSON/CSV data export.',
      tech: ['Node.js', 'Puppeteer', 'Web Automation', 'Data Scraping'],
      github: 'https://github.com/Lovely2427/Auto-Internshala',
      live: null,
      icon: Bot,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'MAPTY – Workout Tracking',
      description: 'Interactive exercise tracking application using HTML, CSS, and JavaScript, allowing users to log running and cycling sessions with comprehensive metrics.',
      longDescription: 'Designed for fitness enthusiasts to monitor workouts visually on a map, promoting physical activity with user-friendly interface optimized for portfolio demonstrations.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Geolocation API', 'Local Storage'],
      github: 'https://github.com/Lovely2427/MAPTY',
      live: 'https://mapty-blue-iota.vercel.app/',
      icon: Smartphone,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'NewsMania – News Aggregator',
      description: 'Responsive news aggregation platform using JavaScript, Node.js, allowing users to access the latest news from multiple sources in one place.',
      longDescription: 'Designed with scalability and performance in mind, featuring structured APIs and optimized data fetching to enhance user experience across devices.',
      tech: ['JavaScript', 'Node.js', 'REST APIs', 'Responsive Design'],
      github: 'https://github.com/Lovely2427/NewsMania',
      live: 'https://news-mania-v95q-3fz0skch8-lovelys-projects-5a39a709.vercel.app/',
      icon: FileText,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'DigiLife – Personal Assistant AI',
      description: 'AI-powered personal assistant using Python, enabling users to automate tasks, manage schedules, and access information through natural language interactions.',
      longDescription: 'Designed for simplicity and efficiency with modular codebase, supporting seamless integration for daily productivity and personalized assistance.',
      tech: ['Python', 'NLP', 'AI/ML', 'Automation', 'Voice Recognition'],
      github: 'https://github.com/Lovely2427/DigiLife-Personal-Assistant',
      live: null,
      icon: Brain,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Text2Emotion – Emotion Analysis',
      description: 'Machine learning-powered web app using Python, Streamlit, NLTK, and Scikit-learn to detect emotions from text inputs for various applications.',
      longDescription: 'Engineered scalable NLP pipeline with multiple emotion categories, achieving high classification accuracy for social media, mental health, and customer feedback analysis.',
      tech: ['Python', 'Streamlit', 'NLTK', 'Scikit-learn', 'NLP', 'ML'],
      github: 'https://github.com/Lovely2427/Text2Emotion',
      live: null,
      icon: BarChart3,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'My CVision – Resume Builder',
      description: 'Client-side, privacy-first resume builder using Vue.js, TypeScript, CSS3, and KaTeX, enabling users to create, preview, and export resumes in Markdown.',
      longDescription: 'Delivered multi-resume management system with 100% local data storage, zero tracking, advanced customization options, and over 1,000+ downloads.',
      tech: ['Vue.js', 'TypeScript', 'CSS3', 'KaTeX', 'PWA', 'Privacy-First'],
      github: 'https://github.com/Lovely2427/My-CVision',
      live: 'https://ohmycv.app/',
      icon: FileText,
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tech-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Highlighted Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="glass-card p-8 hover:shadow-neon transition-all duration-500 group hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="glass-card p-6 hover:shadow-neon transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {project.title.split(' –')[0]}
                    </h4>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-primary hover:bg-primary/10 p-2 h-8"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.live && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-primary hover:bg-primary/10 p-2 h-8"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
          >
            <a
              href="https://github.com/Lovely2427"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-48"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl -translate-x-48"></div>
    </section>
  );
};

export default Projects;