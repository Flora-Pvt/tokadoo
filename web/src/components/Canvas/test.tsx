import { useRef, useState } from "react";

const SCALE = 0.5;

function Animation() {
  const canvas: any = useRef(null);
  const [coordinates, setCoordinates]: any = useState([
    { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    { x: window.innerWidth / 1.5, y: window.innerHeight / 1.5 },
  ]);

  function init() {
    if (canvas != null) {
      window.requestAnimationFrame(draw);
    }
  }

  const draw = () => {
    var time = new Date();

    var ctx = canvas.current.getContext("2d");
    // clear the canvas area before rendering the coordinates held in state
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.save();
    ctx.scale(SCALE, SCALE);
    ctx.translate(500, 500);
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );

    ctx.beginPath();
    ctx.moveTo(100, 500);
    ctx.rect(100, 60, 100, 100);
    ctx.closePath();

    ctx.fillStyle = "lightblue";
    ctx.lineWidth = 2;
    ctx.fill();

    ctx.restore();

    window.requestAnimationFrame(draw);
  };

  init();

  return (
    <canvas
      ref={canvas}
      width={window.innerWidth}
      height={window.innerHeight}
      className="canvas"
    ></canvas>
  );
}

export default Animation;
