import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [circleOpacity, setCircleOpacity] = useState(0);
    const containerRef = useRef(null);
    const nameRef = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            const {width} = e.target.getBoundingClientRect();
            const offset = e.offsetX;

            const left = `${(offset / width) * 100}%`;

            nameRef.current.animate({left}, {duration:100, fill: "forwards" });
            setCircleOpacity(1);
        };

        const mouseLeave = (e) => {
            setCircleOpacity(0);
        };

        containerRef.current.addEventListener("mousemove", mouseMove);

        containerRef.current.addEventListener("mouseleave", mouseLeave);

        return () => {
            containerRef.current.removeEventListener("mousemove", mouseMove);
            
            containerRef.current.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <nav>
            <motion.div className={styles.navbar}
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 1 }}
            >
                <div ref={containerRef} className={styles.animationContainer}>
                    <span className={styles.name}>
                        Hi I'm Aaron
                    </span>
                    <span style={{opacity: circleOpacity}} ref={nameRef} className={styles.circle}></span>
                </div>
            </motion.div>
        </nav>
    );
};

