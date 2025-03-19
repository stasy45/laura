import { Scene } from 'phaser';

export class Button extends Phaser.GameObjects.BitmapText {
  private onClickCallback: () => void;

  constructor(scene: Scene, x: number, y: number, text: string, callback: () => void, width: number = 150, height: number = 50) {
    super(scene, x, y, 'bitmap', text, 32); 

    this.onClickCallback = callback;
    this.setInteractive();
    this.on('pointerdown', () => this.onClickCallback());
    this.on('pointerover', () => {
      this.setTint(0x2E8B57); // Изменение цвета при наведении
    });
    this.on('pointerout', () => {
      this.clearTint(); // Сброс цвета при уходе
    });

    scene.add.rectangle(x, y, width, height, 0x000000).setOrigin(0.5);
    scene.add.existing(this);
  }
}
