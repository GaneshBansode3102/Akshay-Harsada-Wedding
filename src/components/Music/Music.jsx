import { useEffect, useRef, useState } from "react";
import "./Music.css";

export default function Music() {

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {

    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      audioRef.current.play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          // Browser autoplay block करू शकतो
          setPlaying(false);
        });
    }

  }, []);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);

  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
      >
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        className="music-btn"
        onClick={toggleMusic}
        title={playing ? "Pause Music" : "Play Music"}
      >
        {playing ? "🔇" : "🎵"}
      </button>
    </>
  );
}