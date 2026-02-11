import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // 3D Tilt Setup
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Spotlight Effect
    const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate tilt
        const mouseXPct = (e.clientX - rect.left) / width - 0.5;
        const mouseYPct = (e.clientY - rect.top) / height - 0.5;
        x.set(mouseXPct);
        y.set(mouseYPct);

        // Calculate spotlight position
        setSpotlightPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full rounded-2xl glass-glossy p-[1px] overflow-hidden group"
        >
            {/* Spotlight Gradient Layer */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
                style={{
                    background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(56,189,248,0.15), transparent 40%)`
                }}
            />

            <div className="relative h-full bg-primary/80 rounded-2xl p-4 flex flex-col gap-4 overflow-hidden">
                {/* Floating Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {/* Image Container with Zoom Effect */}
                <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/5 group-hover:border-accent/30 transition-colors">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Overlay Actions */}
                    <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-white/10 text-white rounded-full hover:bg-accent hover:text-primary transition-colors backdrop-blur-md border border-white/10"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 bg-white/10 text-white rounded-full hover:bg-accent hover:text-primary transition-colors backdrop-blur-md border border-white/10"
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors flex items-center gap-2">
                            {project.title}
                            <ArrowUpRight size={16} className={`opacity-0 -translate-x-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : ''}`} />
                        </h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5 group-hover:border-accent/20 group-hover:bg-accent/5 transition-colors"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
