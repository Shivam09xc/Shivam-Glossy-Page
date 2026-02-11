import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const SplineHero = () => {
    const [isLoading, setIsLoading] = useState(true);

    const onLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            {/* Loading Overlay */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary z-20">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                        <span className="text-accent font-mono text-sm animate-pulse">Loading 3D Scene...</span>
                    </div>
                </div>
            )}

            {/* Spline Scene - Scaled up for immersive effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoading ? 0 : 1, scale: 1.25 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center transform-gpu"
            >
                <Spline
                    scene="https://prod.spline.design/Q9i0JhtB0-hqiIgn/scene.splinecode"
                    onLoad={onLoad}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Overlay Gradient for Text Readability & Seamless Blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/40 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none z-10" />
        </div>
    );
};

export default SplineHero;
