import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  ExternalLink,
  Terminal,
  Cpu,
  Zap,
  Wifi,
  Activity,
  Battery,
  X,
  GitCommit,
  GitBranch,
  BarChart3,
  Layers,
  CheckCircle2,
  Search,
  Command,
  Hash,
  Share2,
  Monitor,
  User,
  Bot,
  MessageSquare,
  Send,
  Minimize2,
  Gamepad2,
  Construction,
  Sparkles,
  BrainCircuit,
  FileText,
  Languages,
  Network,
  Cloud,
  Box,
  Scale,
  Sun,
  Moon,
  GraduationCap,
  Lightbulb
} from "lucide-react";

// --- Theme Context ---
const ThemeContext = React.createContext();

const useTheme = () => useContext(ThemeContext);

// --- Data: Yuvraj V A ---

const BIO_DATA = {
  name: "Yuvraj V A",
  role: "Generative AI Engineer",
  email: "Yuvrajva09@gmail.com",
  summary: "Focused on API-driven backend systems, AI integrations, and production-ready engineering.",
  keyStrengths: ["System Design", "Distributed Systems", "GenAI Integration", "Backend Architecture"],
  education: "B.E in Computer Science (CGPA: 8.5) from HKBK College of Engineering."
};

const TECHNICAL_SKILLS_DATA = [
  {
    category: "Backend & API Development",
    icon: <Server className="w-6 h-6" />,
    description: "Server-side architecture & logic.",
    skills: ["Java", "Python", "FastAPI", "Grails / Groovy", "API Design", "Redis (Basic)"]
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="w-6 h-6" />,
    description: "Intelligent system integration.",
    skills: ["Machine Learning", "Deep Learning", "GenAI / LLM", "Prompt Engineering", "LangChain"]
  },
  {
    category: "Frontend & Web",
    icon: <Layout className="w-6 h-6" />,
    description: "Responsive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React (Basic)"]
  },
  {
    category: "Databases & Data",
    icon: <Database className="w-6 h-6" />,
    description: "Data storage & management.",
    skills: ["SQL", "NoSQL"]
  },
  {
    category: "Cloud & Deployment",
    icon: <Cloud className="w-6 h-6" />,
    description: "Infrastructure & hosting.",
    skills: ["AWS (Basic Usage)"]
  },
  {
    category: "Data & Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Insights & visualization.",
    skills: ["Power BI", "MS Excel", "Streamlit"]
  },
  {
    category: "Testing & Quality",
    icon: <CheckCircle2 className="w-6 h-6" />,
    description: "Reliability & assurance.",
    skills: ["Manual Testing", "Automation Testing", "Postman"]
  },
  {
    category: "DevOps & Tools",
    icon: <GitBranch className="w-6 h-6" />,
    description: "Workflow & version control.",
    skills: ["Git", "Docker (Basic)", "CI/CD Fundamentals"]
  }
];

const EXPERIENCE_DATA = [
  {
    company: "Wonderslate Technologies",
    role: "Associate Software Engineer Intern",
    date: "Oct 2025 - Present",
    description: "Designing core functional components for tattvacampus.ai. Developing robust backend solutions using Java Grails and ensuring high application reliability for the initial release.",
    tech: ["Java", "Grails", "Spring Boot", "AI Integration"],
    type: "work"
  },
  {
    company: "Gleamator Technologies LLP",
    role: "Cloud Computing Intern",
    date: "Mar 2025 - May 2025",
    description: "Worked with AWS core services (EC2, S3, IAM, VPC). Explored real-time data processing with Kinesis and serverless computing with Lambda. Analyzed Netflix case studies for cloud migration strategies.",
    tech: ["AWS", "EC2/S3", "Lambda", "Kinesis"],
    type: "work"
  },
  {
    company: "Devtown",
    role: "Data Science Trainee",
    date: "July 2024",
    description: "Completed self-paced training covering Python programming, data analysis, and machine learning fundamentals.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    type: "education"
  }
];

