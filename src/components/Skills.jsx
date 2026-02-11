import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="space-y-4"
    >
        <h3 className="text-xl font-heading font-medium text-gray-400 mb-6 border-b border-white/10 pb-2">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
                <div
                    key={i}
                    className="group flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
                >
                    <div className="w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent group-hover:shadow-[0_0_8px_#38bdf8] transition-all" />
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {skill}
                    </span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const skillData = [
        {
            title: "Frontend Engineering",
            skills: ["React.js", "Next.js", "TailwindCSS", "Framer Motion", "Three.js", "Redux"]
        },
        {
            title: "Backend & Systems",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Python"]
        },
        {
            title: "AI & Innovation",
            skills: ["OpenAI API", "LangChain", "Prompt Eng.", "Model Tuning", "Automation"]
        },
        {
            title: "DevOps & Tools",
            skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "Linux", "Postman"]
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Technical <span className="text-accent">Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        A curated stack of modern technologies I use to build scalable, high-performance applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {skillData.map((category, index) => (
                        <SkillCategory
                            key={index}
                            title={category.title}
                            skills={category.skills}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
