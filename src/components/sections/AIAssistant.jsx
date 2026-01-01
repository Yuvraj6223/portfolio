import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Minimize2, Sparkles } from 'lucide-react';
import { BIO_DATA, TECHNICAL_SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from '../../data/portfolioData';

/**
 * Quick Info Bot - A context-aware chatbot
 * Note: This is a rule-based bot optimized for portfolio queries.
 * For full AI integration, you would replace generateResponse with a Gemini API call.
 */
const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            text: `👋 Hi! I'm Yuvraj's Quick Info Bot. I can tell you about his skills, projects, experience, or how to get in touch. What would you like to know?`
        }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => scrollToBottom(), [messages]);

    // Enhanced response generation with better context awareness
    const generateResponse = (query) => {
        const lowerQuery = query.toLowerCase().trim();

        // Greetings
        if (/^(hi|hello|hey|hii+|hola|yo)$/i.test(lowerQuery)) {
            return `Hello! 👋 I'm here to help you learn about ${BIO_DATA.name}. You can ask me about:\n\n• Technical skills\n• Work experience\n• Projects\n• Education\n• How to get in touch\n\nWhat interests you?`;
        }

        // Contact information
        if (/contact|email|reach|connect|hire|hiring|available/.test(lowerQuery)) {
            return `📧 **Contact Information:**\n\nEmail: ${BIO_DATA.email}\nGitHub: github.com/Yuvraj6223\nLinkedIn: linkedin.com/in/yuvrajva6223\n\n💼 ${BIO_DATA.name} is currently open to new opportunities! Feel free to reach out via the contact form or email directly.`;
        }

        // Skills
        if (/skill|tech|stack|know|technology|language|framework|tool/.test(lowerQuery)) {
            const categories = TECHNICAL_SKILLS_DATA.map(s => `• **${s.category}**: ${s.skills.slice(0, 3).join(", ")}`).join("\n");
            return `🛠️ **Technical Skills:**\n\n${categories}\n\n**Key Strengths:** ${BIO_DATA.keyStrengths.join(", ")}`;
        }

        // Experience
        if (/experience|work|job|career|company|intern|role|position/.test(lowerQuery)) {
            const workExp = EXPERIENCE_DATA.filter(e => e.type === 'work');
            const expList = workExp.map(e => `• **${e.role}** at ${e.company} (${e.date})`).join("\n");
            return `💼 **Work Experience:**\n\n${expList}\n\nCurrently ${workExp[0]?.current ? 'working' : 'available'} as a ${workExp[0]?.role} focusing on ${workExp[0]?.tech.slice(0, 2).join(" and ")}.`;
        }

        // Projects
        if (/project|built|build|portfolio|work|made|created|developed/.test(lowerQuery)) {
            const projectList = PROJECTS_DATA.map(p => `• **${p.title}** (${p.status}) - ${p.shortDesc.substring(0, 60)}...`).join("\n");
            return `🚀 **Featured Projects:**\n\n${projectList}\n\nClick on any project card to see the full case study!`;
        }

        // Education
        if (/education|college|degree|university|study|studied|cgpa|academic/.test(lowerQuery)) {
            return `🎓 **Education:**\n\n${BIO_DATA.education}\n\nAlso completed training in Data Science at Devtown, covering Python, Machine Learning, and Data Analysis.`;
        }

        // AI/ML specific
        if (/ai|artificial|machine learning|ml|genai|llm|prompt|langchain|gpt|gemini/.test(lowerQuery)) {
            const aiSkills = TECHNICAL_SKILLS_DATA.find(s => s.category.includes("AI"));
            return `🤖 **AI & ML Expertise:**\n\n${aiSkills?.skills.join(", ")}\n\nKey projects include the AI Document Translator (LLM-powered with layout preservation) and this portfolio's Quick Info Bot. Currently working on AI integrations at Wonderslate Technologies.`;
        }

        // Backend specific  
        if (/backend|api|server|java|grails|python|fastapi|spring/.test(lowerQuery)) {
            const backendSkills = TECHNICAL_SKILLS_DATA.find(s => s.category.includes("Backend"));
            return `⚙️ **Backend Expertise:**\n\n${backendSkills?.skills.join(", ")}\n\nSpecializing in API-driven architectures, microservices, and production-ready systems. Current work involves Java Grails for TattvaCampus.ai.`;
        }

        // Resume
        if (/resume|cv|download|pdf/.test(lowerQuery)) {
            return `📄 **Resume:**\n\nYou can download Yuvraj's resume by clicking the "Resume" button in the hero section, or through the command palette (⌘/Ctrl + K).\n\nAlternatively, visit his LinkedIn for the most up-to-date profile.`;
        }

        // Location
        if (/where|location|based|city|country|bangalore|india/.test(lowerQuery)) {
            return `📍 **Location:**\n\n${BIO_DATA.name} is based in Bangalore, India.\n\nOpen to remote opportunities worldwide and on-site positions in Bangalore.`;
        }

        // Who is / About
        if (/who|about|tell me|yourself|summary|introduction/.test(lowerQuery)) {
            return `👨‍💻 **About ${BIO_DATA.name}:**\n\n${BIO_DATA.summary}\n\nCurrently working as a ${EXPERIENCE_DATA[0].role} at ${EXPERIENCE_DATA[0].company}, focusing on ${EXPERIENCE_DATA[0].tech.join(", ")}.\n\n${BIO_DATA.education}`;
        }

        // Thank you
        if (/thank|thanks|thx|appreciate/.test(lowerQuery)) {
            return "You're welcome! 🙏 Feel free to ask if you have more questions, or use the contact form to reach out directly.";
        }

        // Default / Unknown
        return `I'm not sure about that, but I can help with:\n\n• **Skills** - Technical expertise\n• **Experience** - Work history\n• **Projects** - Portfolio showcase\n• **Education** - Academic background\n• **Contact** - How to reach out\n\nTry asking about any of these!`;
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate typing delay for natural feel
        setTimeout(() => {
            const responseText = generateResponse(userMsg.text);
            setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
            setIsTyping(false);
        }, 500 + Math.random() * 500);
    };

    // Quick action buttons
    const quickActions = [
        { label: "Skills", query: "What are your skills?" },
        { label: "Projects", query: "Show me projects" },
        { label: "Contact", query: "How to contact?" },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
            {isOpen && (
                <div
                    className="mb-4 w-80 md:w-96 bg-[var(--bg-main)] border border-violet-500/30 rounded-xl 
                     shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden animate-scale-up flex flex-col h-[450px]"
                    role="dialog"
                    aria-label="Chat with Quick Info Bot"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-violet-900/50 to-black p-3 border-b border-[var(--border-color)] flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Bot className="w-5 h-5 text-violet-400" aria-hidden="true" />
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <span className="text-sm font-mono font-bold text-white">Quick Info Bot</span>
                                <div className="text-[10px] text-[var(--text-muted)]">Ask me anything!</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors p-1"
                            aria-label="Minimize chat"
                        >
                            <Minimize2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/50 custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[85%] p-3 rounded-lg text-sm whitespace-pre-wrap
                             ${msg.role === 'user'
                                            ? 'bg-violet-600 text-white rounded-br-none'
                                            : 'bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] rounded-bl-none'}`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-[var(--bg-card)] p-3 rounded-lg flex gap-1 border border-[var(--border-color)]">
                                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Quick Actions */}
                    <div className="px-3 py-2 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] flex gap-2 overflow-x-auto">
                        {quickActions.map((action, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setInput(action.query);
                                    setMessages(prev => [...prev, { role: 'user', text: action.query }]);
                                    setIsTyping(true);
                                    setTimeout(() => {
                                        const responseText = generateResponse(action.query);
                                        setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
                                        setIsTyping(false);
                                    }, 500);
                                }}
                                className="px-3 py-1 text-xs bg-[var(--bg-card)] border border-[var(--border-color)] 
                           rounded-full text-[var(--text-muted)] hover:text-violet-400 
                           hover:border-violet-500/30 transition-colors whitespace-nowrap"
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about skills, projects..."
                                className="flex-1 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-md 
                           px-3 py-2 text-sm text-[var(--text-main)] focus:outline-none 
                           focus:border-violet-500 transition-colors placeholder:text-[var(--text-muted)]"
                                aria-label="Type your message"
                            />
                            <button
                                type="submit"
                                className="p-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors
                           disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!input.trim()}
                                aria-label="Send message"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full 
                   bg-violet-600 hover:bg-violet-700 shadow-[0_0_20px_rgba(139,92,246,0.5)] 
                   transition-all duration-300 hover:scale-110"
                aria-label={isOpen ? "Close chat" : "Open chat"}
                aria-expanded={isOpen}
            >
                <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-20" aria-hidden="true" />
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Bot className="w-6 h-6 text-white" />
                )}

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 px-3 py-1.5 bg-black/90 border border-white/10 
                          rounded text-xs font-mono text-white whitespace-nowrap opacity-0 
                          group-hover:opacity-100 transition-opacity pointer-events-none">
                        <Sparkles className="w-3 h-3 inline mr-1" aria-hidden="true" />
                        Quick Info
                    </div>
                )}
            </button>
        </div>
    );
};

export default AIAssistant;
