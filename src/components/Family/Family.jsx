import "./Family.css";
import { motion } from "framer-motion";

export default function Family() {
  return (
    <section className="family" id="family">

      <h2>Our Family</h2>

      <div className="family-grid">

        <motion.div
          className="family-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <div className="family-avatar">🤵</div>

          <h3>Groom Family</h3>

          <div className="gold-line"></div>

          <p>श्री. श्याम शिवराम शिंदे</p>

          <p>सौ. __________ शिंदे</p>

          <p>परिवार व मित्र परिवार</p>

        </motion.div>

        <motion.div
          className="family-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <div className="family-avatar">👰</div>

          <h3>Bride Family</h3>

          <div className="gold-line"></div>

          <p>श्री. सुनील अनंता मराठे</p>

          <p>सौ. __________ मराठे</p>

          <p>परिवार व मित्र परिवार</p>

        </motion.div>

      </div>

    </section>
  );
}