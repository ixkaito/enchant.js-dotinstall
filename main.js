enchant();

window.onload = function() {

  var core = new Core(320, 320);
  core.preload('chara1.png');
  core.fps = 15;
  core.onload = function() {

    // var bear = new Sprite(32, 32);
    // bear.image = core.assets['chara1.png'];
    // bear.x = 0;
    // bear.y = 0;
    // bear.frame = 0;

    // bear.on('enterframe', function() {
    //   if (core.input.left) this.x -= 5;
    //   if (core.input.right) this.x += 5;
    //   if (core.input.up) this.y -= 5;
    //   if (core.input.down) this.y += 5;

    //   if (this.intersect(enemy)) {
    //     label.text = 'hit!';
    //   }

    //   if (this.within(enemy, 10)) {
    //     // label.text = 'HIT!';
    //     core.pushScene(gameOverScene);
    //     core.stop();
    //   }
    // });

    // var enemy = new Sprite(32, 32);
    // enemy.image = core.assets['chara1.png'];
    // enemy.x = 80;
    // enemy.y = 0;
    // enemy.frame = 5;

    // var label = new Label();
    // label.x = 280;
    // label.y = 5;
    // label.color = 'red';
    // label.font = '14px "Arial"';

    // var gameOverScene = new Scene();
    // gameOverScene.backgroundColor = 'black';

    // core.rootScene.addChild(bear);
    // core.rootScene.addChild(enemy);
    // core.rootScene.addChild(label);

    var Bear = Class.create(Sprite, {
      initialize: function(x, y) {
        Sprite.call(this, 32, 32);
        this.x = x;
        this.y = y;
        this.fram = rand(5);
        this.opacity = rand(100) / 100;
        this.image = core.assets['chara1.png'];

        this.tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT)
               .moveBy(-rand(100), -rand(20), rand(20))
               .fadeOut(20)
               .fadeIn(10)
               .loop();

        core.rootScene.addChild(this);
      }
    });

    var bears = [];
    for (var i = 0; i < 100; i++) {
      bears[i] = new Bear(rand(320), rand(320));
    }

  };
  core.start();

};

function rand(n) {
  return Math.floor(Math.random() * (n+1));
}
