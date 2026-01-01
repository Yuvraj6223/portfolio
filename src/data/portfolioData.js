// Portfolio Data - Centralized data management
// Last Updated: January 2026

export const BIO_DATA = {
    name: "Yuvraj V A",
    role: "Generative AI Engineer",
    email: "Yuvrajva09@gmail.com",
    phone: "+91-XXXXXXXXXX", // Add your phone if desired
    location: "Bangalore, India",
    summary: "Focused on API-driven backend systems, AI integrations, and production-ready engineering.",
    keyStrengths: ["System Design", "Distributed Systems", "GenAI Integration", "Backend Architecture"],
    education: "B.E in Computer Science (CGPA: 8.5) from HKBK College of Engineering.",
    resumeUrl: "/Yuvraj_VA_Resume.pdf", // Add your resume PDF to public folder
    social: {
        github: "https://github.com/Yuvraj6223",
        linkedin: "https://www.linkedin.com/in/yuvrajva6223",
        email: "mailto:Yuvrajva09@gmail.com"
    }
};

export const TECHNICAL_SKILLS_DATA = [
    {
        category: "Backend & API Development",
        iconName: "Server",
        description: "Server-side architecture & logic.",
        skills: ["Java", "Python", "FastAPI", "Grails / Groovy", "API Design", "Redis (Basic)"]
    },
    {
        category: "AI & Machine Learning",
        iconName: "BrainCircuit",
        description: "Intelligent system integration.",
        skills: ["Machine Learning", "Deep Learning", "GenAI / LLM", "Prompt Engineering", "LangChain"]
    },
    {
        category: "Frontend & Web",
        iconName: "Layout",
        description: "Responsive user interfaces.",
        skills: ["HTML", "CSS", "JavaScript", "React (Basic)"]
    },
    {
        category: "Databases & Data",
        iconName: "Database",
        description: "Data storage & management.",
        skills: ["SQL", "NoSQL"]
    },
    {
        category: "Cloud & Deployment",
        iconName: "Cloud",
        description: "Infrastructure & hosting.",
        skills: ["AWS (Basic Usage)"]
    },
    {
        category: "Data & Analytics",
        iconName: "BarChart3",
        description: "Insights & visualization.",
        skills: ["Power BI", "MS Excel", "Streamlit"]
    },
    {
        category: "Testing & Quality",
        iconName: "CheckCircle2",
        description: "Reliability & assurance.",
        skills: ["Manual Testing", "Automation Testing", "Postman"]
    },
    {
        category: "DevOps & Tools",
        iconName: "GitBranch",
        description: "Workflow & version control.",
        skills: ["Git", "Docker (Basic)", "CI/CD Fundamentals"]
    }
];

