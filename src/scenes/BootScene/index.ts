import { Scene } from 'phaser';

export class BootScene extends Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.spritesheet('menu-background', 'images/menu-background.png', {
      frameWidth: 1280, // Ширина одного кадра
      frameHeight: 720 // Высота одного кадра
    });
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
