export default class GameOver extends Phaser.Scene {
  constructor() {
    super("gameOver");
  }

  init() {}

  preload() {}

  create() {
    // add sky background
    this.add.image(400, 300, "sky").setScale(0.555);
    //add text
    this.gameOverText = this.add.text(265, 300, "PERDISTE", {
      fontSize: "60px",
      fill: "#000",
    });
  }

  update() {}
}
