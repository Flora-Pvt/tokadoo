import { useState, useEffect, useRef } from "react";

// Path2D for a Heart SVG
const heartSVG =
  "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z";
let GIFT_PATH = new Path2D();
GIFT_PATH.rect(0, 0, 500, 550)

let TOP_GIFT_PATH = new Path2D();
TOP_GIFT_PATH.rect(300, -10, 200, 650)

let RIBBON_GIFT_PATH = new Path2D();
RIBBON_GIFT_PATH.rect(300, 270, 200, 100)

let RIBBON2_GIFT_PATH = new Path2D();
RIBBON2_GIFT_PATH.rect(0, 230, 290, 100)

// Scaling Constants for Canvas
const SCALE = 0.1;
const OFFSET = 80;
export const canvasWidth = window.innerWidth * 0.5;
export const canvasHeight = window.innerHeight * 0.5;

export function draw(ctx, location) {
  console.log("attempting to draw");
  ctx.fillStyle = "orange";
  ctx.shadowColor = "blue";
  ctx.shadowBlur = 2;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.rotate((225 * Math.PI) / 180);
  ctx.fill(GIFT_PATH);
  ctx.restore();

  console.log("attempting to draw");
  ctx.fillStyle = "orange";
  ctx.shadowColor = "blue";
  ctx.shadowBlur = 2;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.rotate((225 * Math.PI) / 180);
  ctx.fill(TOP_GIFT_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();

  console.log("attempting to draw");
  ctx.fillStyle = "red";
  ctx.shadowColor = "blue";
  ctx.shadowBlur = 2;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.rotate((225 * Math.PI) / 180);
  ctx.fill(RIBBON_GIFT_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();

  console.log("attempting to draw");
  ctx.fillStyle = "red";
  ctx.shadowColor = "blue";
  ctx.shadowBlur = 2;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.rotate((225 * Math.PI) / 180);
  ctx.fill(RIBBON2_GIFT_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
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
