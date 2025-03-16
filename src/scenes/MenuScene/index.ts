import { Scene } from 'phaser';
import { Button } from '@/ui';

export class MenuScene extends Scene {
  constructor() {
    super('MenuScene');
  }

  private centerX: number;
  private centerY: number;

  init() {
    this.centerX = Number(this.game.config.width) * 0.5;
    this.centerY = Number(this.game.config.height) * 0.5;
  }

  create() {
    const background = this.add.sprite(0, 0, 'menu-background');
    background.setOrigin(0);

    this.anims.create({
      key: 'menu-background-anim',
      frames: this.anims.generateFrameNumbers('menu-background', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1 // бесконечная анимация
    });

    background.anims.play('menu-background-anim');

    new Button(this, this.centerX, this.centerY, 'Старт', () => {
      this.tweens.add({
        targets: this.cameras.main,
        alpha: 0,
        duration: 1000,
        onComplete: () => {
          this.scene.start('GameScene');
        }
      });
    }).setOrigin(0.5, 0.5);
  }
}
