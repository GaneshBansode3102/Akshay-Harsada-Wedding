import "./Flowers.css";

export default function Flowers() {
  return (
    <div className="flowers">

      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        >
          🌸
        </span>
      ))}

      {[...Array(10)].map((_, i) => (
        <span
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        >
          ✨
        </span>
      ))}

    </div>
  );
}