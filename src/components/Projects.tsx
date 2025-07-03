import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, MapPin, Users, Briefcase, Calendar, Award, TrendingUp } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  const projects = [
    {
      title: 'Ex-Sports Marketplace',
      description: 'A comprehensive blockchain-based NFT marketplace for sports collectibles with smart contract integration and secure payment processing.',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'Solidity', 'Web3.js', 'Node.js', 'PostgreSQL'],
      category: 'Blockchain',
      icon: <Smartphone className="w-6 h-6" />,
      features: ['NFT Minting & Trading', 'Smart Contracts', 'Cryptocurrency Payments', 'User Authentication'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024',
      duration: '8 months',
      role: 'Lead Full Stack Developer',
      teamSize: 5,
      status: 'Live',
      client: 'Ex-Sports Inc.',
      industry: 'Sports & Entertainment',
      challenges: [
        'Implementing gas-efficient smart contracts for high-volume trading',
        'Building real-time trading system with WebSocket connections',
        'Integrating multiple cryptocurrency payment gateways',
        'Ensuring security for high-value NFT transactions'
      ],
      solutions: [
        'Optimized smart contract code reducing gas costs by 40%',
        'Implemented Redis-based caching for real-time updates',
        'Built comprehensive payment gateway abstraction layer',
        'Added multi-signature wallet integration for security'
      ],
      results: [
        'Generated $2M+ in trading volume within first 6 months',
        'Achieved 99.9% uptime with robust error handling',
        'Attracted 10,000+ active users and 50+ verified athletes',
        'Reduced transaction costs by 40% compared to competitors'
      ],
      metrics: {
        users: '10K+',
        performance: '40%',
        revenue: '$2M+',
        satisfaction: '98%'
      },
      gallery: [
        'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      testimonial: {
        text: 'Muhammad delivered an exceptional NFT marketplace that exceeded our expectations. The platform is robust, user-friendly, and has generated significant revenue for our business.',
        author: 'Alex Johnson',
        position: 'CEO, Ex-Sports Inc.'
      },
      architecture: {
        frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Web3.js'],
        backend: ['Node.js', 'Express.js', 'Socket.io', 'JWT'],
        database: ['PostgreSQL', 'Redis', 'IPFS'],
        deployment: ['AWS', 'Docker', 'Nginx', 'CloudFlare']
      },
      learnings: [
        'Advanced blockchain development and smart contract optimization',
        'Real-time system architecture for high-frequency trading',
        'Security best practices for cryptocurrency applications',
        'Scalable infrastructure design for high-traffic applications'
      ]
    },
    {
      title: 'Navigate Marine',
      description: 'Advanced marine navigation system with real-time GPS tracking, weather integration, and route optimization for maritime operations.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
      category: 'Mapping',
      icon: <MapPin className="w-6 h-6" />,
      features: ['Real-time Tracking', 'Weather Integration', 'Route Planning', 'Emergency Alerts'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023',
      duration: '10 months',
      role: 'Senior Full Stack Developer',
      teamSize: 4,
      status: 'Live',
      client: 'Marine Solutions Ltd.',
      industry: 'Maritime & Logistics',
      challenges: [
        'Handling real-time GPS data from multiple vessels simultaneously',
        'Integrating complex weather APIs with accurate forecasting',
        'Building offline-capable navigation for remote areas',
        'Optimizing route calculations for fuel efficiency'
      ],
      solutions: [
        'Implemented WebSocket clustering for scalable real-time updates',
        'Built weather data aggregation system with multiple API sources',
        'Added Progressive Web App capabilities for offline functionality',
        'Developed custom routing algorithm considering weather and fuel costs'
      ],
      results: [
        'Reduced fuel costs by 25% through optimized routing',
        'Improved safety with real-time weather alerts and emergency features',
        'Increased operational efficiency by 30% for fleet management',
        'Successfully deployed across 200+ vessels in first year'
      ],
      metrics: {
        users: '200+',
        performance: '25%',
        revenue: '$500K',
        satisfaction: '96%'
      },
      gallery: [
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      testimonial: {
        text: 'The navigation system has transformed our fleet operations. The real-time tracking and weather integration have significantly improved our efficiency and safety.',
        author: 'Captain Sarah Wilson',
        position: 'Fleet Manager, Marine Solutions Ltd.'
      },
      architecture: {
        frontend: ['Vue.js', 'Vuex', 'Vue Router', 'Leaflet.js'],
        backend: ['Node.js', 'Express.js', 'Socket.io', 'Passport.js'],
        database: ['MongoDB', 'Redis', 'InfluxDB'],
        deployment: ['AWS', 'Docker', 'Kubernetes', 'CloudWatch']
      },
      learnings: [
        'Real-time geospatial data processing and visualization',
        'Integration with multiple third-party APIs and services',
        'Building offline-first applications for remote environments',
        'Performance optimization for data-intensive applications'
      ]
    },
    {
      title: 'Virtual Event System',
      description: 'Scalable virtual event platform supporting live streaming, interactive sessions, networking, and comprehensive analytics.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'WebRTC', 'Redis', 'AWS'],
      category: 'Web Platform',
      icon: <Users className="w-6 h-6" />,
      features: ['Live Streaming', 'Interactive Chat', 'Virtual Networking', 'Analytics Dashboard'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023',
      duration: '12 months',
      role: 'Technical Lead',
      teamSize: 8,
      status: 'Live',
      client: 'EventTech Solutions',
      industry: 'Events & Technology',
      challenges: [
        'Building scalable video streaming for thousands of concurrent users',
        'Creating seamless virtual networking experiences',
        'Implementing real-time interactive features across multiple sessions',
        'Ensuring platform stability during high-traffic events'
      ],
      solutions: [
        'Implemented CDN-based video streaming with adaptive bitrate',
        'Built AI-powered networking recommendations and matchmaking',
        'Created microservices architecture for independent feature scaling',
        'Added comprehensive monitoring and auto-scaling capabilities'
      ],
      results: [
        'Successfully hosted events with 50,000+ concurrent attendees',
        'Achieved 99.8% uptime during critical live events',
        'Increased attendee engagement by 60% through interactive features',
        'Generated $1M+ revenue for clients through virtual event monetization'
      ],
      metrics: {
        users: '50K+',
        performance: '60%',
        revenue: '$1M+',
        satisfaction: '97%'
      },
      gallery: [
        'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      testimonial: {
        text: 'The virtual event platform exceeded all our expectations. The seamless streaming and interactive features made our events more engaging than ever before.',
        author: 'Michael Chen',
        position: 'CTO, EventTech Solutions'
      },
      architecture: {
        frontend: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS'],
        backend: ['Node.js', 'GraphQL', 'WebRTC', 'Socket.io'],
        database: ['PostgreSQL', 'Redis', 'Elasticsearch'],
        deployment: ['AWS', 'Docker', 'Kubernetes', 'CloudFront']
      },
      learnings: [
        'Large-scale video streaming and WebRTC implementation',
        'Microservices architecture and distributed systems',
        'Real-time communication and event-driven architecture',
        'Performance optimization for high-concurrency applications'
      ]
    },
    {
      title: 'SEHAHUB Medical Supply',
      description: 'Healthcare supply chain management system with inventory tracking, automated ordering, and supplier management.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'Nest.js', 'PostgreSQL', 'Docker', 'AWS'],
      category: 'Healthcare',
      icon: <Globe className="w-6 h-6" />,
      features: ['Inventory Management', 'Supplier Portal', 'Automated Ordering', 'Compliance Tracking'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2022',
      duration: '14 months',
      role: 'Full Stack Developer',
      teamSize: 6,
      status: 'Live',
      client: 'SEHAHUB Healthcare',
      industry: 'Healthcare & Medical',
      challenges: [
        'Ensuring HIPAA compliance and data security',
        'Building complex inventory tracking with expiration management',
        'Integrating with multiple supplier APIs and systems',
        'Creating automated ordering algorithms for critical supplies'
      ],
      solutions: [
        'Implemented end-to-end encryption and audit logging',
        'Built predictive analytics for inventory management',
        'Created unified API gateway for supplier integrations',
        'Developed ML-based demand forecasting for automated ordering'
      ],
      results: [
        'Reduced inventory costs by 30% through optimized ordering',
        'Improved supply chain visibility by 90% across all facilities',
        'Achieved 100% compliance with healthcare regulations',
        'Prevented stockouts of critical medical supplies during COVID-19'
      ],
      metrics: {
        users: '500+',
        performance: '30%',
        revenue: '$800K',
        satisfaction: '95%'
      },
      gallery: [
        'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      testimonial: {
        text: 'The supply chain system has revolutionized our operations. We now have complete visibility and control over our medical supplies.',
        author: 'Dr. Emily Rodriguez',
        position: 'Chief Operations Officer, SEHAHUB Healthcare'
      },
      architecture: {
        frontend: ['React.js', 'Redux', 'Material-UI', 'Chart.js'],
        backend: ['Nest.js', 'TypeORM', 'Bull Queue', 'Passport.js'],
        database: ['PostgreSQL', 'Redis', 'MongoDB'],
        deployment: ['AWS', 'Docker', 'ECS', 'RDS']
      },
      learnings: [
        'Healthcare compliance and security requirements',
        'Complex inventory management and supply chain optimization',
        'Machine learning for demand forecasting',
        'Integration with legacy healthcare systems'
      ]
    },
    {
      title: 'Prisampay Wallet',
      description: 'Secure digital wallet application with multi-currency support, transaction history, and advanced security features.',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
      category: 'FinTech',
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ['Multi-currency Support', 'Secure Transactions', 'Biometric Authentication', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2022',
      duration: '9 months',
      role: 'Mobile App Developer',
      teamSize: 4,
      status: 'Live',
      client: 'Prisampay Financial',
      industry: 'Financial Technology',
      challenges: [
        'Implementing bank-level security for mobile transactions',
        'Building offline transaction capabilities',
        'Integrating with multiple payment processors and banks',
        'Ensuring compliance with financial regulations'
      ],
      solutions: [
        'Added biometric authentication and hardware security modules',
        'Implemented local transaction queuing with sync capabilities',
        'Built unified payment gateway with fallback mechanisms',
        'Created comprehensive audit trails and compliance reporting'
      ],
      results: [
        'Processed $5M+ in transactions with zero security incidents',
        'Achieved 4.8/5 app store rating with 100K+ downloads',
        'Reduced transaction processing time by 50%',
        'Successfully passed all financial security audits'
      ],
      metrics: {
        users: '100K+',
        performance: '50%',
        revenue: '$5M+',
        satisfaction: '96%'
      },
      gallery: [
        'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      testimonial: {
        text: 'The wallet app has transformed how our customers handle their finances. The security and user experience are exceptional.',
        author: 'James Thompson',
        position: 'Product Manager, Prisampay Financial'
      },
      architecture: {
        frontend: ['React Native', 'Redux', 'React Navigation', 'Expo'],
        backend: ['Node.js', 'Express.js', 'Mongoose', 'JWT'],
        database: ['MongoDB', 'Redis', 'Firebase'],
        deployment: ['AWS', 'Docker', 'CodePush', 'App Store']
      },
      learnings: [
        'Mobile app security and financial compliance',
        'React Native performance optimization',
        'Payment gateway integration and PCI compliance',
        'Offline-first mobile application architecture'
      ]
    },
    {
      title: 'JobBoard Platform',
      description: 'Modern job board platform connecting employers and job seekers with AI-powered matching and comprehensive applicant tracking.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Web Platform',
      icon: <Briefcase className="w-6 h-6" />,
      features: ['AI Job Matching', 'ATS Integration', 'Video Interviews', 'Analytics Dashboard'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2021',
      duration: '11 months',
      role: 'Full Stack Developer',
      teamSize: 5,
      status: 'Live',
      client: 'TalentConnect Inc.',
      industry: 'Human Resources',
      challenges: [
        'Building AI-powered job matching algorithms',
        'Creating seamless video interview experiences',
        'Integrating with multiple ATS and HR systems',
        'Handling high-volume job applications and searches'
      ],
      solutions: [
        'Implemented machine learning models for skill and culture matching',
        'Built WebRTC-based video interview platform',
        'Created standardized API for ATS integrations',
        'Optimized database queries and implemented caching strategies'
      ],
      results: [
        'Improved job matching accuracy by 75% using AI algorithms',
        'Reduced time-to-hire by 40% for participating companies',
        'Facilitated 10,000+ successful job placements',
        'Achieved 92% user satisfaction rating from both employers and candidates'
      ],
      metrics: {
        users: '25K+',
        performance: '75%',
        revenue: '$600K',
        satisfaction: '92%'
      },
      gallery: [
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600'
      ],
      testimonial: {
        text: 'The job board platform has streamlined our hiring process significantly. The AI matching feature has helped us find the perfect candidates faster than ever.',
        author: 'Lisa Park',
        position: 'HR Director, TalentConnect Inc.'
      },
      architecture: {
        frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form'],
        backend: ['Next.js API', 'Prisma', 'NextAuth.js', 'Nodemailer'],
        database: ['PostgreSQL', 'Redis', 'Elasticsearch'],
        deployment: ['Vercel', 'AWS', 'Docker', 'CloudFlare']
      },
      learnings: [
        'Machine learning integration for recommendation systems',
        'Video streaming and WebRTC implementation',
        'Complex database design for HR and recruitment systems',
        'Performance optimization for search-heavy applications'
      ]
    }
  ];

  const categories = ['All', 'Blockchain', 'Web Platform', 'FinTech', 'Healthcare', 'Mapping'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [viewMode, setViewMode] = React.useState('grid'); // 'grid' or 'timeline'

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Calculate project statistics
  const totalProjects = projects.length;
  const yearsActive = new Date().getFullYear() - 2020;
  const categoriesCount = [...new Set(projects.map(p => p.category))].length;
  const technologiesCount = [...new Set(projects.flatMap(p => p.technologies))].length;

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBackToList} />;
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A showcase of innovative solutions I've built across various industries and technologies.
          </p>

          {/* Project Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalProjects}+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-teal-600 mb-2">{yearsActive}+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{categoriesCount}</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{technologiesCount}+</div>
              <div className="text-gray-600 font-medium">Technologies Used</div>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-white/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  viewMode === 'timeline'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Timeline View
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-white/20 hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {viewMode === 'grid' ? (
          // Grid Layout
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {project.year}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {project.icon}
                    </div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                    Click to view detailed project →
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Timeline Layout
          <div className="max-w-6xl mx-auto relative">
            {/* Main Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-teal-300 hidden lg:block rounded-full shadow-lg"></div>
            
            {filteredProjects.map((project, index) => (
              <div key={project.title} className="relative mb-16 last:mb-0">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 lg:w-16 relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 relative z-10 border-4 border-white shadow-xl mx-auto lg:mx-0">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project content */}
                  <div 
                    className="flex-1 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative border border-white/20 cursor-pointer transform hover:-translate-y-1"
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Connector line from timeline to card */}
                    <div className="absolute left-0 top-8 w-8 h-1 bg-gradient-to-r from-blue-300 to-white/50 hidden lg:block transform -translate-x-8 rounded-full"></div>
                    
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                          <span className="text-sm text-gray-500">{project.year}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {project.features.slice(0, 3).map((feature) => (
                              <li key={feature} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 5 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                +{project.technologies.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                          Click to view detailed project →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;