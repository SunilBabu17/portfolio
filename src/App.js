import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, Menu, X, Sun, Moon, Code, Server, Layout, Instagram } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true); // Start in dark mode
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    'Programming': ['Java', 'Python', 'JavaScript'],
    'Frontend': ['React', 'HTML', 'CSS', 'JavaScript'],
    'Backend': ['Spring Boot', 'Spring MVC', 'Hibernate'],
    'Database': ['MySQL'],
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Maven'],
    'Tools': ['Git', 'VS Code', 'Postman', 'JUnit']
  };

  const projects = [
    {
      title: 'Driver Drowsiness Detection System',
      description: 'Built a real-time computer vision-based system using Python, OpenCV, and machine learning algorithms to detect signs of driver fatigue using facial landmark detection and eye-tracking (EAR, MAR).',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      icon: <Code className="w-6 h-6" />,
      github: 'https://github.com/SunilBabu17/drowsiness-detection'
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed a full-stack e-commerce platform with product management, shopping cart, user authentication, and seamless checkout experience using modern web technologies.',
      tech: ['React', 'Spring Boot', 'MySQL', 'REST API'],
      icon: <Server className="w-6 h-6" />,
      github: 'https://github.com/SunilBabu17/ecommerce-app'
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and built a modern, responsive portfolio website with dark mode toggle, smooth animations, and intuitive navigation to showcase professional work and skills.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      icon: <Layout className="w-6 h-6" />,
      github: 'https://github.com/SunilBabu17/portfolio'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              SB
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item
                      ? 'text-blue-500 font-semibold'
                      : darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 ${
                    activeSection === item ? 'text-blue-500 font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Photo */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/profile.jpeg" 
                  alt="Sunil Babu R"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Sunil Babu R
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  Software Developer
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  Java Full Stack Developer
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  Front End Developer
                </span>
              </div>
              <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Building scalable web applications with Java, JavaScript & React
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="mailto:sunil.babu1310@gmail.com"
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  Get In Touch
                </a>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                    darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate Software Developer specializing in Java Full Stack development with a strong foundation in building scalable web applications using Java, JavaScript, and React. With a B.E. in Computer Science and hands-on experience in Spring Boot, React, and cloud technologies, I bring both technical expertise and creative problem-solving to every project. I'm driven by the challenge of creating efficient, user-friendly solutions and am eager to contribute to innovative development teams where I can grow and make a meaningful impact.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                <p className="text-2xl font-bold text-blue-500">8.3</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>CGPA</p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                <p className="text-2xl font-bold text-purple-500">3+</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects</p>
              </div>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                <p className="text-2xl font-bold text-pink-500">Chennai</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} hover:shadow-xl transition-shadow`}
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white'} hover:shadow-2xl transition-all hover:-translate-y-2`}
              >
                <div className="mb-4 text-blue-500">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 justify-center py-2 px-4 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:sunil.babu1310@gmail.com"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/sunil-babu-r-1596842b3/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/SunilBabu17"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://instagram.com/sunil_babu17"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'}`}>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2024 Sunil Babu R. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

