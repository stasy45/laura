import { Scene } from 'phaser';

export class Button extends Phaser.GameObjects.Text {
  private onClickCallback: () => void;

  constructor(scene: Scene, x: number, y: number, text: string, callback: () => void) {
    super(scene, x, y, text, {
      fontSize: '32px',
      color: '#ffffff',
      backgroundColor: '#000',
      padding: {
        x: 16,
        y: 16
      },
      align: 'center'
    });

    this.onClickCallback = callback;
    this.setInteractive();
    this.on('pointerdown', () => this.onClickCallback());
    this.on('pointerover', () => this.setColor('#ff0000'));
    this.on('pointerout', () => this.setColor('#ffffff'));

    scene.add.existing(this);
  }
}
