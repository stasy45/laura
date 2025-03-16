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
    this.add.image(0, 0, 'background');

    this.add.text(this.centerX, this.centerY - 100, 'Laura', {
      fontSize: '64px',
      color: '#ffffff'
    }).setOrigin(0.5, 0.5);

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
