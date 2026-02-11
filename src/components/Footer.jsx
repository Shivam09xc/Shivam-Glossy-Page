import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">

                {/* Brand & CTA */}
                <div className="space-y-8">
                    <h2 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter opacity-10 hover:opacity-20 transition-opacity cursor-default select-none">
                        SHIVAM<br />SONI
                    </h2>
                    <div className="flex flex-col gap-2">
                        <span className="text-accent font-mono text-sm tracking-widest uppercase">Available for work</span>
                        <a href="mailto:shivam@example.com" className="text-2xl md:text-3xl text-white font-bold hover:text-accent transition-colors">
                            shivam@example.com
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 items-start md:items-end">
                    <div className="flex gap-6">
                        <a href="https://github.com/Shivam09xc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/shivam-soni-159846255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:-translate-y-1">
                            <Twitter size={24} />
                        </a>
                    </div>
                    <p className="text-gray-600 text-sm font-mono">
                        © {new Date().getFullYear()} Shivam Soni. Built with React & Framer Motion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
