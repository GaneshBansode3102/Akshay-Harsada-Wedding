import "./Hero.css";
import { motion } from "framer-motion";
import ganpati from "../../assets/ganpati.png";
import weddingData from "../../data/weddingData";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-bg"></div>

      <div className="flower flower-left"></div>
      <div className="flower flower-right"></div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <img src={ganpati} className="ganpati" alt="Ganpati" />

        <p className="shree">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <div className="gold-line"></div>

        <h4>|| शुभ विवाह सोहळा ||</h4>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {weddingData.groom.name}
        </motion.h1>

        <div className="heart">❤</div>

        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {weddingData.bride.name}
        </motion.h1>

        <div className="parents">
          <p>श्री. श्याम शिवराम शिंदे यांचे सुपुत्र</p>
          <p>श्री. सुनील अनंता मराठे यांची सुकन्या</p>
        </div>

        <p className="invite-text">

          आमच्या शुभ विवाह सोहळ्यास
          आपण सहकुटुंब उपस्थित राहून
          वधू-वरांस शुभाशीर्वाद द्यावेत,
          ही नम्र विनंती.

        </p>

        <div className="date-box">
          <span>29</span>

          <div>
            <h3>Dec</h3>
            <p>2026</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
        >
          Scroll Down ↓
        </motion.button>

      </motion.div>

    </section>
  );
}