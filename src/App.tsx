import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return <BlogPage />;
      default:
        return (
          <>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Blog />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;