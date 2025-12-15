import React, { useState, useEffect } from 'react';
import { Github, Instagram, Mail, Code, Briefcase, User, ChevronDown, ExternalLink, Shield } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: "Python", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 50 },
    { name: ".NET", level: 50 },
    { name: "Data Scraping", level: 90 },
    { name: "Cybersecurity", level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ZS
          </div>
          <div className="flex gap-8">
            {['home', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all hover:text-purple-400 ${
                  activeSection === section ? 'text-purple-400' : ''
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center z-10 space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm mb-4 backdrop-blur-sm">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Zeyad Sherif
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Cybersecurity Specialist & Full Stack Developer
          </p>
          <p className="text-lg text-gray-500">
            Computer Science Student @ Suez Canal University
          </p>
          <div className="flex gap-6 justify-center mt-8">
            <a href="https://github.com/spam16111" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/6k8.z" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#contact" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="mt-12 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full z-10">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
                <User className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-gray-400 leading-relaxed">
                  Computer Science student at Suez Canal University with a passion for cybersecurity 
                  and full-stack development. I specialize in building secure applications and 
                  automated solutions using modern technologies.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
                <Shield className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">My Focus</h3>
                <p className="text-gray-400 leading-relaxed">
                  My main expertise lies in cybersecurity and data scraping. I develop robust security 
                  solutions and create powerful automation tools for data extraction and analysis. 
                  Always learning and exploring new security techniques.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Let's Make It together.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-purple-500 focus:outline-none transition-all resize-none"
              />
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="mt-8 flex gap-6 justify-center">
            <a href="mailto:zeyadelprns@gmail.com" className="text-gray-400 hover:text-purple-400 transition-all">
              zeyadelprns@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>© 2024 Zeyad Sherif. All rights reserved.</p>
      </footer>
    </div>
  );
}