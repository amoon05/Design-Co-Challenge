import React from "react";
import styles from "./Body.module.css";
import { motion } from "framer-motion";

export const Body = () => {
    return (
        <section className={styles.body}>
            <div className={styles.container}>
                <div className={styles.leftBoxContainer}>
                    <motion.div className={styles.leftBox}
                        initial={{ opacity: 0, x:-200 }}
                        animate={{ opacity: 1, x:0}}
                        transition={{ duration: 1 }}
                    ></motion.div>
                    <motion.div className={styles.leftBox}
                        initial={{ opacity: 0, x:-200 }}
                        animate={{ opacity: 1, x:0}}
                        transition={{ duration: 1.2 }}
                    ></motion.div>
                    <motion.div className={styles.leftBox}
                        initial={{ opacity: 0, x:-200 }}
                        animate={{ opacity: 1, x:0}}
                        transition={{ duration: 1.4 }}
                    > 
                    </motion.div>
                    <motion.div className={styles.leftBox}
                        initial={{ opacity: 0, x:-200 }}
                        animate={{ opacity: 1, x:0}}
                        transition={{ duration: 1.6 }}
                    ></motion.div>
                </div>
                <motion.div className={styles.rightBox}
                    initial={{ opacity: 0, x:200 }}
                    animate={{ opacity: 1, x:0 }}
                    transition={{ duration: 1.6 }}
                ></motion.div>
            </div>
        </section>
    );
};