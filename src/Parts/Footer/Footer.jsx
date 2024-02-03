import React from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <section>
            <motion.div className={styles.footer}
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ duration: 1 }}
            ></motion.div>
        </section>
    );
};