const PROJECTS_DATA = [
  {
    id: "01",
    title: "LearnerDNA",
    shortDesc: "High-engagement web gaming platform for behavioral data analytics. (In Development)",
    fullDesc: "A gamified web application currently in development, built on the Grails framework. The platform is designed to drive massive user engagement through interactive gameplay. The core objective is to collect granular behavioral data to build 'Learner DNAs'—proprietary datasets that will inform future product strategies and personalized learning paths.",
    problem: "Acquiring authentic, high-volume user behavioral data for educational modeling is difficult with standard static applications.",
    solution: "Developing a high-frequency gaming loop using Groovy and Grails that maximizes session duration and data touchpoints.",
    impact: "Currently in active development phase. Targeting high user retention to populate the initial data lake for downstream analytics.",
    stack: ["Grails", "Groovy", "Java", "HTML5", "Analytics"],
    architecture: ["Web Client", "→", "Grails Controller", "→", "Game Service", "→", "Data Collector", "→", "NoSQL Store"],
    tags: ["Game Dev", "Grails", "In Development"],
    gradient: "from-purple-600 to-indigo-600",
    link: "#",
    status: "Development",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "02",
    title: "TattvaCampus.ai",
    shortDesc: "Unified AI automation platform for Higher Education Institutions.",
    fullDesc: "The frontend interface for a comprehensive AI Campus Suite. I developed the core UI/UX components using pure HTML, CSS, and JavaScript. The platform features intuitive interfaces for the Accreditation Assistant, Custom Textbook Creator, and the 24/7 Contextual AI Tutor, ensuring a seamless experience for faculty and students.",
    problem: "Complex institutional AI tools often suffer from poor usability, leading to low adoption rates among non-technical faculty.",
    solution: "Designed and implemented a responsive, accessible frontend architecture that simplifies complex workflows like CO-PO mapping and rubric management.",
    impact: "Delivered a pixel-perfect, highly responsive user interface that serves as the face of the unified AI platform.",
    stack: ["HTML5", "CSS3", "JavaScript", "Frontend", "UI/UX"],
    architecture: ["User Interface", "→", "DOM Manipulation", "→", "REST API Integration", "→", "Backend Services"],
    tags: ["Frontend", "HTML/CSS", "EdTech"],
    gradient: "from-blue-600 to-cyan-600",
    link: "https://tattvacampus.ai",
    status: "Deployed",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "03",
    title: "Smart Vision IoT",
    shortDesc: "Object recognition & voice translation glasses for the visually impaired.",
    fullDesc: "An IoT-based assistive system embedded in smart glasses. Uses MobileNetSSD for real-time object detection and NLP to translate object names into regional languages with audio feedback.",
    problem: "Visually impaired individuals lack affordable, real-time tools for spatial awareness and object identification in local languages.",
    solution: "Integrated CNNs with OpenCV on Raspberry Pi/Arduino to detect objects and convert them to regional speech via TTS.",
    impact: "Provided real-time spatial awareness and language-accessible audio feedback for assistive living.",
    stack: ["Python", "Raspberry Pi", "OpenCV", "TensorFlow", "IoT"],
    architecture: ["Camera Feed", "→", "Raspberry Pi (CNN)", "→", "NLP Translation", "→", "TTS Engine", "→", "Speaker"],
    tags: ["IoT", "Computer Vision", "Embedded"],
    gradient: "from-orange-600 to-red-600",
    link: "#",
    status: "Prototype",
    image: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "04",
    title: "AI Document Translator",
    shortDesc: "Context-aware document translation pipeline preserving original formatting.",
    fullDesc: "A sophisticated document translation feature developed for Wonderslate Technologies. The system accepts PDF or Word documents and a target language. It employs a complex pipeline where input files are converted to images by an AI server to preserve layout context. These images are processed by an LLM with specific prompts to generate translated HTML. Finally, the Grails backend utilizes JavaScript libraries to reconstruct this HTML back into a perfectly formatted Word document, mirroring the original input structure.",
    problem: "Traditional translation tools often strip formatting, breaking complex layouts in academic and professional documents.",
    solution: "Designed a multi-stage pipeline: Grails handles orchestration, an AI server rasterizes pages for visual context, an LLM performs the translation to HTML, and a dedicated JS-based engine reconstructs the final document structure.",
    impact: "Delivered high-fidelity translations that retain tables, headers, and layout integrity, significantly improving user experience for cross-lingual document consumption.",
    stack: ["Grails", "LLM", "Python", "JavaScript", "GSP"],
    architecture: ["Upload", "→", "Grails", "→", "AI Server (OCR)", "→", "LLM", "→", "HTML Gen", "→", "Grails (JS Lib)", "→", "Word Output"],
    tags: ["GenAI", "NLP", "System Design"],
    gradient: "from-pink-600 to-rose-600",
    link: "#",
    status: "Deployed",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "05",
    title: "AI-Powered Portfolio",
    shortDesc: "Interactive, self-aware portfolio featuring Gemini AI integration.",
    fullDesc: "This very website serves as a live demonstration of modern frontend engineering and Generative AI integration. Unlike static portfolios, this application features a context-aware AI chatbot powered by Google's Gemini model, capable of answering recruiter questions based on my real-time resume data. The UI implements complex physics (magnetic buttons), WebGL-like neural background simulations, and 3D tilt effects, all built with React and Tailwind CSS. It is a 'System Control Center' designed to prove technical capability through interaction rather than just text.",
    problem: "Standard portfolios are static, passive, and fail to actively demonstrate an engineer's capability to build complex, interactive, and AI-driven interfaces.",
    solution: "Architected a Single Page Application (SPA) using React that acts as both a resume and a live technical demo. Integrated the Gemini API for dynamic Q&A and 'AI Tech Analysis' of my own projects.",
    impact: "Serves as a primary lead generation tool, differentiating my profile through active demonstration of Generative AI, React, and System Design capabilities.",
    stack: ["React", "Gemini API", "Tailwind CSS", "Canvas API"],
    architecture: ["User", "→", "React SPA", "→", "Context Engine", "→", "Gemini API", "→", "Dynamic Response"],
    tags: ["React", "GenAI", "UI/UX"],
    gradient: "from-cyan-500 to-blue-500",
    link: "#",
    status: "Deployed",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
  }
];

