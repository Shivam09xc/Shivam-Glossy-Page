import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const FloatingShape = ({ delay, duration, rotate, left, top }) => (
    <motion.div
        animate={{
            y: [0, -20, 0],
            rotate: [0, rotate, 0],
            opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
        }}
        className="absolute w-24 h-24 border border-accent/20 rounded-lg backdrop-blur-sm z-0 pointer-events-none"
        style={{ left, top }}
    />
);

const SocialLink = ({ href, icon: Icon, label }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-4 bg-white/5 border border-white/10 rounded-xl hover:border-accent hover:bg-accent/10 transition-all duration-300"
        >
            <Icon size={24} className="text-gray-400 group-hover:text-accent transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
            </span>
        </motion.a>
    );
};

const Contact = () => {
    const containerRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [focusedField, setFocusedField] = useState(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section ref={containerRef} className="py-20 min-h-screen flex items-center relative overflow-hidden">
            {/* Background Geometric Elements */}
            <FloatingShape delay={0} duration={6} rotate={45} left="10%" top="20%" />
            <FloatingShape delay={2} duration={8} rotate={-30} left="80%" top="10%" />
            <FloatingShape delay={1} duration={7} rotate={90} left="15%" top="70%" />
            <FloatingShape delay={3} duration={9} rotate={-60} left="85%" top="80%" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white"
                    >
                        Establish <span className="text-accent">Connection</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-400"
                    >
                        Initiate data transmission protocol.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Holographic Info Panel */}
                    <motion.div
                        style={{ y }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-accent rounded-full" />
                                Comm Channels
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-4 text-gray-300 group/item hover:text-white transition-colors">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all">
                                        <Mail size={20} className="text-accent" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">Email Protocol</span>
                                        <span className="font-mono">shivam@example.com</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300 group/item hover:text-white transition-colors">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all">
                                        <Phone size={20} className="text-accent" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">Voice Line</span>
                                        <span className="font-mono">+91 98765 43210</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300 group/item hover:text-white transition-colors">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/item:border-accent/50 group-hover/item:bg-accent/10 transition-all">
                                        <MapPin size={20} className="text-accent" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">Base Location</span>
                                        <span className="font-mono">India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Frequency Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            <SocialLink href="https://github.com/Shivam09xc" icon={Github} label="GitHub" />
                            <SocialLink href="https://linkedin.com/in/shivam-soni-159846255/" icon={Linkedin} label="LinkedIn" />
                            <SocialLink href="#" icon={Twitter} label="Twitter" />
                        </div>
                    </motion.div>

                    {/* Interactive Terminal Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="p-8 rounded-2xl glass-glossy relative overflow-hidden"
                    >
                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%] opacity-20" />

                        <div className="relative z-10 space-y-6">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>

                            {[
                                { id: 'name', label: 'Identity', type: 'text', placeholder: 'ENTER NAME' },
                                { id: 'email', label: 'Return Address', type: 'email', placeholder: 'ENTER EMAIL' },
                            ].map((field) => (
                                <div key={field.id} className="relative group">
                                    <label htmlFor={field.id} className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === field.id || formData[field.id] ? '-top-2.5 text-xs text-accent bg-primary px-2' : 'top-3.5 text-gray-500'}`}>
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.id}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField(field.id)}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-mono"
                                    />
                                    {/* Animated border line */}
                                    <div className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ${focusedField === field.id ? 'w-full' : 'w-0'}`} />
                                </div>
                            ))}

                            <div className="relative group">
                                <label htmlFor="message" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? '-top-2.5 text-xs text-accent bg-primary px-2' : 'top-3.5 text-gray-500'}`}>
                                    Data Packet
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:bg-white/10 transition-all font-mono resize-none"
                                />
                                <div className={`absolute bottom-2 left-0 h-[1px] bg-accent transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`} />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent text-primary font-bold py-4 rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                                {status === 'sending' ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                                        Transmitting...
                                    </span>
                                ) : status === 'success' ? (
                                    'Transmission Complete!'
                                ) : (
                                    <>
                                        <span className="relative z-10">Initialize Transmission</span>
                                        <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
