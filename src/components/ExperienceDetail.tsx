import React from 'react';
import { ArrowLeft, Calendar, MapPin, Building, ExternalLink, Github, Award, TrendingUp, Users, Code, Target, CheckCircle } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  impact: string;
  duration: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ExperienceDetailProps {
  experience: {
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
    projects: Project[];
    responsibilities: string[];
    teamSize?: number;
    companyInfo: {
      industry: string;
      size: string;
      description: string;
      website?: string;
    };
    skills: {
      technical: string[];
      soft: string[];
      tools: string[];
    };
    metrics: {
      projectsCompleted: number;
      teamMembers: number;
      performanceImprovement: string;
      clientSatisfaction: string;
    };
  };
  onBack: () => void;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experience, onBack }) => {
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
            Back to Experience
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center text-white">
                    <Building className="w-8 h-8" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{experience.position}</h1>
                    <h2 className="text-xl text-blue-600 font-semibold">{experience.company}</h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{experience.companyInfo.industry}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{experience.description}</p>

                {experience.companyInfo.website && (
                  <a
                    href={experience.companyInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Company Website
                  </a>
                )}
              </div>

              {/* Company Info Card */}
              <div className="lg:w-80">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-bold text-gray-900 mb-4">Company Overview</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Industry:</span>
                      <span className="ml-2 text-gray-600">{experience.companyInfo.industry}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Company Size:</span>
                      <span className="ml-2 text-gray-600">{experience.companyInfo.size}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{experience.companyInfo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">{experience.metrics.projectsCompleted}</div>
            <div className="text-gray-600 text-sm">Projects Completed</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-teal-600 mb-2">{experience.metrics.teamMembers}</div>
            <div className="text-gray-600 text-sm">Team Members</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-2">{experience.metrics.performanceImprovement}</div>
            <div className="text-gray-600 text-sm">Performance Boost</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold text-orange-600 mb-2">{experience.metrics.clientSatisfaction}</div>
            <div className="text-gray-600 text-sm">Client Satisfaction</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Responsibilities */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                Key Responsibilities
              </h3>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Major Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                Major Achievements
              </h3>
              <ul className="space-y-4">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                Key Projects
              </h3>
              <div className="space-y-6">
                {experience.projects.map((project, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {project.duration}
                          </span>
                        </div>
                        
                        <p className="text-blue-600 font-medium mb-2">{project.role}</p>
                        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4 mb-4">
                          <h6 className="font-semibold text-gray-900 mb-2">Business Impact:</h6>
                          <p className="text-gray-700 text-sm">{project.impact}</p>
                        </div>

                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                              <ExternalLink className="w-4 h-4" />
                              View Project
                            </button>
                          )}
                          {project.githubUrl && (
                            <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                              <Github className="w-4 h-4" />
                              Source Code
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technical Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Programming & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.technical.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h3>
              <div className="space-y-2">
                {experience.skills.soft.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Technologies</h3>
              <div className="space-y-3">
                {experience.technologies.map((tech) => (
                  <div key={tech} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                    <span className="font-medium text-gray-800">{tech}</span>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;