// --- Prerequisite Components (Defined BEFORE Section Components) ---

// 1. Reveal On Scroll Component
const RevealOnScroll = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 2. Magnetic Button Physics
const Magnetic = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

// 3. Buttons & Inputs
const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-[0_0_30px_rgba(139,92,246,0.3)] border border-violet-500/50",
    outline: "border border-[var(--border-color)] bg-transparent hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] hover:border-violet-500",
  };
  return (
    <button className={`inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all h-11 px-8 relative overflow-hidden group ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 skew-x-12" />}
    </button>
  );
};

const Input = ({ className = "", ...props }) => (
  <div className="relative group w-full">
    <input className={`flex h-11 w-full rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-main)] focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all ${className}`} {...props} />
    <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-500 transition-all duration-500 group-hover:w-full"></div>
  </div>
);

// 4. Glitch Text
const GlitchText = ({ text, className = "" }) => (
  <div className={`relative inline-block group ${className}`}>
    <span className="relative z-10">{text}</span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-violet-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1">{text}</span>
    <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2">{text}</span>
  </div>
);

// 5. Tilt Card
const TiltCard = ({ children, className = "", onClick }) => {
  const ref = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width) - 0.5;
    const yPct = (y / rect.height) - 0.5;
    setRotation({ x: yPct * -10, y: xPct * 10 });
  };

  return (
    <div 
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setIsHovering(false); setRotation({x:0,y:0}); }}
      onMouseEnter={() => setIsHovering(true)}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, 1)`,
        transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`transform-gpu relative transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
      <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent group-hover:opacity-100 group-hover:animate-scan" style={{ backgroundSize: '100% 200%' }} />
    </div>
  );
};

// 6. Neural Background (Scroll-Aware & Global)
const NeuralBackground = () => {
  const canvasRef = useRef(null);
  const { isDarkMode } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Configuration
    const particleCount = Math.min(Math.floor(width * 0.05), 100);
    const connectionDistance = 150;
    const particles = [];

    // Scroll state
    let isScrolling = false;
    let scrollTimeout;

    const handleScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100); // 100ms debounce to resume animation
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Resize
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();
    
    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      
      draw() {
        // Adjust color based on theme
        ctx.fillStyle = isDarkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(124, 58, 237, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Init
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation Loop
    const animate = () => {
      if (!isScrolling) {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
          p.update();
          p.draw();
        });
        
        // Draw Connections
        particles.forEach((a, i) => {
          particles.slice(i + 1).forEach(b => {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < connectionDistance) {
              ctx.strokeStyle = isDarkMode 
                  ? `rgba(139, 92, 246, ${0.15 * (1 - distance / connectionDistance)})`
                  : `rgba(124, 58, 237, ${0.15 * (1 - distance / connectionDistance)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          });
        });
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, [isDarkMode]);
  
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40 pointer-events-none" />;
};

// 7. Command Palette
const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  
  const options = [
    { icon: <Layout className="w-4 h-4" />, label: "Go to Projects", action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Code className="w-4 h-4" />, label: "View Technical Skills", action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <GitBranch className="w-4 h-4" />, label: "View Experience", action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Mail className="w-4 h-4" />, label: "Contact Me", action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <Github className="w-4 h-4" />, label: "View GitHub", action: () => window.open('https://github.com/Yuvraj6223', '_blank') },
    { icon: <Linkedin className="w-4 h-4" />, label: "View LinkedIn", action: () => window.open('http://www.linkedin.com/in/yuvrajva6223', '_blank') },
  ];

  const filtered = options.filter(opt => opt.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] animate-fade-in" onClick={onClose}>
      <div className="w-full max-w-xl bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden animate-scale-up" onClick={e => e.stopPropagation()}>
        <div className="flex items-center px-4 py-3 border-b border-[var(--border-color)]">
          <Search className="w-5 h-5 text-[var(--text-muted)] mr-3" />
          <input 
            ref={inputRef}
            className="flex-1 bg-transparent text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none text-lg"
            placeholder="Type a command or search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <div className="text-xs text-[var(--text-muted)] border border-[var(--border-color)] px-1.5 py-0.5 rounded">ESC</div>
        </div>
        <div className="py-2">
          <div className="px-4 py-2 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Suggestions</div>
          {filtered.map((opt, i) => (
            <button 
              key={i}
              onClick={() => { opt.action(); onClose(); }}
              className="w-full text-left px-4 py-3 hover:bg-[var(--bg-card)] flex items-center gap-3 text-[var(--text-main)] hover:text-violet-500 transition-colors group"
            >
              <span className="p-1 rounded bg-[var(--bg-card)] group-hover:bg-violet-500/20 text-[var(--text-muted)] group-hover:text-violet-400 transition-colors">
                {opt.icon}
              </span>
              {opt.label}
            </button>
          ))}
          {filtered.length === 0 && <div className="px-4 py-4 text-center text-[var(--text-muted)]">No results found.</div>}
        </div>
      </div>
    </div>
  );
};

