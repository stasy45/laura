import { Scene } from 'phaser';

export class TypingText extends Phaser.GameObjects.Text {
    private textToType: string;
    private typingSpeed: number;
    private typedText: string;
    private stopTyping: boolean;

    constructor(
        scene: Scene,
        x: number,
        y: number,
        text: string,
        typingSpeed: number = 50,
        width: number = 1000,
        stopTyping: boolean = false
    ) {
        super(scene, x, y, '', {
            fontSize: '32px',
            color: '#ffffff',
            align: 'left',
            wordWrap: { width }
        });

        this.textToType = text;
        this.typingSpeed = typingSpeed;
        this.typedText = '';
        this.stopTyping = stopTyping;

        this.typeText();
    }

    private typeText() {
        if (this.typedText.length < this.textToType.length && !this.stopTyping) {
            this.typedText += this.textToType[this.typedText.length];
            this.setText(this.typedText);

            this.scene.time.delayedCall(this.typingSpeed, () => {
                this.typeText();
            });
        } else if (this.stopTyping && this.typedText !== this.textToType) {
            this.typedText = this.textToType;
            this.setText(this.typedText); // Если анимация остановлена, показываем весь текст
            this.typeText();
        }
    }

    public stopAnimation() {
        this.stopTyping = true;
        this.typeText(); // Останавливаем анимацию и показываем весь текст
    }
}
