import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Rocket, UserPlus, Menu, X, ChevronRight, Lightbulb, Send, Globe, Code, Palette, ArrowRight, Info, Video, MessageCircle, Star, Award, FolderOpen, FileText, BarChart } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin, Book, Clock, PenTool, CheckCircle, Target, Briefcase} from 'lucide-react';
import { FaChevronDown, FaChevronUp,  FaBook, FaChartLine, FaArrowRight } from 'react-icons/fa';
import ScrollFadeIn from './Fade.jsx';
import Meet from './meet.jsx'
import { Link } from 'react-router-dom';
import logo from './images/logo2.svg'

const TypeWriter = ({ text, delay = 40 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{displayText}</span>;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Why Join TVT?', icon: <Users size={24} />, to: '/#why-join' },
    { name: 'Impact', icon: <BarChart size={24} />, to: '/#impact' },
    { name: 'Articles', icon: <FileText size={24} />, to: '/articles' },
    { name: 'Team', icon: <Users size={24} />, to: '/team' },
    { name: 'Projects', icon: <FolderOpen size={24} />, to: '/projects' },
  ];
  
  const NavLink = ({ item, onClick }) => {
    if (item.to.startsWith('/#')) {
      return (
        <a 
          href={item.to} 
          className="text-purple-300 hover:text-purple-100 flex items-center"
          onClick={onClick}
        >
          {React.cloneElement(item.icon, { size: 18, className: "mr-2" })}
          {item.name}
        </a>
      );
    }
    return (
      <Link 
        to={item.to} 
        className="text-purple-300 hover:text-purple-100 flex items-center"
        onClick={onClick}
      >
        {React.cloneElement(item.icon, { size: 18, className: "mr-2" })}
        {item.name}
      </Link>
    );
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-gray-900'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a
            className="text-2xl font-bold text-purple-400"
            href="/"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="Tri-Valley Tech Logo" style={{ height: '4rem', width: 'auto' }} />
          </motion.a>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <NavLink item={item} />
                </motion.li>
              ))}
            </ul>
          </nav>
          <motion.button 
            className="md:hidden text-purple-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-gray-800 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav>
              <ul className="flex flex-col items-start space-y-0 px-4">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name} 
                    className="w-full border-b border-gray-700 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="py-4">
                      <NavLink 
                        item={item}
                        onClick={() => setIsMenuOpen(false)}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const RotatingCube = () => (
    <div className="scene">
      <div className="cube">
        <div className="cube__face cube__face--front">
          <Users size={48} />
          <p>Collaborative Community</p>
        </div>
        <div className="cube__face cube__face--back">
          <Rocket size={48} />
          <p>Innovative Projects</p>
        </div>
        <div className="cube__face cube__face--right">
          <Lightbulb size={48} />
          <p>Skill Development</p>
        </div>
        <div className="cube__face cube__face--left">
          <Globe size={48} />
          <p>Global Impact</p>
        </div>
        <div className="cube__face cube__face--top">
          <img src={logo} alt="Tri-Valley Tech Logo" className="w-150 h-150" />
        </div>
        <div className="cube__face cube__face--bottom">
        <img src={logo} alt="Tri-Valley Tech Logo" className="w-150 h-150" />
          {/*<p className="text-lg font-bold">Tri-Valley Tech</p>*/}
        </div>
      </div>
    </div>
  );


  const scrollToJoinSection = () => {
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
const Hero = () => (
  <section className="relative min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden pt-20 pb-12 md:py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <motion.h1
          className="text-5xl md:text-5xl lg:text-6xl font-bold mb-1 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empowering Young Innovators
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         Bring your ideas to life with Tri-Valley Tech
        </motion.p>
        <div className="mt-8">
          <a
            href="https://discord.gg/n6TCxpCGqM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </a>
        </div>
        
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <RotatingCube />
      </div>
    </div>
  </section>
);

  
const VideoSection = () => (
    <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <div className="mt-12">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 to-red-500">
              Watch Our Introduction Video
            </h3>
            <div className="flex justify-center">
              <div
                className="rounded-lg overflow-hidden shadow-neon"
                style={{
                  width: '100%',
                  maxWidth: '800px',
                  aspectRatio: '16 / 9',
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/p2AWYanIHkc"
                  
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );

  const Feature = ({ icon, title, description, index }) => (
    <motion.div 
      className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-700 relative overflow-hidden group"
      whileHover={{ scale: 1.05, zIndex: 1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={false}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="text-purple-400 mb-4"
      >
        {React.cloneElement(icon, { size: 48 })}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
  
  const Why = () => {
    const features = [
      {
        title: "Real-World Projects",
        description: "Take part in projects that address real community needs and provide tangible outcomes. From engineering solutions to technology-driven initiatives, TVT gives you the opportunity to make a difference while gaining hands-on experience.",
        icon: <Rocket />
      },
      {
        title: "Skill Development",
        description: "Learn essential skills such as project management, technical problem-solving, and leadership. Whether you're exploring coding, design, or environmental innovation, you'll develop abilities that set you apart for future academic and career opportunities.",
        icon: <Book />
      },
      {
        title: "Volunteer Hours",
        description: "Earn valuable volunteer hours for both your direct contributions and collaborative efforts. Engage in productive discussions and teamwork while building your resume and making a positive impact.",
        icon: <Clock />
      }
    ];

    return (
      <section id="why-join" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-purple-400">Why Join Tri-Valley Tech?</h2>
            <p className="text-lg mb-12 text-gray-300">
              At Tri-Valley Tech (TVT), we empower high school students to create real-world change through meaningful projects, skill development, and community impact. By joining, you'll work on collaborative initiatives that solve real problems, gain practical experience, and contribute to something bigger than yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg text-center relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="text-purple-400 mb-4">
                  {React.cloneElement(feature.icon, { size: 48 })}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-6 text-gray-300">
              At TVT, you'll join a community of like-minded peers, guided by experienced mentors, to turn your ideas into impactful realities. Whether you're coding an app, designing sustainable solutions, or working on your first engineering project, TVT equips you with the tools to succeed and the platform to showcase your talent.
            </p>
            <p className="text-lg text-gray-300">
              Become part of a movement that bridges the gap between education, technology, and social impact. Join Tri-Valley Tech today to develop your skills, contribute to meaningful projects, and make a lasting difference in your community and beyond.
            </p>
          </div>
        </div>
      </section>
    );
  };
  


  const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const mainContent = "Tri-Valley Tech is a nonprofit organization dedicated to empowering high school students through technology-driven initiatives. We provide hands-on opportunities to develop innovative solutions, collaborate on impactful projects, and lead community-focused events, bridging the gap between education, technology, and real-world needs.";
  
    const expandedContent = `Tri-Valley Tech serves as a hub for creativity and innovation, equipping students with resources, mentorship, and a collaborative platform to turn ideas into reality. Our mission is to inspire and empower the next generation of leaders by fostering an environment where critical thinking, collaboration, and real-world problem-solving thrive.

Through a structured approach that includes project incubation, strategic planning, and hands-on experience, we enable students to create solutions that address community challenges and broader societal needs. Whether it's web development, app creation, or sustainability-focused projects, we aim to bridge the gap between academic learning and practical application.

We envision a world where every student has the opportunity to explore their passions, gain valuable skills, and make a meaningful impact. By nurturing curiosity, resilience, and leadership, Tri-Valley Tech is building a community of innovators ready to tackle the challenges of today and shape a better tomorrow.`;

    return (
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-purple-400">About Us</h2>
            <p className="text-lg mb-4 text-gray-300">{mainContent}</p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center mx-auto"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-300 whitespace-pre-line"
                >
                  <p className="text-lg mb-4">{expandedContent}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    );
  };
  
  const ProjectCard = ({ title, description, tags }) => (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-gray-700 relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={false}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
  
  const Projects = () => (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Tutoring Application"
            description="Connect students with tutors for online lessons, featuring secure messaging and resource sharing."
            tags={['Education', 'Communication', 'Online Learning']}
          />
          <ProjectCard 
            title="Leg Band for Muscular Health"
            description="Wearable device with sensors and LEDs to provide real-time feedback on leg muscular health."
            tags={['Health Tech', 'Wearables', 'Fitness']}
          />
          <ProjectCard 
            title="Water-Saving Shower Head"
            description="Smart shower head that uses computer vision or sensors to conserve water by targeting spray."
            tags={['Smart Home', 'Water Conservation', 'IoT']}
          />
        </div>
        <div className="text-center mt-13">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/projects" 
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-700 transition duration-300 shadow-neon"
            >
              View All Projects <ChevronRight className="inline" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const CTAButton = ({ href, text, icon, description }) => (
    <div className="mb-12 flex flex-col items-center">
      <p className="text-lg mb-4 text-gray-300 text-center max-w-md">{description}</p>
      <Link to={href}>
        <motion.button 
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300 shadow-neon flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {text} {icon}
        </motion.button>
      </Link>
    </div>
  );
  
  const CTA = () => (
    <section id="join" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TypeWriter text="Ready to Make a Difference?" />
        </motion.h2>
        <motion.p 
          className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Join Tri-Valley Tech today and start turning your ideas into action!
        </motion.p>
        
        <div className="flex flex-col items-center">
          <CTAButton 
            href="https://discord.gg/PzFEsjvQFB"
            text="Join Now"
            icon={<FaArrowRight className="ml-2" />}
            description="Connect with like-minded peers and start your journey with Tri-Valley Tech."
          />
          
          <CTAButton 
            href="/articles"
            text="Read Articles"
            icon={<FaBook className="ml-2" />}
            description="Explore our latest articles on technology, innovation, and student projects."
          />
        </div>
      </div>
    </section>
  );

  const Impact = () => (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="p-8 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">5,000+</h3>
            <p className="text-xl text-center text-gray-300">Students Mentored</p>
          </motion.div>

          <motion.div 
            className="p-8 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">2,000+</h3>
            <p className="text-xl text-center text-gray-300">Active Mentors</p>
          </motion.div>

          <motion.div 
            className="p-8 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">10+</h3>
            <p className="text-xl text-center text-gray-300">Countries Reached</p>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //implement message sending here once backend is implemented
      console.log('Form submitted:', formData);
      
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    };
  
    return (
      <section className="py-20  bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-purple-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-purple-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-purple-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send size={20} className="ml-2" />
            </motion.button>
          </form>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Tri-Valley Tech</h3>
            <p className="text-sm">Empowering high school innovators to create real-world impact through collaborative projects.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Quick Links</h4>
            <div className="space-y-8">
              <ul className="space-y-2">
                <li><Link to="/articles" className="hover:text-purple-300 transition duration-300">Articles</Link></li>
                <li><Link to="/team" className="hover:text-purple-300 transition duration-300">Team</Link></li>
                <li><Link to="/projects" className="hover:text-purple-300 transition duration-300">Projects</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Contact Us</h4>
            <p className="text-sm">Email: trivalleytechnology@gmail.com</p>
            <p className="text-sm">Phone: (470) 609-2206</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "https://facebook.com" },
                { icon: <Twitter size={20} />, href: "https://twitter.com" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/trivalleytech/profilecard/?igsh=NTc4MTIwNjQ2YQ==" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Tri-Valley Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
 const Web = () => (
    <div className="font-sans bg-gray-900">
    <ScrollFadeIn delay={0.2}>
      <Header />
    </ScrollFadeIn>
    <main className="pt-16">
      <ScrollFadeIn delay={0.4}>
        <section id="home">
          <Hero />
        </section>
      </ScrollFadeIn>
      {/*<ScrollFadeIn>
        <section id="video">
          <VideoSection />
        </section>
      </ScrollFadeIn>
      */}
      <ScrollFadeIn>
        <section id="why">
          <Why />
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <section id="about">
          <AboutUs />
        </section>
      </ScrollFadeIn>
      {/*<ScrollFadeIn>
        <section id="team">
          <Meet />
        </section>

      </ScrollFadeIn>
      
      <ScrollFadeIn>
        <section id="projects">
          <Projects />
        </section>
      </ScrollFadeIn>
      */}
      <ScrollFadeIn>
        <section id="impact">
          <Impact />
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <section id="join">
          <CTA />
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <section id="contact">
          <ContactForm />
        </section>
      </ScrollFadeIn>
    </main>
    <ScrollFadeIn>
      <Footer />
    </ScrollFadeIn>
  </div>
);


 export {Header, Footer};

  export default Web;