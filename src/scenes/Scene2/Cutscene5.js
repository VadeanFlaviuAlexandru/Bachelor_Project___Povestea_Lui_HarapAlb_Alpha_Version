import { Align } from "../../utilities/Align";

export class Cutscene5 extends Phaser.Scene {
  constructor() {
    super("Cutscene5");
  }
  preload() {
    this.load.image("B31", "src/assets/Scene2/B31.png");
    this.load.image("B32", "src/assets/Scene2/B32.png");
  }
  create() {
    let Dialogs = [
      "Și, prin dreptul podului, numai iaca îi iese și lui ursul înainte, mornăind înfricoșat.",
      "Calul atunci dă năvală asupra ursului, și fiul craiului, ridică buzduganul să dea. ",
    ];
    let Backgrounds = ["B31", "B32"];
    let currentDialog = 0;
    this.Background = this.add.image(10, 10, Backgrounds[currentDialog]);
    this.Dialog.setText(Dialogs[currentDialog]);
    Align.ScaleToGameW(this.game, this.Background, 0.8);
    Align.center(this.game, this.Background);
    this.input.keyboard.on("keydown-SPACE", () => {
      this.Background.destroy();
      currentDialog++;
      if (currentDialog >= Dialogs.length) {
        this.scene.start("Board");
        this.scene.get("Board").events.once("start", () => {
          this.scene.shutdown();
        });
      }
      this.Background = this.add.image(10, 10, Backgrounds[currentDialog]);
      this.Dialog.setText(Dialogs[currentDialog]);
      Align.ScaleToGameW(this.game, this.Background, 0.8);
      Align.center(this.game, this.Background);
    });
  }
  update() {}
}
