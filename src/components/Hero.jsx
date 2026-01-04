import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="section text-center" style={{ paddingTop: "90px", paddingBottom: "0px" }}>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Hi, I'm <span className="text-info">Shubham Parab</span>
            </motion.h1>
            <p className="lead">
                Full Stack Software Engineer | Immediate Joiner | React & MERN Specialist
            </p>
        </section>
    );
}
