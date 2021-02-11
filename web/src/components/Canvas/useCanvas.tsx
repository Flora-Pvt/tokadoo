import { useState, useEffect, useRef } from "react";

// let GIFT_PATH = new Path2D();

// Scaling Constants for Canvas
const SCALE = 0.5;
const OFFSET = 80;
export const canvasWidth = window.innerWidth;
export const canvasHeight = window.innerHeight;

export function draw(ctx, location): any {
  var time = new Date();
  console.log("attempting to draw");
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  //ctx.rotate((225 * Math.PI) / 180);
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );

  ctx.beginPath();
  ctx.moveTo(100,500);
  ctx.rect(100,60,100,100);
  ctx.closePath();
  
  ctx.fillStyle = "lightblue";
  ctx.lineWidth = 2;
  ctx.fill();

  ctx.restore();
  
 
}

export function useCanvas() {
  const canvasRef: any = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    if (canvasObj !== null) {
      const ctx = canvasObj.getContext("2d");
      // clear the canvas area before rendering the coordinates held in state
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      // draw all coordinates held in state
      coordinates.forEach((coordinate) => {
        draw(ctx, coordinate);
      });
    }
  });

  return [coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight];
}
