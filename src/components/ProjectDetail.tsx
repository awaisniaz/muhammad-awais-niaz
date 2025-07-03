import React from 'react';
import { ArrowLeft, Calendar, ExternalLink, Github, Award, TrendingUp, Users, Code, Target, CheckCircle, Clock, Tag } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    icon: React.ReactNode;
    features: string[];
    liveUrl: string;
    githubUrl: string;
    year: string;
    duration: string;
    role: string;
    teamSize: number;
    status: string;
    client: string;
    industry: string;
    challenges: string[];
    solutions: string[];
    results: string[];
    metrics: {
      users: string;
      performance: string;
      revenue: string;
      satisfaction: string;
    };
    gallery: string[];
    testimonial?: {
      text: string;
      author: string;
      position: string;
    };
    architecture: {
      frontend: string[];
      backend: string[];
      database: string[];
      deployment: string[];
    };
    learnings: string[];
  };
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>

          {/* Hero Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64 md:h-80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-lg opacity-90 max-w-2xl">{project.description}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Year</div>
                  <div className="font-bold text-gray-900">{project.year}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-bold text-gray-900">{project.duration}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Team Size</div>
                  <div className="font-bold text-gray-900">{project.teamSize}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="text-sm text-gray-600">Status</div>
                  <div className="font-bold text-gray-900">{project.status}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">{project.metrics.users}</div>
            <div className="text-gray-600 text-sm">Active Users</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-teal-600 mb-2">{project.metrics.performance}</div>
            <div className="text-gray-600 text-sm">Performance Boost</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-2">{project.metrics.revenue}</div>
            <div className="text-gray-600 text-sm">Revenue Generated</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-orange-600 mb-2">{project.metrics.satisfaction}</div>
            <div className="text-gray-600 text-sm">User Satisfaction</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                Project Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client</h4>
                  <p className="text-gray-700">{project.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industry</h4>
                  <p className="text-gray-700">{project.industry}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">My Role</h4>
                  <p className="text-gray-700">{project.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Project Duration</h4>
                  <p className="text-gray-700">{project.duration}</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                Challenges & Solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-red-600 mb-4">Challenges Faced</h4>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-600 mb-4">Solutions Implemented</h4>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Results & Impact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                Results & Impact
              </h3>
              <ul className="space-y-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Gallery */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{project.testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                    <div className="text-gray-600">{project.testimonial.position}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Key Learnings */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                Key Learnings
              </h3>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies Used */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
              <div className="space-y-3">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                    <span className="font-medium text-gray-800">{tech}</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Architecture</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.frontend.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.backend.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.database.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Deployment</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.deployment.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-600">Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-600">Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;