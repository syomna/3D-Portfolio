import { useEffect, useRef } from "react";

const CoolBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Set background color to black
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    // Generate and draw random strings
    const stringCount = 100;
    const stringMaxLength = 200;
    const fontSize = 14;
    const font = `${fontSize}px sans-serif`;

    ctx.fillStyle = "#ffffff";
    ctx.font = font;

    for (let i = 0; i < stringCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const length = Math.random() * stringMaxLength;
      const angle = Math.random() * Math.PI * 2;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText("|".repeat(length), 0, 0);
      ctx.restore();
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default CoolBackground;
