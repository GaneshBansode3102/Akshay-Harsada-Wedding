import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Envelope.css";

export default function Envelope() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {

    setOpen(true);

    setTimeout(() => {
      navigate("/invitation");
    }, 1800);

  };

  return (

    <div className="envelope-page">

      <motion.div
        className={`envelope ${open ? "open" : ""}`}
        onClick={handleOpen}
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      >

        <div className="back"></div>

        <div className="flap"></div>

        <div className="letter">

          <div className="inner-border"></div>


          <div className="open-text">
            ✦ आमंत्रण उघडा ✦
          </div>

        </div>

        <div className="seal">
          A ❤ H
        </div>

      </motion.div>

    </div>

  );

}