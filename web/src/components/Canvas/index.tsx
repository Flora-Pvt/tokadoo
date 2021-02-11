import { useCanvas } from "./useCanvas";

function Canvas() {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
  ] = useCanvas();

  const handleCanvasClick = (event) => {
    // on each click get current mouse location
    const currentCoord = { x: event.clientX, y: event.clientY };
    // add the newest mouse location to an array in state
    setCoordinates([...coordinates, currentCoord]);
  };

  return (
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
        
      />
  );
}

export default Canvas;
