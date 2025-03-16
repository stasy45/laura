import { Game } from 'phaser';
import { BootScene, GameScene, MenuScene } from '@/scenes';
import './index.css';

const config: Phaser.Types.Core.GameConfig = {
  title: "Laura",
  version: '0.0.0',
  width: 1280,
  height: 720,
  type: Phaser.AUTO,
  parent: 'app', 
  scene: [
    BootScene,
    MenuScene,
    GameScene,
  ],
  input: {
    keyboard: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300,
        x: 0
      },
      debug: false
    }
  },
  backgroundColor: '#221e30',
  render: { pixelArt: true, antialias: true }
};


export const game = new Game(config);
