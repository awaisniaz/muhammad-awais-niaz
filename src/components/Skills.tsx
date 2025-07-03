import React from 'react';
import { Code, Server, Blocks, Cloud, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      skills: ['React.js', 'TypeScript', 'Next.js', 'Javascript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      skills: ['Node.js', 'Nest.js', 'Golang', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      title: 'Blockchain',
      icon: <Blocks className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      skills: ['Web3.js', 'Ether.js', 'Smart Contracts', 'DeFi', 'NFTs']
    },
    {
      title: 'DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      skills: ['Docker', 'Jenkins', 'AWS', 'Firebase', 'Redis', 'Kafka', 'RabbitMQ']
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-gray-500 to-gray-600',
      skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Jira', 'Linux','Cursor','bolt.new','Replit','Rocket.ai']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white mb-6 mx-auto`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
              <div className="text-gray-600">Frameworks & Libraries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
              <div className="text-gray-600">Databases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-600">Tools & Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;