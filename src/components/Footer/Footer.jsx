import "./Footer.css";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">

            <motion.div
                className="footer-card"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                viewport={{ once: true }}
            >

                <span className="flower">
                    ✿
                </span>

                <h2>
                    धन्यवाद
                </h2>

                <p className="message">
                    {/* Thank you for your love, blessings and
          being a part of our beautiful journey. */}.
                    आमच्या आनंदाच्या या
                    क्षणी उपस्थित राहून
                    आशीर्वाद द्याल हीच
                    नम्र विनंती.
                </p>

                <div className="divider"></div>

                <div className="couple">

                    <span>Akshay</span>

                    <Heart size={22} fill="#d84c6f" color="#d84c6f" />

                    <span>Harshada</span>

                </div>

                <p className="date">
                    29 Dec 2026 • 6:30 PM
                </p>

                <button>

                    वधू-वरांस शुभाशीर्वाद द्या
                </button>

                

            </motion.div>

        </footer>
    );
}