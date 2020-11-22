// function Sprite() {
//   PIXI.Container.call(this);
//   var texture = PIXI.Texture.from('./resources/flappy-bird.png')
//   var bird = PIXI.Sprite.from(texture)
//   bird.anchor.set(0);
//   bird.x = 0;
//   bird.y = 0;
//   this.viewportX = 0
// }

// Sprite.DELTA_X = 0.128
// Sprite.prototype.setViewportX = function(newViewportX) {
//   var distanceTravelled = newViewportX - this.viewportX
//   this.viewportX = newViewportX
//   this.position.x -= distanceTravelled * Sprite.DELTA_X
// }
