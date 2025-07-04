import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Award, Briefcase, Code2, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Full Stack Developer',
    'Backend Architect',
    'React Developer',
    'Frontend Developer',
    'Backend Developer',
    'Node.js Developer',
    'Golang Developer',
    'Nest.js Developer',
    'Devops Engineer',
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        if (currentText === texts[currentIndex]) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToNext = (section:string = 'about') => {
    const nextSection = document.getElementById(section);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
   const downloadCV =()=> {
    const link = document.createElement('a');
    link.href = '../static/Awaisniaz-Fullstack-Developer.pdf';  // path to your CV file
    link.download = 'Awaisniaz-Fullstack-Developer.pdf';  // suggested download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Calculate dynamic stats
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - 2020;
  const projectsCompleted = 10;
  const technologiesUsed = 20;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://miro.medium.com/v2/resize:fit:113/1*0xfRhxzErUdlm8FYazwPgQ.png"
              alt="Muhammad Awais Niaz"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Muhammad Awais Niaz
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-600 mb-4 h-10">
            I'm a{' '}
            <span className="text-blue-600 font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable apps from concept to production with 5+ years of experience 
            in modern web development, blockchain, and backend engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToNext('projects')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2" onClick={downloadCV}>
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>

          {/* Enhanced Statistics Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            {/* Years of Experience */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-7 h-7" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {yearsExperience}+
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">Years Experience</div>
              <div className="mt-2 h-1 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Projects Completed */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Briefcase className="w-7 h-7" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-2">
                {projectsCompleted}+
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">Projects Completed</div>
              <div className="mt-2 h-1 bg-gradient-to-r from-teal-200 to-teal-400 rounded-full">
                <div className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Code2 className="w-7 h-7" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
                {technologiesUsed}+
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">Technologies</div>
              <div className="mt-2 h-1 bg-gradient-to-r from-purple-200 to-purple-400 rounded-full">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
              </div>
            </div>

            {/* Success Rate */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-2">
                94%
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">Success Rate</div>
              <div className="mt-2 h-1 bg-gradient-to-r from-orange-200 to-orange-400 rounded-full">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-300"></div>
              </div>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-4 border border-blue-200/30">
              <div className="text-lg font-bold text-blue-700 mb-1">Full Stack Expert</div>
              <div className="text-sm text-blue-600">React • Node.js • TypeScript • Javascript • Golang • Nest.js </div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/10 to-teal-600/10 backdrop-blur-sm rounded-xl p-4 border border-teal-200/30">
              <div className="text-lg font-bold text-teal-700 mb-1">Databases</div>
              <div className="text-sm text-teal-600">Postgres • Mongodb • MySql</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-4 border border-purple-200/30">
              <div className="text-lg font-bold text-purple-700 mb-1">DevOps Engineer</div>
              <div className="text-sm text-purple-600">AWS • Docker • CI/CD</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={()=>{scrollToNext()}} className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;