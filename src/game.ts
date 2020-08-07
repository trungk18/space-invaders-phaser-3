import 'phaser';
import { MainScene } from './scenes/main';

const config: Phaser.Types.Core.GameConfig = {
    title: "Space Invaders",
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: MainScene,
    physics: {
        default: "arcade"
    }
};

class SpaceInvadersGame extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config)
    }
}

const game = new SpaceInvadersGame(config);
