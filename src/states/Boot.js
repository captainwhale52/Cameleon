import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#ffffff'
    this.stage.forcePortrait = true;
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
  }

  preload () {
    WebFont.load({
      google: {
        families: ['Fredoka One']
      },
      active: this.fontsLoaded,
    });

    let text = this.add.text(this.world.centerX, this.world.centerY, 'Loading fonts', { font: '20px Arial', fill: '#000000', align: 'center' });
    text.anchor.setTo(0.5, 0.5);

    this.load.image('loaderBg', './assets/images/loader-background.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png');
  }

  render () {
    if (this.fontsReady) {
      this.state.start('Splash');
    }
  }

  fontsLoaded () {
    this.fontsReady = true;
  }
}
