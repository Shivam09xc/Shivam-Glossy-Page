import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';
import { gsap } from 'gsap';

const Layout = ({ children }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        // animated background gradient
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                backgroundPosition: '200% 200%',
                ease: 'none',
                duration: 15,
                repeat: -1,
            });
        }, bgRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen w-full relative overflow-x-hidden text-gray-100 font-sans selection:bg-accent selection:text-primary">
            <ScrollProgress />
            <CustomCursor />
            <BackToTop />

            {/* Animated Background */}
            <div
                ref={bgRef}
                className="fixed inset-0 z-[-1] bg-gradient-to-br from-primary via-secondary to-primary bg-[length:400%_400%]"
            />

            {/* Grid overlay for tech feel */}
            <div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <Navbar />

            <main className="pt-16 min-h-[calc(100vh-80px)]">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
