import { Scene } from 'phaser';

export class BootScene extends Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('background', 'assets/background.png');
  }

  create() {
    // В методе create или update сцены
    this.tweens.add({
      targets: this.cameras.main,
      alpha: 0,
      duration: 1000,
      onComplete: () => {
        this.scene.start('MenuScene');
      }
    });
  }
}
