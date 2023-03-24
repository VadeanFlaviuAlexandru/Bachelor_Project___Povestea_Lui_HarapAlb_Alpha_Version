import B21 from "../../assets/Scene1/B21.png"
import { Align } from '../../utilities/Align'

export class Cutscene5 extends Phaser.Scene {
    constructor() {
        super('Cutscene5');
    }
    preload() {
        this.load.image('B21', B21)
    }
    create() {
        let Dialogs = [
            "test"
        ]
        let Backgrounds = [
            "B1"
        ]

        let currentDialog = 0;

        this.Background = this.add.image(10, 10, Backgrounds[currentDialog])
        this.Dialog.setText(Dialogs[currentDialog])

        Align.ScaleToGameW(this.game, this.Background, 0.8)
        Align.center(this.game, this.Background)


        this.input.on('pointerdown', () => {

            this.Background.destroy()

            currentDialog++;

            if (currentDialog >= Dialogs.length) {
                this.scene.start('Board');
                this.scene.get("Board").events.once('start', () => {
                    this.scene.shutdown();
                });
            }

            this.Background = this.add.image(10, 10, Backgrounds[currentDialog])
            this.Dialog.setText(Dialogs[currentDialog])

            Align.ScaleToGameW(this.game, this.Background, 0.8)
            Align.center(this.game, this.Background)
        })
    }
    update() { }
}