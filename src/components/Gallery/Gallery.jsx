import "./Gallery.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=900",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",
];

export default function Gallery() {

  const [selected, setSelected] = useState(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelected((selected + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelected((selected - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery" id="gallery">

      <h2>Our Memories</h2>

      <div className="gallery-grid">

        {images.map((img, index) => (

          <motion.img
            key={index}
            src={img}
            alt=""
            whileHover={{ scale: 1.05 }}
            transition={{ duration: .3 }}
            onClick={() => setSelected(index)}
          />

        ))}

      </div>

      <AnimatePresence>

        {selected !== null && (

          <motion.div
            className="lightbox"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <button
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <button
              className="prev-btn"
              onClick={prevImage}
            >
              ❮
            </button>

            <motion.img
              src={images[selected]}
              className="lightbox-img"
              initial={{ scale: .8 }}
              animate={{ scale: 1 }}
              exit={{ scale: .8 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="next-btn"
              onClick={nextImage}
            >
              ❯
            </button>

            <div className="counter">
              {selected + 1} / {images.length}
            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}