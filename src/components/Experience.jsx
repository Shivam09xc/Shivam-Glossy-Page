import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative pl-8 md:pl-0"
        >
            {/* Elegant Line Connector for Mobile */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
            <div className="md:hidden absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-accent animate-pulse" />

            <div className="group relative p-8 rounded-2xl glass-glossy transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.2)]">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                {exp.role}
                            </h3>
                            <h4 className="text-lg text-gray-400 font-medium mt-1">
                                {exp.company}
                            </h4>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-500 font-mono">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} /> {exp.period}
                            </span>
                            <span className="flex items-center gap-2">
                                <MapPin size={14} /> {exp.location}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                        {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {exp.details.map((detail, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm text-gray-400 bg-white/5 rounded-full border border-white/5 group-hover:bg-white/10 transition-colors"
                            >
                                {detail}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const experiences = [
        {
            id: 1,
            role: "Freelance Full-Stack Developer",
            company: "Self-Employed",
            period: "2023 - Present",
            location: "Remote",
            description: "Architecting and shipping high-performance web applications. Specializing in integrating AI capabilities into modern React interfaces to create intelligent user experiences.",
            details: ["Next.js/React", "TypeScript", "OpenAI API", "AWS Architecture"]
        },
        {
            id: 2,
            role: "Instrumentation Intern",
            company: "National Fertilizers Limited",
            period: "Summer 2023",
            location: "Nangal, India",
            description: "Analyzed critical industrial automation systems. Collaborated with engineering teams to optimize PLC logic and sensor calibration protocols for large-scale manufacturing.",
            details: ["Industrial Automation", "PLC/DCS Logic", "Sensor Calibration", "Process Control"]
        }
    ];

    return (
        <section ref={containerRef} className="py-32 min-h-screen relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-mono text-sm tracking-wider uppercase pl-1"
                    >
                        Career Path
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mt-4"
                    >
                        Professional <span className="text-accent">Experience</span>
                    </motion.h2>
                </div>

                <div className="relative border-l border-white/10 ml-0 md:ml-8 pl-8 md:pl-16 space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative">
                            {/* Timeline Dot */}
                            <span
                                className="absolute -left-[41px] md:-left-[73px] top-8 w-4 h-4 rounded-full bg-primary border-2 border-white/20 transition-all duration-500 hover:scale-150 hover:border-accent hover:bg-accent hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                            />

                            <ExperienceCard exp={exp} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
