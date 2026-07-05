import { useEffect, useState } from "react";
import "./ScrollProgress.css";

export default function ScrollProgress() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const updateProgress = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;

      setProgress((current / total) * 100);
    };

    window.addEventListener("scroll", updateProgress);

    return () => window.removeEventListener("scroll", updateProgress);

  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );

}