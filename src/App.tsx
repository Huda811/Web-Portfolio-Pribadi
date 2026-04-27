/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Menu, 
  X, 
  ArrowRight, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Palette,
  Monitor,
  Users,
  Clock,
  Zap,
  CheckCircle,
  Briefcase,
  Terminal,
  BarChart3,
  Mail,
  Phone
} from 'lucide-react';
import { useState, useEffect } from 'react';

const SOCIALS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yehudahendraja', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/yehuda._.03/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:yehudahendraja@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+6281335033310', label: 'Phone' },
];

const InternshipSlider = ({ images, className = "" }: { images: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);
  
  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={`relative overflow-hidden rounded-lg group border border-white/10 bg-neutral-900 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-contain"
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); prev(); }} 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-yellow hover:text-black"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); next(); }} 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-yellow hover:text-black"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-brand-yellow w-4' : 'bg-white/20'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const PROJECTS = [
  {
    title: "Cangkir Project",
    category: "JAVA & MySQL",
    image: "/Java & SQL.png",
    description: "Collaborated in a team to develop a comprehensive system named \"CANGKIR,\" utilizing Java, JavaFX, and MySQL. Each team member, including myself, was responsible for specific tasks to ensure the project's successful completion. This project ordered us to make a system where people can buy cangkir item from online with a simple step and short time.\n\n\nRole and Contributions:\n\nApplied advanced Java and JavaFX programming skills to build the system's user interface and core functionalities.\n\nIntegrated MySQL for robust database management and seamless data operations.\n\n\nOutcome: The project met all course requirements and standards, earning high marks. This achievement demonstrated our ability to work effectively as a team and deliver quality software solutions.",
    link: "https://github.com/Huda811/My-First-Project.git"
  },
  {
    title: "Washu Application Project",
    category: "UI/UX Design (Figma)",
    image: "/Figma.png",
    description: "Description: Designed and developed an innovative car wash booking application using Figma. Washu solves the problem of limited time by enabling users to book car washes from home with flexible scheduling options.\n\nKey Features:\n\nBooking System: Users can view detailed service options, select a car wash location, and choose available time slots, making the booking process quick and easy.\n\nHome Service: After payment, Washu assigns professional staff to the user's booking. Users can track the courier picking up their car for cleaning, with live updates on the courier's status.\n\nThe application received positive feedback from professors and peers and is currently in development to become a fully functional app.",
    link: "https://www.figma.com/proto/zKGmwDpxt94thfTP3lvQiM/WASHU?node-id=0-1&t=gme6XEyYyDP1gQJl-1"
  },
  {
    title: "HTML & CSS Project",
    category: "Web Development",
    images: ["/HTML & CSS.png", "/HTML & CSS 2.png"],
    description: "Successfully developed an article-based website as part of the final project for Dicoding, an esteemed online learning platform for developers.\n\nUtilized HTML and CSS to design and build a fully functional, user-friendly, and visually appealing website, focusing on responsive design and accessibility.\n\nImplemented best practices in web development, ensuring clean code and efficient performance.\n\nConducted thorough testing and debugging to ensure the website met all functional requirements and provided a seamless user experience.\n\nAchieved high marks and positive feedback, fully complying with Dicoding's stringent standards and project criteria.",
    link: "https://github.com/Huda811/My-First-Project.git"
  },
  {
    title: "Amazon Sales Report",
    category: "Tableau",
    image: "/Tableau.png",
    description: "Data visualization is one of my expertise, The aim of this project was to demonstrate my ability to manage and visualize data, effectively convey trends, and use advanced analytical techniques.\n\nKey Point :\n\nA. Histograms vs. Box & Whisker Plots (Effective Visualizations)\n\nI created histograms and box & whisker plots to visualize data distribution, helping to identify patterns and outliers for better decision-making.\n\nB. Interactive Dashboard Design\n\nI built a comprehensive dashboard that integrates filters and highlights, ensuring an interactive data storytelling experience.\n\nThese project underline my ability to analyze and present data in a clear, engaging way, making me well-prepared to contribute to a data-driven organization.",
    link: "https://drive.google.com/drive/folders/1lO4ZWCDd80wX6qrtodQwixylzZ1kvX8e?usp=drive_link"
  }
];

const TypewriterEffect = ({ phrases }: { phrases: { top: string, bottom: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTop, setCurrentTop] = useState('');
  const [currentBottom, setCurrentBottom] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const phrase = phrases[currentIndex];
      
      if (!isDeleting) {
        if (currentTop.length < phrase.top.length) {
          setCurrentTop(phrase.top.substring(0, currentTop.length + 1));
          setTypingSpeed(100);
        } else if (currentBottom.length < phrase.bottom.length) {
          setCurrentBottom(phrase.bottom.substring(0, currentBottom.length + 1));
          setTypingSpeed(100);
        } else {
          setTypingSpeed(2500);
          setIsDeleting(true);
        }
      } else {
        if (currentBottom.length > 0) {
          setCurrentBottom(currentBottom.substring(0, currentBottom.length - 1));
          setTypingSpeed(50);
        } else if (currentTop.length > 0) {
          setCurrentTop(currentTop.substring(0, currentTop.length - 1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentTop, currentBottom, isDeleting, currentIndex, phrases, typingSpeed]);

  const showTopCursor = !isDeleting && currentTop.length < phrases[currentIndex].top.length || isDeleting && currentBottom.length === 0 && currentTop.length > 0;
  const showBottomCursor = !isDeleting && currentTop.length === phrases[currentIndex].top.length && currentBottom.length >= 0 || isDeleting && currentBottom.length > 0;

  return (
    <>
      <span className="text-2xl md:text-3xl block text-brand-yellow/80 mb-4 font-bold tracking-widest min-h-[1.2em]">
        {currentTop}
        {showTopCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[3px] h-[0.8em] bg-brand-yellow ml-1 align-baseline"
          />
        )}
      </span>
      <span className="text-4xl md:text-7xl lg:text-8xl block text-white min-h-[1.2em]">
        <span className="text-brand-yellow">{currentBottom}</span>
        {showBottomCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-[5px] h-[0.8em] bg-brand-yellow ml-2 align-baseline"
          />
        )}
      </span>
    </>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | typeof PROJECTS[0]>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInternExpanded, setIsInternExpanded] = useState(false);
  const [isNeutraExpanded, setIsNeutraExpanded] = useState(false);
  const [isOrgExpanded, setIsOrgExpanded] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [isExploded, setIsExploded] = useState(false);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePortraitClick = () => {
    if (isExploded) return;

    const now = Date.now();
    setShaking(true);
    setTimeout(() => setShaking(false), 300);

    if (now - lastClickTime < 500) {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      if (newCount >= 10) {
        setIsExploded(true);
        setTimeout(() => {
          setIsExploded(false);
          setClickCount(0);
        }, 3000);
      }
    } else {
      setClickCount(1);
    }
    setLastClickTime(now);
  };

  return (
    <div className="relative min-h-screen bg-brand-black">
      {/* Search for PROJECTS.map and add onClick */}
      {/* Modal is added at the end of the file within AnimatePresence */}
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'py-8'} border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter text-brand-yellow">
            Huda Portfolio
          </div>
          
          <div className="hidden md:flex gap-10">
            {['Home', 'About', 'Experience', 'Work'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[2px] font-bold text-white/70 hover:text-brand-yellow transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-yellow transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-brand-yellow transition-colors md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      <main className="bg-brand-black">
        {/* Hero Section */}
        <section id="home" className="pt-44 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-black leading-[0.9] tracking-tighter uppercase">
                  <TypewriterEffect phrases={[
                    { top: "Hello, I'm", bottom: "Yehuda Hendraja" },
                    { top: "Halo, Saya", bottom: "Yehuda Hendraja" },
                    { top: "こんにちは", bottom: "イェフダ・ヘンドラジャです" },
                    { top: "안녕하세요", bottom: "예후다 헨드라자입니다" },
                    { top: "Bonjour, je suis", bottom: "Yehuda Hendraja" }
                  ]} />
                </h1>
                <p className="mt-8 text-white/70 max-w-xl text-lg leading-relaxed font-light">
                  an undergraduate Information Systems class B26 at Bina Nusantara University, Kemanggisan. 
                  I am known as an individual who is hardworking, has high tenacity, deep curiosity, and strong commitment and motivation in achieving goals. 
                  Expecting to graduate in 2026
                </p>

                <div className="mt-10 mb-20">
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="bg-brand-yellow text-white px-8 py-4 font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform"
                  >
                    Get In Touch <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isExploded ? 0 : 1, 
                scale: isExploded ? 1.5 : 1,
                x: shaking ? [0, -5, 5, -5, 5, 0] : 0 
              }}
              transition={{ 
                duration: isExploded ? 0.3 : 0.8,
                x: { duration: 0.3, ease: "linear" }
              }}
              className="lg:col-span-5 relative cursor-pointer"
              onClick={handlePortraitClick}
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 group bg-neutral-900">
                <img 
                  src="/portrait.png" 
                  alt="Yehuda Hendraja"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
              </div>

              {/* Explosion Hearts */}
              <AnimatePresence>
                {isExploded && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                        animate={{ 
                          opacity: 0, 
                          scale: Math.random() * 2 + 1, 
                          x: (Math.random() - 0.5) * 400, 
                          y: (Math.random() - 0.5) * 400,
                          rotate: Math.random() * 360
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute text-4xl"
                      >
                        ❤️
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 2 }}
                      exit={{ opacity: 0, scale: 3 }}
                      transition={{ duration: 0.5 }}
                      className="text-8xl font-black text-brand-yellow uppercase italic tracking-tighter"
                    >
                      LOVE!
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* About Me & Skills Section */}
        <section id="about" className="py-32 px-6 md:px-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* About Content */}
              <div>
                <span className="text-brand-yellow text-[10px] uppercase tracking-[4px] font-bold">Biography</span>
                <h2 className="text-5xl md:text-6xl font-black mt-4 tracking-tighter uppercase mb-8 text-white">About Me</h2>
                <div className="space-y-6 text-white/70 leading-relaxed text-lg font-light text-justify">
                  <p>
                    Currently pursuing a degree in Information Systems at Bina Nusantara University, I am deeply passionate 
                    about how technology can be leveraged to solve complex human problems.
                  </p>
                  <p>
                    Through various university projects, I’ve honed my technical and non-technical skills to prepare for the professional world, specifically aiming for internships at top companies. This portfolio showcases my capabilities, highlighting a strong foundation in programming (Java, MySQL, HTML, CSS), data processing (Microsoft Word and Excel), and website design using Figma.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
                    <h4 className="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-2">Education</h4>
                    <p className="text-sm font-light text-white/80">Bachelor of Information Systems<br/>Bina Nusantara University</p>
                    <p className="text-[10px] font-bold text-brand-yellow mt-2 tracking-widest uppercase">GPA: 3.69 / 4.00</p>
                  </div>
                  <div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
                    <h4 className="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-2">Location</h4>
                    <p className="text-sm font-light text-white/80">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* Skills Content */}
              <div className="space-y-12">
                {/* Hard Skills */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3 mb-8 text-white">
                    <Code className="text-brand-yellow" size={24} /> Hard Skills
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: 'Java', icon: Code },
                      { name: 'MySQL', icon: Database },
                      { name: 'HTML', icon: Monitor },
                      { name: 'CSS', icon: Palette },
                      { name: 'Figma', icon: Palette },
                      { name: 'Canva', icon: Palette },
                      { name: 'Ms. Office', icon: Briefcase },
                      { name: 'Python', icon: Terminal },
                      { name: 'Tableau', icon: BarChart3 }
                    ].map((skill, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center justify-center p-6 border border-white/5 rounded-lg bg-neutral-900 group hover:border-brand-yellow transition-all"
                      >
                        <skill.icon size={24} className="text-white/40 group-hover:text-brand-yellow transition-colors mb-3" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3 mb-8 text-white">
                    <Zap className="text-brand-yellow" size={24} /> Soft Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Teamwork', icon: Users },
                      { name: 'Time Management', icon: Clock },
                      { name: 'Creative and Adaptive', icon: Zap },
                      { name: 'Responsible', icon: CheckCircle },
                      { name: 'High Commitment', icon: CheckCircle },
                      { name: 'Communication', icon: Users }
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 border border-white/5 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] transition-colors border-l-2 hover:border-l-brand-yellow">
                        <div className="p-2 bg-brand-yellow/10 rounded-full">
                          <skill.icon size={16} className="text-brand-yellow" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internship & Organization Section */}
        <section id="experience" className="py-32 px-6 md:px-12 border-t border-white/5 bg-neutral-950/20">
          <div className="max-w-7xl mx-auto">
            <span className="text-brand-yellow text-[10px] uppercase tracking-[4px] font-bold">My experience</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 tracking-tighter uppercase mb-20 text-white">Internship & Organization</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Internship Part */}
              <div className="space-y-12">
                <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3 text-white">
                  <Briefcase className="text-brand-yellow" size={24} /> Internship
                </h3>
                <div className="space-y-8">
                  {/* PT Bank Central Asia Tbk Internship */}
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-brand-yellow" />
                    <InternshipSlider images={['/Intern1.png', '/Intern2.png']} className="aspect-video mb-6" />
                    <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-widest">Feb 2025 - Feb 2026</span>
                    <h4 className="text-xl font-bold text-white mt-1 uppercase tracking-tight">Business Analyst</h4>
                    <p className="text-brand-yellow/80 text-sm font-medium mt-1">PT Bank Central Asia Tbk.</p>
                    
                    <div className="mt-4">
                      <p className="text-white/50 text-sm leading-relaxed font-light text-justify">
                        During my one-year internship as a Business Analyst at PT Bank Central Asia Tbk (BCA), I played a key role in developing an internal logistics application focused on Asset Management and Payments. Acting as a strategic bridge between the logistics division and the IT team, I designed comprehensive user and functional flows while drafting detailed technical requirement documents.
                      </p>
                      
                      <AnimatePresence>
                        {isInternExpanded ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-4">
                              <p className="text-white/50 text-sm leading-relaxed font-light text-justify">
                                By collaborating with cross-functional teams and utilizing tools like Figma, Excel, and BCA Internal Tools, I successfully supported end-to-end testing and strengthened my practical understanding of the System Development Life Cycle (SDLC).
                              </p>
                              
                              <div>
                                <h5 className="text-brand-yellow font-bold text-xs uppercase tracking-widest mb-3 italic">What did I do?</h5>
                                <ul className="space-y-3">
                                  {[
                                    "Bridged the gap between business needs and technical execution for an internal logistics application focusing on Asset Management and Payments.",
                                    "Designed clear user and functional flows, translating business rules into detailed technical requirement documents.",
                                    "Collaborated closely with UI/UX, Developers, and QA teams to conduct end-to-end testing utilizing Figma, Microsoft Tools, and BCA Internal Tools.",
                                    "Streamlined the System Development Life Cycle (SDLC) implementation, ensuring all new features aligned perfectly with corporate operational standards."
                                  ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed font-light">
                                      <div className="min-w-[4px] h-[4px] rounded-full bg-brand-yellow mt-2" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <button 
                                onClick={() => setIsInternExpanded(false)}
                                className="text-brand-yellow text-[10px] font-bold uppercase tracking-[2px] mt-2 hover:opacity-70 transition-opacity border-b border-brand-yellow/30 pb-0.5"
                              >
                                Show Less
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          <button 
                            onClick={() => setIsInternExpanded(true)}
                            className="text-brand-yellow text-[10px] font-bold uppercase tracking-[2px] mt-2 hover:opacity-70 transition-opacity border-b border-brand-yellow/30 pb-0.5"
                          >
                            Read More
                          </button>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* NeutraDC Internship */}
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-brand-yellow" />
                    <InternshipSlider images={['/Intern00.png']} className="aspect-video mb-6" />
                    <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-widest">Aug 2023 - Sep 2023</span>
                    <h4 className="text-xl font-bold text-white mt-1 uppercase tracking-tight">Internship Trainee</h4>
                    <p className="text-brand-yellow/80 text-sm font-medium mt-1">NeutraDC, TelkomHub</p>
                    
                    <div className="mt-4">
                      <p className="text-white/50 text-sm leading-relaxed font-light text-justify">
                        During my internship at Telkom NeutraDC under the leadership of Mr. Thomas Anthony (Ph.D.) and Mr. Hadzik, I contributed to various support tasks, focusing on enhancing presentations and assisting team members with day-to-day operations.
                      </p>
                      
                      <AnimatePresence>
                        {isNeutraExpanded ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-4">
                              <p className="text-white/50 text-sm leading-relaxed font-light text-justify">
                                This internship gave me a foundational understanding of the corporate environment and reinforced my skills in communication, attention to detail, and teamwork. While my role was primarily in a supporting capacity due to the short duration, I was able to:
                              </p>
                              
                              <div>
                                <ul className="space-y-3">
                                  {[
                                    { title: "Presentation Enhancement", desc: "Refined and organized key PowerPoint presentations, ensuring clarity and professionalism for internal and external use." },
                                    { title: "Team Collaboration", desc: "Provided support across multiple teams, contributing to smooth workflow management by handling smaller tasks and relieving the load on full-time staff." },
                                    { title: "Adaptability", desc: "Demonstrated quick learning and flexibility in a fast-paced environment, which allowed me to assist with various tasks despite limited access to larger projects." }
                                  ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed font-light text-justify">
                                      <div className="min-w-[4px] h-[4px] rounded-full bg-brand-yellow mt-2" />
                                      <div>
                                        <span className="text-brand-yellow font-bold text-xs uppercase block mb-1">{item.title}</span>
                                        {item.desc}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <button 
                                onClick={() => setIsNeutraExpanded(false)}
                                className="text-brand-yellow text-[10px] font-bold uppercase tracking-[2px] mt-2 hover:opacity-70 transition-opacity border-b border-brand-yellow/30 pb-0.5"
                              >
                                Show Less
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          <button 
                            onClick={() => setIsNeutraExpanded(true)}
                            className="text-brand-yellow text-[10px] font-bold uppercase tracking-[2px] mt-2 hover:opacity-70 transition-opacity border-b border-brand-yellow/30 pb-0.5"
                          >
                            Read More
                          </button>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organization Part */}
              <div className="space-y-12">
                <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3 text-white">
                  <Users className="text-brand-yellow" size={24} /> Organization
                </h3>
                <div className="space-y-8">
                  {/* ISACA Organization */}
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-brand-yellow" />
                    <InternshipSlider images={['/ISACA1.png', '/ISACA2.png']} className="aspect-video mb-6" />
                    <span className="text-brand-yellow text-[10px] font-bold uppercase tracking-widest">Jan 2023 - Dec 2023</span>
                    <h4 className="text-xl font-bold text-white mt-1 uppercase tracking-tight">Staff of Internal Development</h4>
                    <p className="text-brand-yellow/80 text-sm font-medium mt-1">ISACA Student Group (Binus University)</p>
                    
                    <div className="mt-4">
                      <p className="text-white/50 text-sm leading-relaxed font-light text-justify">
                        As a part of ISACA at Binus University that held the role of Staff of Internal Development 2023, I gained valuable skills and experiences in event planning and management.
                      </p>
                      
                      <AnimatePresence>
                        {isOrgExpanded ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-4">
                              <p className="text-white/50 text-sm leading-relaxed font-light text-justify">
                                My responsibilities and achievements include:
                              </p>
                              
                              <div>
                                <ul className="space-y-3">
                                  {[
                                    "Developed and executed plans for various events, ensuring smooth operations and successful outcomes.",
                                    "Managed budgeting processes, recorded and organized financial data, and implemented cost-saving measures while maximizing event quality.",
                                    "Designed promotional materials, such as posters and flyers, to attract participants and effectively advertised events.",
                                    "Managed registration processes, including maintaining accurate records of attendees and ensuring efficient check-in procedures."
                                  ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed font-light text-justify">
                                      <div className="min-w-[4px] h-[4px] rounded-full bg-brand-yellow mt-2" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <button 
                                onClick={() => setIsOrgExpanded(false)}
                                className="text-brand-yellow text-[10px] font-bold uppercase tracking-[2px] mt-2 hover:opacity-70 transition-opacity border-b border-brand-yellow/30 pb-0.5"
                              >
                                Show Less
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          <button 
                            onClick={() => setIsOrgExpanded(true)}
                            className="text-brand-yellow text-[10px] font-bold uppercase tracking-[2px] mt-2 hover:opacity-70 transition-opacity border-b border-brand-yellow/30 pb-0.5"
                          >
                            Read More
                          </button>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-6 md:px-12 bg-neutral-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-brand-yellow text-[10px] uppercase tracking-[4px] font-bold">My Little</span>
                <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tighter uppercase text-white">Project</h2>
              </div>
              <div className="h-[1px] flex-grow bg-white/5 mx-12 hidden md:block" />
              <button className="text-xs uppercase tracking-[2px] font-bold border-b border-brand-yellow text-brand-yellow hover:opacity-70 transition-opacity">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative border border-white/5 p-8 transition-colors hover:border-brand-yellow hover:bg-neutral-900 cursor-pointer"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-[3px] text-brand-yellow font-bold">{project.category}</span>
                      <ExternalLink size={14} className="text-white/20 group-hover:text-brand-yellow transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight uppercase text-white group-hover:text-brand-yellow transition-colors">{project.title}</h3>
                    <div className="aspect-[16/10] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-700">
                      {project.images ? (
                        <div className="grid grid-cols-2 h-full gap-1">
                          {project.images.map((img, i) => (
                            <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          ))}
                        </div>
                      ) : (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      )}
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed font-light">
                      Expanding and redefining the boundaries of {project.category.toLowerCase()} through innovation.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 px-6 md:px-12 border-t border-white/10 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-black tracking-tighter text-brand-yellow uppercase italic">Let's Connect</h3>
                  <p className="text-white/50 mt-4 max-w-sm font-light leading-relaxed">
                    Open for internship opportunities and collaborations. Feel free to reach out through any of these channels.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a href="mailto:yehudahendraja@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-yellow/50 group-hover:bg-brand-yellow/5 transition-all">
                      <Mail size={16} className="text-white/40 group-hover:text-brand-yellow" />
                    </div>
                    <span className="text-white/70 font-light group-hover:text-white transition-colors">yehudahendraja@gmail.com</span>
                  </a>
                  <a href="tel:+6281335033310" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-yellow/50 group-hover:bg-brand-yellow/5 transition-all">
                      <Phone size={16} className="text-white/40 group-hover:text-brand-yellow" />
                    </div>
                    <span className="text-white/70 font-light group-hover:text-white transition-colors">+62 813 3503 3310</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-end gap-10">
                <div className="flex gap-4">
                  {SOCIALS.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-yellow hover:border-brand-yellow hover:bg-white/5 transition-all duration-500 hover:scale-110"
                      title={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
                
                <div className="text-center lg:text-right">
                  <p className="text-white/20 text-[10px] uppercase tracking-[6px] font-bold">
                    © {new Date().getFullYear()} YEHUDA HENDRAJA
                  </p>
                  <p className="text-white/10 text-[8px] uppercase tracking-[2px] mt-2">
                    DESIGNED & DEVELOPED WITH PASSION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 p-4 text-white hover:text-brand-yellow"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-12">
              {['Home', 'About', 'Experience', 'Work'].map((item, idx) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white hover:text-brand-yellow transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-brand-yellow/30 max-w-4xl w-full relative overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 text-white/50 hover:text-brand-yellow transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 space-y-10">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-brand-yellow text-center">
                  {selectedProject.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-center">
                  <div className="aspect-[4/5] overflow-hidden rounded border border-white/10 bg-neutral-900/50 flex items-center justify-center">
                    {selectedProject.images ? (
                      <InternshipSlider images={selectedProject.images} className="w-full h-full" />
                    ) : (
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-contain" 
                      />
                    )}
                  </div>

                  <div className="space-y-6 flex flex-col h-full md:max-h-[70vh] relative">
                    <div className="flex-shrink-0">
                      <span className="text-brand-yellow text-[10px] uppercase tracking-[4px] font-bold block mb-4">
                        {selectedProject.category}
                      </span>
                    </div>
                    
                    <div className="overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-brand-yellow/30 scrollbar-track-white/5 custom-scrollbar pb-16">
                      <p className="text-white/80 leading-relaxed text-lg font-light text-justify whitespace-pre-line">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 right-0 pt-4 flex justify-end bg-black w-full pb-2">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-yellow border-b border-brand-yellow hover:opacity-70 transition-opacity pb-2"
                      >
                        Click to see <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsContactOpen(false)}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-brand-yellow/30 max-w-lg w-full relative p-10 md:p-14 overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-yellow/10 rounded-full blur-3xl" />
              
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-6 right-6 text-white/30 hover:text-brand-yellow transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative space-y-12">
                <div className="text-center">
                  <span className="text-brand-yellow text-[10px] uppercase tracking-[6px] font-bold block mb-4">Contact Me</span>
                  <h2 className="text-4xl font-black uppercase tracking-tighter text-white italic">Let's Talk Info</h2>
                </div>

                <div className="space-y-6">
                  <a href="mailto:yehudahendraja@gmail.com" className="flex items-center gap-6 group p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-yellow/30 transition-all rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email</p>
                      <p className="text-white/80 font-medium">yehudahendraja@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+6281335033310" className="flex items-center gap-6 group p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-yellow/30 transition-all rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Phone</p>
                      <p className="text-white/80 font-medium">+62 813 3503 3310</p>
                    </div>
                  </a>

                  <div className="grid grid-cols-2 gap-4">
                    {SOCIALS.slice(0, 2).map((social, idx) => (
                      <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-yellow/30 transition-all rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <social.icon size={18} className="text-brand-yellow" />
                        </div>
                        <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-8 border-t border-white/5">
                  <p className="text-white/50 text-sm font-light leading-relaxed italic">
                    "Thank you for reaching out! I am looking forward to connecting with you and exploring potential collaborations together. Have a wonderful day!"
                  </p>
                  <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest mt-6 italic">Best Regards, Yehuda</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

