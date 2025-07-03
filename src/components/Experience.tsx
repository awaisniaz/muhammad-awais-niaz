import React, { useState } from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import ExperienceDetail from './ExperienceDetail';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  const experiences = [
    {
      company: 'Codora Pvt Ltd',
      position: 'Full Stack Developer',
      duration: '2023 – Present',
      location: 'Remote',
      description: 'Leading full-stack development projects with React, Node.js, and cloud technologies. Architecting scalable solutions and mentoring junior developers.',
      achievements: [
        'Built 10+ production applications using React, Next.js, and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Led blockchain integration for NFT marketplace generating $2M+ revenue',
        'Mentored 5 junior developers improving team productivity by 40%',
        'Optimized application performance resulting in 50% faster load times'
      ],
      responsibilities: [
        'Lead full-stack development of web applications using React, Node.js, and TypeScript',
        'Design and implement scalable microservices architecture',
        'Collaborate with product managers and designers to deliver user-centric solutions',
        'Mentor junior developers and conduct code reviews',
        'Implement DevOps practices including CI/CD pipelines and automated testing',
        'Optimize application performance and ensure security best practices'
      ],
      technologies: ['React.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker'],
      companyInfo: {
        industry: 'Software Development',
        size: '50-100 employees',
        description: 'A leading software development company specializing in custom web applications, mobile solutions, and blockchain technology for startups and enterprises.',
        website: 'https://codora.com'
      },
      skills: {
        technical: ['React.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes', 'GraphQL', 'Redis', 'Elasticsearch'],
        soft: ['Team Leadership', 'Project Management', 'Client Communication', 'Problem Solving', 'Agile Methodology'],
        tools: ['VS Code', 'Git', 'Jenkins', 'Jira', 'Figma', 'Postman', 'Docker Desktop', 'AWS Console']
      },
      metrics: {
        projectsCompleted: 15,
        teamMembers: 8,
        performanceImprovement: '60%',
        clientSatisfaction: '98%'
      },
      projects: [
        {
          title: 'Ex-Sports NFT Marketplace',
          description: 'A comprehensive blockchain-based NFT marketplace for sports collectibles with smart contract integration, secure payment processing, and real-time trading features.',
          image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['React.js', 'Solidity', 'Web3.js', 'Node.js', 'PostgreSQL', 'AWS'],
          achievements: [
            'Generated $2M+ in trading volume within first 6 months',
            'Implemented gas-optimized smart contracts reducing transaction costs by 40%',
            'Built real-time trading system handling 1000+ concurrent users',
            'Integrated multiple payment gateways with 99.9% uptime'
          ],
          impact: 'Revolutionized sports collectibles trading by providing a secure, transparent, and user-friendly platform that attracted over 10,000 active users.',
          duration: '8 months',
          role: 'Lead Full Stack Developer',
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'Enterprise Dashboard System',
          description: 'A comprehensive analytics dashboard for enterprise clients featuring real-time data visualization, custom reporting, and multi-tenant architecture.',
          image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['Next.js', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB', 'Redis'],
          achievements: [
            'Reduced data processing time by 70% through optimized queries',
            'Implemented real-time updates serving 500+ concurrent users',
            'Built custom visualization components increasing user engagement by 45%',
            'Achieved 99.9% uptime with robust error handling and monitoring'
          ],
          impact: 'Empowered enterprise clients to make data-driven decisions faster, resulting in average 25% improvement in operational efficiency.',
          duration: '6 months',
          role: 'Senior Full Stack Developer',
          liveUrl: '#'
        },
        {
          title: 'Microservices Migration Project',
          description: 'Led the migration of a monolithic application to microservices architecture, improving scalability and maintainability for a high-traffic e-commerce platform.',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['Node.js', 'Docker', 'Kubernetes', 'AWS', 'RabbitMQ', 'PostgreSQL'],
          achievements: [
            'Successfully migrated 15 services with zero downtime',
            'Improved system scalability to handle 10x traffic load',
            'Reduced deployment time from 2 hours to 15 minutes',
            'Implemented comprehensive monitoring and logging system'
          ],
          impact: 'Transformed the platform architecture enabling rapid feature development and improved system reliability for 100,000+ daily users.',
          duration: '10 months',
          role: 'Technical Lead',
          githubUrl: '#'
        }
      ]
    },
    {
      company: 'MWAN Pvt Ltd',
      position: 'Senior Software Developer',
      duration: '2021 – 2023',
      location: 'Lahore, Pakistan',
      description: 'Developed complex web applications and managed team of 5 developers. Specialized in backend architecture and database optimization.',
      achievements: [
        'Optimized database queries improving application performance by 45%',
        'Developed microservices architecture serving 100K+ daily users',
        'Implemented real-time features using WebSocket and Redis',
        'Led team of 5 developers delivering 20+ successful projects',
        'Reduced server costs by 30% through infrastructure optimization'
      ],
      responsibilities: [
        'Develop and maintain complex web applications using Vue.js and Node.js',
        'Design and optimize database schemas and queries',
        'Lead a team of 5 developers and coordinate project deliveries',
        'Implement real-time features and WebSocket communications',
        'Optimize application performance and server infrastructure',
        'Collaborate with stakeholders to define technical requirements'
      ],
      technologies: ['Vue.js', 'Nest.js', 'MongoDB', 'Redis', 'Kafka', 'Firebase'],
      companyInfo: {
        industry: 'Technology Services',
        size: '100-200 employees',
        description: 'A technology services company providing custom software solutions, web development, and digital transformation services to businesses across various industries.',
        website: 'https://mwan.com'
      },
      skills: {
        technical: ['Vue.js', 'Nest.js', 'MongoDB', 'Redis', 'Kafka', 'Firebase', 'WebSocket', 'GraphQL', 'Jest', 'Cypress'],
        soft: ['Team Leadership', 'Technical Mentoring', 'Stakeholder Management', 'Agile Development', 'Code Review'],
        tools: ['VS Code', 'Git', 'MongoDB Compass', 'Redis CLI', 'Kafka Manager', 'Firebase Console', 'Postman']
      },
      metrics: {
        projectsCompleted: 25,
        teamMembers: 5,
        performanceImprovement: '45%',
        clientSatisfaction: '95%'
      },
      projects: [
        {
          title: 'Real-time Collaboration Platform',
          description: 'A comprehensive collaboration platform with real-time document editing, video conferencing, and project management features for remote teams.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['Vue.js', 'Nest.js', 'WebSocket', 'MongoDB', 'Redis', 'WebRTC'],
          achievements: [
            'Built real-time document collaboration supporting 50+ concurrent editors',
            'Implemented video conferencing with screen sharing capabilities',
            'Achieved 99.8% uptime with robust error handling',
            'Reduced data synchronization latency to under 100ms'
          ],
          impact: 'Enabled seamless remote collaboration for 500+ teams, increasing productivity by 35% during the pandemic.',
          duration: '12 months',
          role: 'Senior Developer & Team Lead',
          liveUrl: '#'
        },
        {
          title: 'E-commerce Analytics Engine',
          description: 'A powerful analytics engine for e-commerce platforms providing real-time insights, predictive analytics, and automated reporting capabilities.',
          image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['Node.js', 'MongoDB', 'Redis', 'Kafka', 'D3.js', 'Python'],
          achievements: [
            'Processed 1M+ events per day with real-time analytics',
            'Built predictive models improving sales forecasting by 60%',
            'Implemented automated reporting reducing manual work by 80%',
            'Optimized data pipeline processing 10TB+ data monthly'
          ],
          impact: 'Empowered e-commerce businesses to make data-driven decisions, resulting in average 20% increase in sales.',
          duration: '8 months',
          role: 'Backend Lead Developer',
          githubUrl: '#'
        }
      ]
    },
    {
      company: 'Target Energy Solutions',
      position: 'Software Engineer',
      duration: '2019 – 2021',
      location: 'Karachi, Pakistan',
      description: 'Focused on energy management systems and IoT integration. Built responsive web applications and REST APIs.',
      achievements: [
        'Created energy monitoring dashboard reducing costs by 30%',
        'Integrated 50+ IoT devices with cloud-based analytics platform',
        'Developed mobile-responsive interfaces for field operations',
        'Implemented automated reporting system saving 20 hours/week',
        'Built RESTful APIs serving 10,000+ requests per minute'
      ],
      responsibilities: [
        'Develop energy management web applications using React.js',
        'Build and maintain RESTful APIs using Express.js',
        'Integrate IoT devices with cloud-based analytics platforms',
        'Create responsive user interfaces for mobile and desktop',
        'Implement data visualization for energy consumption analytics',
        'Collaborate with hardware engineers for IoT device integration'
      ],
      technologies: ['React.js', 'Express.js', 'MySQL', 'IoT', 'Chart.js'],
      companyInfo: {
        industry: 'Energy & Utilities',
        size: '50-100 employees',
        description: 'A specialized energy solutions company providing smart energy management systems, IoT integration, and analytics platforms for industrial and commercial clients.',
        website: 'https://targetenergy.com'
      },
      skills: {
        technical: ['React.js', 'Express.js', 'MySQL', 'IoT Protocols', 'Chart.js', 'MQTT', 'REST APIs', 'JavaScript', 'HTML5', 'CSS3'],
        soft: ['Problem Solving', 'Technical Documentation', 'Client Support', 'Cross-functional Collaboration', 'Continuous Learning'],
        tools: ['VS Code', 'Git', 'MySQL Workbench', 'Postman', 'Arduino IDE', 'MQTT Explorer', 'Chrome DevTools']
      },
      metrics: {
        projectsCompleted: 12,
        teamMembers: 3,
        performanceImprovement: '30%',
        clientSatisfaction: '92%'
      },
      projects: [
        {
          title: 'Smart Energy Monitoring Dashboard',
          description: 'A comprehensive energy monitoring system with real-time data visualization, predictive analytics, and automated alerts for industrial facilities.',
          image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['React.js', 'Express.js', 'MySQL', 'Chart.js', 'MQTT', 'IoT Sensors'],
          achievements: [
            'Reduced energy costs by 30% through intelligent monitoring',
            'Integrated 50+ IoT sensors with real-time data processing',
            'Built predictive maintenance alerts preventing 15+ equipment failures',
            'Created mobile-responsive interface for field technicians'
          ],
          impact: 'Transformed energy management for industrial clients, resulting in significant cost savings and improved operational efficiency.',
          duration: '10 months',
          role: 'Full Stack Developer',
          liveUrl: '#'
        },
        {
          title: 'IoT Device Management Platform',
          description: 'A centralized platform for managing and monitoring IoT devices across multiple industrial sites with remote configuration and firmware updates.',
          image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['React.js', 'Node.js', 'MySQL', 'MQTT', 'WebSocket', 'Docker'],
          achievements: [
            'Managed 200+ IoT devices across 10 industrial sites',
            'Implemented over-the-air firmware updates reducing maintenance visits by 60%',
            'Built real-time device health monitoring with 99.5% accuracy',
            'Created automated alert system preventing critical failures'
          ],
          impact: 'Streamlined IoT device management operations, reducing maintenance costs by 40% and improving system reliability.',
          duration: '6 months',
          role: 'IoT Developer',
          githubUrl: '#'
        }
      ]
    },
    {
      company: 'Techinflux',
      position: 'Junior Developer',
      duration: '2019',
      location: 'Islamabad, Pakistan',
      description: 'Started career developing e-commerce solutions and learning modern web technologies.',
      achievements: [
        'Built responsive e-commerce platform handling 1000+ products',
        'Implemented payment gateway integration with 99.9% uptime',
        'Learned and applied agile development methodologies',
        'Contributed to 5+ successful project deliveries',
        'Improved page load speeds by 40% through optimization'
      ],
      responsibilities: [
        'Develop e-commerce web applications using JavaScript and PHP',
        'Create responsive user interfaces with HTML5, CSS3, and Bootstrap',
        'Integrate payment gateways and third-party APIs',
        'Implement basic SEO optimization techniques',
        'Participate in agile development processes and daily standups',
        'Learn and apply modern web development best practices'
      ],
      technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      companyInfo: {
        industry: 'Web Development',
        size: '10-50 employees',
        description: 'A web development agency specializing in e-commerce solutions, custom web applications, and digital marketing services for small to medium businesses.',
        website: 'https://techinflux.com'
      },
      skills: {
        technical: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'WordPress', 'SEO Basics'],
        soft: ['Learning Agility', 'Attention to Detail', 'Time Management', 'Team Collaboration', 'Customer Service'],
        tools: ['VS Code', 'Git', 'phpMyAdmin', 'Chrome DevTools', 'FileZilla', 'Photoshop', 'WordPress Admin']
      },
      metrics: {
        projectsCompleted: 8,
        teamMembers: 2,
        performanceImprovement: '40%',
        clientSatisfaction: '90%'
      },
      projects: [
        {
          title: 'Multi-vendor E-commerce Platform',
          description: 'A comprehensive e-commerce platform supporting multiple vendors with product management, order processing, and payment integration.',
          image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'PayPal API'],
          achievements: [
            'Built platform supporting 50+ vendors and 1000+ products',
            'Implemented secure payment processing with multiple gateways',
            'Created responsive design working across all devices',
            'Achieved 99.9% uptime with robust error handling'
          ],
          impact: 'Enabled small businesses to establish online presence, generating $500K+ in sales within first year.',
          duration: '4 months',
          role: 'Junior Full Stack Developer',
          liveUrl: '#'
        },
        {
          title: 'Restaurant Management System',
          description: 'A complete restaurant management solution with online ordering, table reservations, and inventory management capabilities.',
          image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
          technologies: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'AJAX'],
          achievements: [
            'Built online ordering system processing 100+ orders daily',
            'Implemented table reservation system with real-time availability',
            'Created inventory management reducing food waste by 25%',
            'Developed mobile-friendly interface for customers'
          ],
          impact: 'Digitized restaurant operations, improving efficiency by 35% and customer satisfaction by 20%.',
          duration: '3 months',
          role: 'Web Developer',
          githubUrl: '#'
        }
      ]
    }
  ];

  const handleExperienceClick = (experience: any) => {
    setSelectedExperience(experience);
  };

  const handleBackToList = () => {
    setSelectedExperience(null);
  };

  if (selectedExperience) {
    return <ExperienceDetail experience={selectedExperience} onBack={handleBackToList} />;
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of continuous learning and growth in the ever-evolving world of technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Main Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-teal-300 hidden lg:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline dot and date */}
                <div className="flex-shrink-0 lg:w-80 relative">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white flex-shrink-0 relative z-10 border-4 border-white shadow-lg">
                      <Building className="w-8 h-8" />
                    </div>
                    <div className="lg:ml-4">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience content */}
                <div 
                  className="flex-1 bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 relative cursor-pointer transform hover:-translate-y-1"
                  onClick={() => handleExperienceClick(exp)}
                >
                  {/* Connector line from timeline to card */}
                  <div className="absolute left-0 top-8 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-gray-200 hidden lg:block transform -translate-x-8"></div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                    Click to view detailed experience →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;