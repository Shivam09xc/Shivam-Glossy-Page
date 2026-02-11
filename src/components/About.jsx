import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Zap } from 'lucide-react';

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`glass-glossy rounded-3xl p-6 transition-colors duration-500 hover:border-accent/30 ${className}`}
    >
        {children}
    </motion.div>
);

const About = () => {
    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold text-white opacity-90"
                    >
                        About <span className="text-accent">Me.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Bio Card - Large */}
                    <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4">The Developer</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            I'm <span className="text-accent text-white">Shivam Soni</span>, a Full-Stack developer blending engineering precision with creative design.
                            Currently pursuing B.Tech in ECE, I bridge the gap between hardware logic and software scalability.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            My focus isn't just code—it's crafting digital experiences that feel alive, intuitive, and performant.
                        </p>
                    </BentoCard>

                    {/* Stat Card 1 */}
                    <BentoCard delay={0.1} className="flex flex-col items-center justify-center text-center group">
                        <div className="p-4 bg-accent/10 rounded-full text-accent mb-4 group-hover:scale-110 transition-transform">
                            <Code size={32} />
                        </div>
                        <h4 className="text-3xl font-bold text-white">Full Stack</h4>
                        <p className="text-sm text-gray-500 mt-2">MERN & Next.js</p>
                    </BentoCard>

                    {/* Stat Card 2 */}
                    <BentoCard delay={0.2} className="flex flex-col items-center justify-center text-center group">
                        <div className="p-4 bg-purple-500/10 rounded-full text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                            <Cpu size={32} />
                        </div>
                        <h4 className="text-3xl font-bold text-white">AI Built</h4>
                        <p className="text-sm text-gray-500 mt-2">OpenAI Integration</p>
                    </BentoCard>

                    {/* Tech Stack Mini-Grid */}
                    <BentoCard delay={0.3} className="md:col-span-2 flex items-center justify-between px-8 bg-gradient-to-r from-accent/5 to-transparent">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">Global Scale</h3>
                            <p className="text-gray-400 text-sm">Deploying worldwide</p>
                        </div>
                        <Globe size={48} className="text-white/20" />
                    </BentoCard>

                    {/* Philosophy */}
                    <BentoCard delay={0.4} className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-secondary">
                        <div className="flex items-start gap-4">
                            <Zap className="text-yellow-400 shrink-0" size={24} />
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Core Philosophy</h3>
                                <p className="text-gray-400 italic">
                                    "Simplicity is the ultimate sophistication. Smart code, clean design, and user-first thinking."
                                </p>
                            </div>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
};

export default About;
