import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import SplineHero from './SplineHero';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    // Words, TypeSpeed, DeleteSpeed, PauseDuration
    const typedText = useTypewriter(['Full Stack Developer', 'AI Enthusiast', 'Creative Coder'], 100, 50, 2000);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            });

            gsap.from(".hero-btn", {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
                delay: 1.2
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative w-full h-[100dvh] bg-primary overflow-hidden flex items-center">
            {/* 3D Background */}
            <SplineHero />

            {/* Content Content - Positioned to the left for better visibility against 3D model */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center pointer-events-none">
                <div className="max-w-3xl pointer-events-auto">
                    <span className="hero-text text-accent font-mono text-sm md:text-base mb-4 block tracking-wider">
                        Hi, my name is
                    </span>
                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 tracking-tight">
                        Shivam Soni.
                    </h1>
                    <h2 className="hero-text text-3xl md:text-5xl font-heading font-bold text-gray-400 mb-8 h-[1.2em]">
                        I am a <span className="text-white">{typedText}</span>
                    </h2>
                    <p className="hero-text text-gray-400 max-w-xl text-lg mb-10 leading-relaxed backdrop-blur-sm bg-primary/10 p-4 rounded-xl border border-white/5">
                        I build exceptional digital experiences that blend engineering precision with artistic design.
                        Currently focused on building accessible, human-centered products at the intersection of Hardware & AI.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="hero-btn px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                        >
                            Check out my work!
                        </a>
                        <a
                            href="#contact"
                            className="hero-btn px-8 py-4 bg-transparent border border-accent text-accent font-bold rounded-full hover:bg-accent/10 transition-all transform hover:scale-105 backdrop-blur-sm"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce pointer-events-none">
                <ArrowDown size={32} className="text-accent" />
            </div>
        </section>
    );
};

export default Hero;
