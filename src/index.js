import p5 from "p5";

const app = p => {
  p.setup = _ => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(100);
  };

  p.draw = _ => {};
};

const appInstance = new p5(app);
