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
        this.image = core.assets['chara1.png'];
        this.on('enterframe', function() {
          this.x += 5;
        });
        core.rootScene.addChild(this);
      }
    });

    var bear = new Bear(0, 100);

  };
  core.start();

};