export const EXPERIENCE_DATA = [
    {
        company: "Wonderslate Technologies",
        role: "Associate Software Engineer Intern",
        date: "Oct 2024 - Present", // FIXED: Was incorrectly showing 2025
        description: "Designing core functional components for tattvacampus.ai. Developing robust backend solutions using Java Grails and ensuring high application reliability for the initial release.",
        tech: ["Java", "Grails", "Spring Boot", "AI Integration"],
        type: "work",
        current: true
    },
    {
        company: "Gleamator Technologies LLP",
        role: "Cloud Computing Intern",
        date: "Mar 2024 - May 2024", // FIXED: Updated to realistic dates
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

// Fallback images (used if local screenshots don't exist)
const FALLBACK_IMAGES = {
    learnerdna: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tattvacampus: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    smartvision: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    doctranslator: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=1000",
    portfolio: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000",
};

export const PROJECTS_DATA = [
    {
        id: "01",
        title: "LearnerDNA",
        shortDesc: "High-engagement web gaming platform for behavioral data analytics. (In Development)",
        fullDesc: "A gamified web application currently in development, built on the Grails framework. The platform is designed to drive massive user engagement through interactive gameplay. The core objective is to collect granular behavioral data to build 'Learner DNAs'—proprietary datasets that will inform future product strategies and personalized learning paths.",
        problem: "Acquiring authentic, high-volume user behavioral data for educational modeling is difficult with standard static applications.",
        solution: "Developing a high-frequency gaming loop using Groovy and Grails that maximizes session duration and data touchpoints.",
        impact: "Currently in active development. Targeting high user retention for data analytics.",
        stack: ["Grails", "Groovy", "Java", "HTML5", "Analytics"],
        architecture: ["Web Client", "→", "Grails Controller", "→", "Game Service", "→", "Data Collector", "→", "NoSQL Store"],
        tags: ["Game Dev", "Grails", "In Development"],
        gradient: "from-purple-600 to-indigo-600",
        link: "#",
        github: "#", // Add actual GitHub link when available
        status: "Development",
        image: "/projects/learnerdna.webp",
        fallbackImage: FALLBACK_IMAGES.learnerdna
    },
    {
        id: "02",
        title: "TattvaCampus.ai",
        shortDesc: "Unified AI automation platform for Higher Education Institutions.",
        fullDesc: "The frontend interface for a comprehensive AI Campus Suite. I developed the core UI/UX components using pure HTML, CSS, and JavaScript. The platform features intuitive interfaces for the Accreditation Assistant, Custom Textbook Creator, and the 24/7 Contextual AI Tutor, ensuring a seamless experience for faculty and students.",
        problem: "Complex institutional AI tools often suffer from poor usability, leading to low adoption rates among non-technical faculty.",
        solution: "Designed and implemented a responsive, accessible frontend architecture that simplifies complex workflows like CO-PO mapping and rubric management.",
        impact: "Delivered a pixel-perfect, highly responsive user interface for the unified AI platform.",
        stack: ["HTML5", "CSS3", "JavaScript", "Frontend", "UI/UX"],
        architecture: ["User Interface", "→", "DOM Manipulation", "→", "REST API Integration", "→", "Backend Services"],
        tags: ["Frontend", "HTML/CSS", "EdTech"],
        gradient: "from-blue-600 to-cyan-600",
        link: "https://tattvacampus.ai",
        github: "#",
        status: "Deployed",
        image: "/projects/tattvacampus.webp",
        fallbackImage: FALLBACK_IMAGES.tattvacampus
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
        github: "https://github.com/Yuvraj6223",
        status: "Prototype",
        image: "/projects/smartvision.webp",
        fallbackImage: FALLBACK_IMAGES.smartvision
    },
    {
        id: "04",
        title: "AI Document Translator",
        shortDesc: "Context-aware document translation pipeline preserving original formatting.",
        fullDesc: "A sophisticated document translation feature developed for Wonderslate Technologies. The system accepts PDF or Word documents and a target language. It employs a complex pipeline where input files are converted to images by an AI server to preserve layout context. These images are processed by an LLM with specific prompts to generate translated HTML. Finally, the Grails backend utilizes JavaScript libraries to reconstruct this HTML back into a perfectly formatted Word document, mirroring the original input structure.",
        problem: "Traditional translation tools often strip formatting, breaking complex layouts in academic and professional documents.",
        solution: "Designed a multi-stage pipeline: Grails handles orchestration, an AI server rasterizes pages for visual context, an LLM performs the translation to HTML, and a dedicated JS-based engine reconstructs the final document structure.",
        impact: "Delivered high-fidelity translations that retain tables, headers, and layout integrity.",
        stack: ["Grails", "LLM", "Python", "JavaScript", "GSP"],
        architecture: ["Upload", "→", "Grails", "→", "AI Server (OCR)", "→", "LLM", "→", "HTML Gen", "→", "Grails (JS Lib)", "→", "Word Output"],
        tags: ["GenAI", "NLP", "System Design"],
        gradient: "from-pink-600 to-rose-600",
        link: "#",
        github: "#",
        status: "Deployed",
        image: "/projects/doctranslator.webp",
        fallbackImage: FALLBACK_IMAGES.doctranslator
    },
    {
        id: "05",
        title: "AI-Powered Portfolio",
        shortDesc: "Interactive portfolio featuring a Quick Info Bot for instant Q&A.",
        fullDesc: "This very website serves as a live demonstration of modern frontend engineering. The portfolio features a context-aware Quick Info Bot capable of answering recruiter questions based on real-time resume data. The UI implements complex physics (magnetic buttons), WebGL-like neural background simulations, and 3D tilt effects, all built with React and Tailwind CSS.",
        problem: "Standard portfolios are static, passive, and fail to actively demonstrate an engineer's capability to build complex, interactive interfaces.",
        solution: "Architected a Single Page Application (SPA) using React that acts as both a resume and a live technical demo with an intelligent Q&A bot.",
        impact: "Serves as a primary lead generation tool through active demonstration of skills.",
        stack: ["React", "Tailwind CSS", "Canvas API", "Vite"],
        architecture: ["User", "→", "React SPA", "→", "Context Engine", "→", "Quick Info Bot", "→", "Dynamic Response"],
        tags: ["React", "UI/UX", "Interactive"],
        gradient: "from-cyan-500 to-blue-500",
        link: "#",
        github: "https://github.com/Yuvraj6223",
        status: "Deployed",
        image: "/projects/portfolio.webp",
        fallbackImage: FALLBACK_IMAGES.portfolio
    }
];

export const NAV_LINKS = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
];

export const COMMAND_OPTIONS = [
    { iconName: "Layout", label: "Go to Projects", section: "projects" },
    { iconName: "Code", label: "View Technical Skills", section: "skills" },
    { iconName: "GitBranch", label: "View Experience", section: "experience" },
    { iconName: "Mail", label: "Contact Me", section: "contact" },
    { iconName: "Github", label: "View GitHub", external: "https://github.com/Yuvraj6223" },
    { iconName: "Linkedin", label: "View LinkedIn", external: "https://www.linkedin.com/in/yuvrajva6223" },
    { iconName: "FileText", label: "Download Resume", action: "resume" }
];
