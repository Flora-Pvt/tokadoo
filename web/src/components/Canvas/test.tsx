import { useRef } from "react";

function Animation() {
  // const time = new Date();
  const canvas: any = useRef(null);

  class Rectangle {
    ypoint;
    xpoint;

    constructor(xpoint, ypoint) {
      this.xpoint = xpoint;
      this.ypoint = ypoint;
    }

    draw() {
      if (canvas.current !== null && canvas.current !== undefined) {
        let ctx = canvas.current.getContext("2d");
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        ctx.save();
        ctx.translate(-50, -50);
        /*ctx.rotate(
            ((2 * Math.PI) / 60) * time.getSeconds() +
            ((2 * Math.PI) / 60000) * time.getMilliseconds()
          );*/

        ctx.beginPath();
        ctx.rect(this.xpoint, this.ypoint, 100, 100);
        ctx.closePath();

        ctx.fillStyle = "lightblue";
        ctx.lineWidth = 2;
        ctx.fill();

        ctx.restore();
      }
    }

    moveRectangle(newXpoint) {
      this.xpoint = newXpoint;
      this.draw();
    }

    clickRectangle(xmouse, ymouse) {
      const distance = Math.sqrt(
        (xmouse - this.xpoint) * (xmouse - this.xpoint) +
        (ymouse - this.ypoint) * (ymouse - this.ypoint)
      );

      if (distance < 70) {
        console.log("short enough : " + distance);
        this.moveRectangle(this.xpoint - 100)
      }
    }
  }


  let rectangle = new Rectangle(300, 300);

  rectangle.draw();

  return (
    <canvas
      ref={canvas}
      width={window.innerWidth}
      height={window.innerHeight}
      className="canvas"
      onMouseMove={(event) => {
        const rect = canvas.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        rectangle.clickRectangle(x, y);
      }}
    ></canvas>
  );
}

export default Animation;