// 8. System Monitor Widget
const SystemMonitor = () => {
  const [metrics, setMetrics] = useState({ fps: 60, latency: 24, heap: 40 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        fps: Math.floor(58 + Math.random() * 4),
        latency: Math.floor(20 + Math.random() * 10),
        heap: Math.floor(40 + Math.random() * 5)
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 hidden xl:flex flex-col gap-2 z-40 pointer-events-none font-mono text-[10px] text-violet-400/50">
      <div className="flex items-center gap-2">
        <Activity className="w-3 h-3" />
        <span>FPS: {metrics.fps}</span>
      </div>
      <div className="flex items-center gap-2">
        <Wifi className="w-3 h-3" />
        <span>LATENCY: {metrics.latency}ms</span>
      </div>
      <div className="flex items-center gap-2">
        <Cpu className="w-3 h-3" />
        <span>HEAP: {metrics.heap}%</span>
      </div>
    </div>
  );
};

// 9. AI Assistant Component
const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "System online. I am Yuvraj's AI Assistant. Ask me about system design, architecture, skills, or my experience!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom(), [messages]);

  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Contact
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
      return `You can reach me at ${BIO_DATA.email}. I'm also active on LinkedIn and GitHub - check the links in the header!`;
    }
    
    // Skills
    if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('stack')) {
      const topSkills = TECHNICAL_SKILLS_DATA.slice(0, 3).flatMap(s => s.skills).slice(0, 5).join(", ");
      return `I specialize in ${BIO_DATA.role}. My core stack includes ${topSkills}, and more. I have expertise in ${BIO_DATA.keyStrengths.join(", ")}.`;
    }
    
    // Experience
    if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
      const latest = EXPERIENCE_DATA.find(e => e.type === 'work');
      return `I am currently a ${latest.role} at ${latest.company}, working on ${latest.tech.join(", ")}. Previously, I was at Gleamator Technologies.`;
    }

    // Projects
    if (lowerQuery.includes('project') || lowerQuery.includes('built')) {
        const projectNames = PROJECTS_DATA.map(p => p.title).join(", ");
        return `I've architected several systems: ${projectNames}. My "AI Document Translator" and "LearnerDNA" projects showcase my full-stack and GenAI capabilities.`;
    }
    
    // Education
    if (lowerQuery.includes('education') || lowerQuery.includes('college') || lowerQuery.includes('degree')) {
        return `I hold a ${BIO_DATA.education}`;
    }
    
    // System Design (Specific knowledge check)
    if (lowerQuery.includes('system') || lowerQuery.includes('design') || lowerQuery.includes('architecture')) {
        return "I have a strong foundation in System Design, including Microservices, Event-Driven Architecture, Distributed Caching (Redis), and Cloud Native principles on AWS.";
    }

    // Default
    return "I am a portfolio assistant. I can tell you about my projects, skills, experience, system design knowledge, or how to contact me. What would you like to know?";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay for realism
    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);
      setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-[var(--bg-main)] border border-violet-500/30 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden animate-scale-up flex flex-col h-[400px]">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-violet-900/50 to-black p-3 border-b border-[var(--border-color)] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-mono font-bold text-white">Yuvraj's AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>
          
          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/50 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-violet-600 text-white' : 'bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)]'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[var(--bg-card)] p-3 rounded-lg flex gap-1">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-md px-3 py-2 text-sm text-[var(--text-main)] focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button type="submit" className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-violet-600 hover:bg-violet-700 shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-20"></div>
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
        {!isOpen && (
          <div className="absolute right-full mr-4 px-3 py-1.5 bg-black/90 border border-white/10 rounded text-xs font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask AI
          </div>
        )}
      </button>
    </div>
  );
};

