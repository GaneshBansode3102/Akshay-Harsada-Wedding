import "./Loader.css";
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  return (
    <div className="loader-screen">

      <motion.div
        className="loader-card"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="loader-flower">🌸</div>

        <h1>Akshay</h1>

        <span>❤</span>

        <h1>Harshada</h1>

        <p>
          Together with our families
          <br />
          invite you to celebrate our wedding.
        </p>

        <button onClick={onComplete}>
          Open Invitation
        </button>

      </motion.div>

    </div>
  );
}