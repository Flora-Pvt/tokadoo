import Matter, {
  Engine,
  Render,
  Runner,
  Composites,
  MouseConstraint,
  Mouse,
  World,
  Bodies,
} from "matter-js";

import gift from "../assets/images/giftbox.svg"

function GiftsBGAnimation() {
  // create engine
  const engine = Engine.create(),
    world = engine.world;

    console.log(window.innerWidth, window.innerHeight);

  // create renderer
  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      showAngleIndicator: false,
      wireframes: false, 
      background: "transparent"
    },
  });

  Render.run(render);

  // create runner
  const runner = Runner.create();
  Runner.run(runner, engine);

  // add bodies
  const offset = 10,
    options = {
      isStatic: true, 
      render: {
        fillStyle: "blue"
      }
    };

  world.bodies = [];

  // these static walls will not be rendered in this sprites example, see options
  World.add(world, [
    Bodies.rectangle(400, -offset, window.innerWidth, 10, options),
    Bodies.rectangle(400, 600, window.innerWidth, 10, options),
    Bodies.rectangle((window.innerWidth -510) + offset, 300, 10, window.innerHeight, options),
    Bodies.rectangle(-235, 300, 10, window.innerHeight, options)
  ]);

  const stack = Composites.stack(20, 20, 10, 4, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 50, 50, {
      render: {
        strokeStyle: '#ffffff',
        sprite: {
          texture: gift
        }
      }
    });
  });

  World.add(world, stack);

  // add mouse control
  const mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
  });

  // context for MatterTools.Demo
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function () {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    }
  };
}

GiftsBGAnimation.title = "Soft Body";
GiftsBGAnimation.for = ">=0.14.2";

export default GiftsBGAnimation;