// 10. Project Modal
const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden animate-scale-up flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
             <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
             <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} mix-blend-multiply opacity-80`} />
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] to-transparent" />
          </div>

          <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
            <div className="flex gap-2 mb-3">
               {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md rounded border border-white/20 text-white shadow-sm">
                    {tag}
                  </span>
               ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h2>
          </div>

          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-md z-50 border border-white/10">
            <X className="w-6 h-6" />
          </button>
          
          {/* Grain overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[var(--border-color)] px-4 md:px-8 bg-[var(--bg-secondary)] overflow-x-auto">
          {['overview', 'architecture', 'metrics', '✨ System Insights'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-4 text-sm font-medium tracking-wide uppercase transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-violet-400' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500"></div>}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-[var(--bg-main)]">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-4">Engineering Case Study</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed text-lg">{project.fullDesc}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] hover:border-red-500/30 transition-colors">
                    <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3 flex items-center gap-2"><X className="w-4 h-4"/> The Problem</h4>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] hover:border-green-500/30 transition-colors">
                    <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> The Solution</h4>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                 <div className="bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border-color)]">
                    <h3 className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-mono bg-black/40 rounded-md text-gray-300 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                 </div>
                 <div className="space-y-3">
                  <Magnetic>
                    {project.link !== "#" ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button variant="primary" className="w-full text-xs">
                          <ExternalLink className="w-3.5 h-3.5 mr-2" /> View Deployment
                        </Button>
                      </a>
                    ) : (
                      <Button variant="primary" className="w-full text-xs opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-3.5 h-3.5 mr-2" /> Deployment Private/In-Dev
                      </Button>
                    )}
                  </Magnetic>
                  <Button variant="outline" className="w-full text-xs">
                    <Github className="w-3.5 h-3.5 mr-2" /> View Source Code
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="animate-fade-in space-y-8">
               <div className="p-8 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] flex flex-wrap justify-center items-center gap-4">
                  {project.architecture.map((node, i) => (
                    <React.Fragment key={i}>
                      {node === "→" ? (
                        <ArrowDown className="w-5 h-5 text-gray-600 -rotate-90" />
                      ) : (
                        <div className="px-6 py-4 bg-[var(--bg-secondary)] border border-violet-500/30 rounded-lg text-violet-400 font-mono text-sm shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                          {node}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
               </div>
               <p className="text-center text-[var(--text-muted)] text-sm italic">High-level data flow diagram illustrating the system architecture.</p>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="animate-fade-in flex flex-col items-center justify-center py-12">
               <div className="w-48 h-48 rounded-full border-8 border-[var(--border-color)] border-t-violet-500 flex items-center justify-center mb-6 relative">
                 <div className="text-4xl font-bold text-[var(--text-main)]">99<span className="text-sm text-[var(--text-muted)] ml-1">/100</span></div>
                 <div className="absolute -bottom-10 text-sm text-[var(--text-muted)] uppercase tracking-wider font-bold">Reliability</div>
               </div>
               <div className="grid grid-cols-2 gap-8 text-center mt-8">
                 <div>
                    <div className="text-2xl font-bold text-[var(--text-main)] mb-1">High</div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">User Retention</div>
                 </div>
                 <div>
                    <div className="text-2xl font-bold text-[var(--text-main)] mb-1">Low</div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Data Latency</div>
                 </div>
               </div>
               <div className="mt-12 p-4 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] text-sm text-[var(--text-muted)]">
                  "{project.impact}"
               </div>
            </div>
          )}

          {activeTab === '✨ System Insights' && (
            <div className="animate-fade-in space-y-6">
                <div className="bg-[var(--bg-card)] p-6 rounded-xl border border-[var(--border-color)] leading-relaxed text-[var(--text-muted)] space-y-4">
                  <div className="flex items-center gap-2 mb-4 text-violet-400 font-mono text-sm border-b border-[var(--border-color)] pb-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>SYSTEM ARCHITECTURAL INSIGHTS</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[var(--text-main)] font-semibold mb-1">Core Architecture</h4>
                      <p className="text-sm">
                        {project.architecture.join(" ")}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-[var(--text-main)] font-semibold mb-1">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map(s => (
                          <span key={s} className="text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded border border-[var(--border-color)]">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[var(--text-main)] font-semibold mb-1">Key Technical Challenge</h4>
                      <p className="text-sm italic border-l-2 border-violet-500 pl-3">
                        "{project.problem}"
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[var(--text-main)] font-semibold mb-1">Engineered Solution</h4>
                      <p className="text-sm">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Sections ---

const Hero = () => {
  return (
    <section id="hero" className="min-h-[92vh] flex flex-col items-center justify-center relative overflow-hidden px-4 pt-24 border-b border-[var(--border-color)] w-full">
      <NeuralBackground />
      
      {/* Professional Status HUD */}
      <div className="absolute top-24 left-6 hidden md:block">
        <div className="flex items-center gap-3 px-4 py-2 bg-[var(--bg-card)] backdrop-blur-md rounded-full border border-[var(--border-color)] animate-fade-in-down">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">SYSTEM ONLINE</span>
        </div>
      </div>

      <div className="absolute top-24 right-6 hidden md:block animate-fade-in-down">
         <div className="text-[10px] font-mono text-[var(--text-muted)] text-right">
            <div>LOC: 127.0.0.1</div>
            <div>UPTIME: 99.99%</div>
         </div>
      </div>

      <div className="text-center space-y-6 max-w-4xl z-10 flex flex-col items-center justify-center w-full">
        {/* Profile Picture Container */}
        <div className="relative group animate-fade-in-down">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center overflow-hidden">
             {/* Replace this src with your actual profile photo URL */}
             <img 
               src="src\assets\pimage_webp.webp" 
               alt="Profile"
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
             />
             
             {/* Code Overlay Effect */}
             <div className="absolute inset-0 bg-black/60 flex items-center justify-center overflow-hidden opacity-100 group-hover:opacity-0 transition-opacity duration-300">
               <div className="text-[8px] font-mono text-green-500 leading-3 whitespace-pre-wrap opacity-50 p-2 text-left">
                  {`import React from 'react';\nconst Dev = () => {\n  return (\n    <Code>\n      System.init();\n      deploy();\n    </Code>\n  );\n}\nexport default Dev;`}
               </div>
             </div>
             
             <div className="absolute inset-0 bg-violet-500/20 mix-blend-overlay pointer-events-none"></div>
          </div>
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-violet-500/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
          <div className="absolute -inset-4 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none scale-110"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-violet-300 bg-violet-950/30 rounded border border-violet-500/30 backdrop-blur-sm animate-fade-in-down delay-100 cursor-help" title="Press Command+K or Ctrl+K to open the command palette">
          <Terminal className="w-3 h-3" />
          <span className="tracking-wider">⌘ / Ctrl + K — Quick Actions</span>
        </div>
        
        <div className="flex flex-col items-center justify-center font-bold tracking-tight text-[var(--text-main)] animate-fade-in-up w-full text-center">
          <div className="text-5xl md:text-7xl lg:text-8xl mb-2 text-center w-full flex justify-center">
            <GlitchText text="YUVRAJ V A" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-center text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 tracking-wide w-full">
              GENERATIVE AI ENGINEER
            </span>
            <span className="text-center text-lg md:text-xl text-[var(--text-muted)] font-medium tracking-wide w-full">
              Backend & LLM Applications
            </span>
          </div>
        </div>
        
        <div className="space-y-4 max-w-2xl mx-auto px-4">
          <p className="text-base md:text-lg text-[var(--text-muted)] font-light leading-relaxed animate-fade-in-up delay-200 text-center">
            Focused on API-driven backend systems, AI integrations, and production-ready engineering.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]/80 font-mono animate-fade-in-up delay-300">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             Backend & AI Engineer • API & LLM-focused Projects
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2 animate-fade-in-up delay-300 w-full">
           <Magnetic>
             <Button variant="primary" onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>
                View Work
             </Button>
           </Magnetic>
           <Magnetic>
             <Button variant="outline">
               <ArrowDown className="w-4 h-4 mr-2" /> Resume
             </Button>
           </Magnetic>
        </div>

        <div className="flex justify-center gap-8 pt-6 text-[var(--text-muted)] animate-fade-in-up delay-500 w-full">
          <a href="https://github.com/Yuvraj6223" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors hover:scale-110 transform duration-200"><Github className="w-5 h-5" /></a>
          <a href="http://www.linkedin.com/in/yuvrajva6223" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] transition-colors hover:scale-110 transform duration-200"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:Yuvrajva09@gmail.com" className="hover:text-[var(--text-main)] transition-colors hover:scale-110 transform duration-200"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </section>
  );
};

// 7.5. Technical Skills Component
const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-24 relative border-b border-[var(--border-color)]">
      <RevealOnScroll className="container px-4 mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[var(--text-main)]">
          <GlitchText text="Technical Skills" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICAL_SKILLS_DATA.map((skill, index) => (
            <TiltCard key={index} className="h-full">
              <div className="h-full p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-violet-500/30 transition-all duration-300 group hover:bg-[var(--bg-card-hover)] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-black/40 text-violet-400 border border-violet-500/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] tracking-wide">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.skills.map((item, i) => (
                    <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/30 text-[var(--text-muted)] border border-[var(--border-color)] group-hover:text-violet-300 group-hover:border-violet-500/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

// 8. Experience Timeline
const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-b border-[var(--border-color)]">
      <RevealOnScroll className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-[var(--text-main)] flex items-center justify-center gap-3">
          <GitBranch className="w-8 h-8 text-violet-500" />
          <GlitchText text="Commit History" />
        </h2>

        <div className="relative border-l border-[var(--border-color)] ml-4 md:ml-10 space-y-12">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-violet-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-300 ring-4 ring-[#050505]"></div>
              
              <div className="bg-[var(--bg-card)] border border-[var(--border-color)] p-6 md:p-8 rounded-2xl hover:bg-[var(--bg-card-hover)] transition-all duration-300 backdrop-blur-sm group-hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-main)] tracking-tight flex items-center gap-2">
                      {exp.role}
                      {exp.type === 'education' && <GraduationCap className="w-5 h-5 text-violet-400" />}
                    </h3>
                    <div className="text-violet-400 font-mono text-sm mt-1">{exp.company}</div>
                  </div>
                  <div className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-card)] px-3 py-1.5 rounded border border-[var(--border-color)] w-fit">
                    {exp.date}
                  </div>
                </div>
                
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed text-sm md:text-lg">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-black/30 text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-1.5 hover:border-violet-500/30 transition-colors cursor-default">
                      <Code className="w-3 h-3" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

// 9. Projects Section
const Projects = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative">
      <RevealOnScroll className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-[var(--text-main)]">
          <GlitchText text="Featured Projects" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <TiltCard key={index} onClick={() => onProjectClick(project)} className="h-full">
              <div className="h-full group relative rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-violet-500/50 transition-all duration-500 flex flex-col shadow-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                {/* Header Image Area */}
                <div className="h-48 w-full relative overflow-hidden bg-black">
                  {/* Project Image */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur rounded-full border border-white/10 text-[10px] font-mono shadow-lg">
                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.status === 'Development' ? 'bg-yellow-500' : project.status === 'Prototype' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                    <span className={project.status === 'Development' ? 'text-yellow-400' : project.status === 'Prototype' ? 'text-blue-400' : 'text-green-400'}>
                      {project.status === 'Development' ? 'DEVELOPMENT' : project.status === 'Prototype' ? 'PROTOTYPE' : 'DEPLOYED'}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative">
                  <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)] group-hover:text-violet-400 transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--text-muted)] mb-8 leading-relaxed flex-1">
                    {project.shortDesc}
                  </p>

                  <div className="space-y-4 mt-auto">
                    <div className="p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] group-hover:border-violet-500/20 transition-colors">
                      <div className="text-[10px] uppercase text-[var(--text-muted)] font-bold mb-1 tracking-wider">Impact</div>
                      <div className="text-xs text-violet-300 font-mono font-medium">{project.impact}</div>
                    </div>
                    
                    <Button variant="outline" className="w-full text-xs h-10 group-hover:bg-violet-600 group-hover:border-violet-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                       Inspect Architecture <ArrowDown className="w-3 h-3 ml-2 -rotate-90" />
                    </Button>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

// 10. Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
      <RevealOnScroll className="container px-4 mx-auto max-w-xl text-center relative z-10">
        <div className="inline-block p-4 rounded-full bg-violet-500/10 mb-8 ring-1 ring-violet-500/30 animate-pulse">
           <Mail className="w-8 h-8 text-violet-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-main)]">
          <GlitchText text="Initialize Handshake" className="text-[var(--text-main)]" />
        </h2>
        <p className="text-[var(--text-muted)] mb-10 text-base md:text-lg leading-relaxed">
          Open to discussing high-impact engineering roles and complex system challenges.
        </p>
        
        <form className="space-y-4 text-left p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider">Identity</label>
              <Input placeholder="John Doe" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider">Signal</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs uppercase font-bold text-[var(--text-muted)] tracking-wider">Payload</label>
            <textarea className="flex min-h-[140px] w-full rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-main)] focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all placeholder:[var(--text-muted)] resize-none" placeholder="Let's build something scalable..." />
          </div>
          <Button variant="primary" className="w-full mt-2 h-12 text-base font-semibold tracking-wide">
            Transmit Message
          </Button>
        </form>
      </RevealOnScroll>
    </section>
  );
};

// --- Main App ---

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const cursorRef = useRef(null);
  const trailerRef = useRef(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // SEO Optimization
  useEffect(() => {
    document.title = "Yuvraj V A | Generative AI Engineer Portfolio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Portfolio of Yuvraj V A, a Generative AI Engineer specializing in Java Grails, Spring Boot, and GenAI. View projects and experience.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Portfolio of Yuvraj V A, a Generative AI Engineer specializing in Java Grails, Spring Boot, and GenAI. View projects and experience.";
      document.head.appendChild(meta);
    }
    
    // Add additional meta tags for SEO
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "Generative AI, Software Engineer, Java Grails, Spring Boot, React, Portfolio, Yuvraj V A, Bangalore, AI Engineer, System Design, Distributed Systems";
    document.head.appendChild(metaKeywords);
    
    const ogTitle = document.createElement('meta');
    ogTitle.property = "og:title";
    ogTitle.content = "Yuvraj V A | Generative AI Engineer & Full Stack Developer";
    document.head.appendChild(ogTitle);
    
    const ogDesc = document.createElement('meta');
    ogDesc.property = "og:description";
    ogDesc.content = "Portfolio of Yuvraj V A, specializing in Generative AI, Java Grails, Spring Boot, and Cloud Computing. Explore AI projects, document translation tools, and IoT innovations.";
    document.head.appendChild(ogDesc);
    
    const ogImage = document.createElement('meta');
    ogImage.property = "og:image";
    ogImage.content = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000";
    document.head.appendChild(ogImage);
    
  }, []);

  // Theme Management
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-main', '#050505');
      root.style.setProperty('--bg-secondary', '#0a0a0a');
      root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--bg-card-hover', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--text-main', '#ffffff');
      root.style.setProperty('--text-muted', '#9ca3af');
      root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
    } else {
      root.style.setProperty('--bg-main', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f9fafb');
      root.style.setProperty('--bg-card', 'rgba(0, 0, 0, 0.05)');
      root.style.setProperty('--bg-card-hover', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--text-main', '#111827');
      root.style.setProperty('--text-muted', '#4b5563');
      root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
    }
  }, [isDarkMode]);

  // Custom Cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    const trailer = trailerRef.current;
    
    const moveCursor = (e) => {
      const x = e.clientX - 10;
      const y = e.clientY - 10;
      
      if (cursor) cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (trailer) trailer.animate({ transform: `translate3d(${x}px, ${y}px, 0)` }, { duration: 500, fill: "forwards" });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdKOpen(prev => !prev);
      }
      if (e.key === 'Escape') setIsCmdKOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total / windowHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      :root { color-scheme: dark; cursor: none; }
      body { background-color: var(--bg-main); color: var(--text-main); font-family: 'Inter', system-ui, sans-serif; overflow-x: hidden; transition: background-color 0.3s ease, color 0.3s ease; }
      .custom-scrollbar::-webkit-scrollbar { width: 6px; }
      .custom-scrollbar::-webkit-scrollbar-track { background: var(--bg-main); }
      .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
      @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
      .animate-scale-up { animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; transform: translateY(20px); }
      .animate-fade-in-down { animation: fadeInDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; transform: translateY(-20px); }
      @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeInDown { to { opacity: 1; transform: translateY(0); } }
      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; } .delay-300 { animation-delay: 300ms; } .delay-500 { animation-delay: 500ms; }
      
      @keyframes glitch-1 { 0% { clip-path: inset(20% 0 80% 0); } 20% { clip-path: inset(60% 0 1% 0); } 100% { clip-path: inset(30% 0 20% 0); } }
      @keyframes glitch-2 { 0% { clip-path: inset(10% 0 60% 0); } 20% { clip-path: inset(80% 0 5% 0); } 100% { clip-path: inset(60% 0 10% 0); } }
      .animate-glitch-1 { animation: glitch-1 2.5s infinite linear alternate-reverse; }
      .animate-glitch-2 { animation: glitch-2 3s infinite linear alternate-reverse; }
      
      @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
      .animate-scan { animation: scan 2s linear infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-violet-500/30 transition-colors duration-300 relative">
        <NeuralBackground />
        
        <div className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-500 z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />
        
        {/* Custom Cursor */}
        <div ref={cursorRef} className="fixed w-4 h-4 border border-[var(--text-main)] rounded-full pointer-events-none z-[9999] hidden md:block" />
        <div ref={trailerRef} className="fixed w-8 h-8 border border-violet-500 rounded-full pointer-events-none z-[9998] opacity-30 hidden md:block transition-opacity duration-300" />

        {/* Nav */}
        <nav className="fixed top-0 inset-x-0 z-40 px-6 py-4 flex justify-between items-center bg-[var(--bg-card)] backdrop-blur-md border-b border-transparent transition-all duration-300">
          <div className="font-mono font-bold tracking-tighter text-xl flex items-center gap-2 cursor-pointer text-[var(--text-main)]" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="w-3 h-3 bg-violet-500 rounded-sm"></div>
            DEV<span className="text-violet-500">.LOG</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-mono text-[var(--text-muted)]">
             <button onClick={() => setIsCmdKOpen(true)} className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-card)] rounded border border-white/10 hover:bg-[var(--bg-card-hover)] transition-colors">
                <span className="text-xs">Search</span>
                <span className="text-[10px] bg-[var(--bg-card-hover)] px-1 rounded text-[var(--text-muted)]">⌘K</span>
             </button>
             
             <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[var(--bg-card-hover)] transition-colors">
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-violet-600" />}
             </button>

             <Magnetic>
               <Button variant="primary" className="h-9 px-5 text-xs" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Connect</Button>
             </Magnetic>
          </div>
        </nav>

        <Hero />
        <TechnicalSkills />
        <ExperienceTimeline />
        <Projects onProjectClick={setSelectedProject} />
        <Contact />
        
        {/* Moved Monitor to Left, AI to Right */}
        <SystemMonitor />
        <AIAssistant />
        
        <footer className="py-8 text-center text-xs text-[var(--text-muted)] border-t border-transparent bg-transparent font-mono transition-colors duration-300 relative z-10">
          <div className="flex justify-center gap-4 mb-4">
             <span>Build: v3.4.0</span>
             <span>•</span>
             <span>Latency: 24ms</span>
             <span>•</span>
             <span>Region: US-EAST</span>
          </div>
          <p>ENGINEERED WITH REACT & TAILWIND // © 2025</p>
        </footer>

        <CommandPalette isOpen={isCmdKOpen} onClose={() => setIsCmdKOpen(false)} />
        
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;