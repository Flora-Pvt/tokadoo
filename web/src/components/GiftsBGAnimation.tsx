import React, { Component } from "react";
import {
  Engine,
  Render,
  Runner,
  Composites,
  Common,
  MouseConstraint,
  Mouse,
  World,
  Bodies,
} from "matter-js";

//Icons made by https://www.freepik.com from https://www.flaticon.com/
import orangeGift from "../assets/images/orange-gift.svg";
import yellowGift from "../assets/images/yellow-gift.svg";

class GiftsBGAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // create engine
    let engine = Engine.create(),
      world = engine.world;

    // create renderer
    let render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        showAngleIndicator: false,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);

    // create runner
    let runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    let offset = 10,
      options = {
        isStatic: true,
        render: {
          fillStyle: "transparent",
        },
      };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    World.add(world, [
      Bodies.rectangle(400, -offset, window.innerWidth, 10, options),
      Bodies.rectangle(400, 600, window.innerWidth, 10, options),
      Bodies.rectangle(
        window.innerWidth - 510 + offset,
        300,
        10,
        window.innerHeight,
        options
      ),
      Bodies.rectangle(-235, 300, 10, window.innerHeight, options),
    ]);

    let stack = Composites.stack(0, 0, 10, 4, 0, 0, function (x, y) {
      if (Common.random() > 0.35) {
        return Bodies.rectangle(x, y, 64, 64, {
          render: {
            strokeStyle: "#ffffff",
            sprite: {
              texture: yellowGift,
            },
          },
        });
      } else {
        return Bodies.circle(x, y, 35, {
          density: 0.0005,
          frictionAir: 0.06,
          restitution: 0.3,
          friction: 0.01,
          render: {
            sprite: {
              texture: orangeGift,
            },
          },
        });
      }
    });

    World.add(world, stack);

    // add mouse control
    let mouse = Mouse.create(render.canvas),
      mouseconstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(world, mouseconstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    this.setState({
      render: render,
    });
  }

  render() {
    return <div ref="scene" className="canvas" />;
  }
}

export default GiftsBGAnimation;
