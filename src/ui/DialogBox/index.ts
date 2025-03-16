import { Scene } from 'phaser';
import { TypingText } from '@/ui';

export class DialogBox extends Phaser.GameObjects.Container {
    private dialogLines: string[];
    private currentLineIndex: number;
    private typingText: TypingText | null;
    private background: Phaser.GameObjects.Rectangle;
    private onCompleteCallback: () => void;

    constructor(
        scene: Scene,
        x: number,
        y: number,
        dialogLines: string[],
        width: number = 600,
        height: number = 200,
        onCompleteCallback?: () => void
    ) {
        super(scene, x, y);
        this.dialogLines = dialogLines;
        this.currentLineIndex = 0;
        this.typingText = null;
        this.onCompleteCallback = onCompleteCallback;
        // Создаем фон диалогового окна
        this.background = new Phaser.GameObjects.Rectangle(
            scene,
            0,
            0,
            width,
            height,
            0x000000,
            0.8
        ).setOrigin(0.5);

        // Настраиваем интерактивность
        this.setSize(width, height);
        this.setInteractive();
        this.on('pointerdown', this.showNextText);

        // Добавляем элементы в контейнер
        this.add(this.background);
        this.showNextText();

        scene.add.existing(this);
    }

    private showNextText() {

        if (this.typingText && this.typingText.text !== this.dialogLines[this.currentLineIndex - 1]) {
            this.typingText.stopAnimation(); // Останавливаем анимацию
            return
        }

        if (this.typingText && this.typingText.text === this.dialogLines[this.currentLineIndex - 1]) {
            this.remove(this.typingText);
            this.typingText.destroy();
        }

        if (this.currentLineIndex >= this.dialogLines.length) {
            this.destroy();
            return;
        }

        this.typingText = new TypingText(
            this.scene,
            0,
            0,
            this.dialogLines[this.currentLineIndex]
        ).setOrigin(0.5);

        this.add(this.typingText);
        this.currentLineIndex++;
    }

    destroy() {
        if (this.onCompleteCallback) {
            this.onCompleteCallback();
        }
        this.off('pointerdown', this.showNextText);
        super.destroy(true);
    }
}
