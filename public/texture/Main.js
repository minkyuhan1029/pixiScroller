function Main() {
  // Sets the stage of the game
  this.stage = new PIXI.Container()
  this.renderer = PIXI.autoDetectRenderer(512, 384, {
    view: document.getElementById('game-canvas')
  })
  // this.scroller = new Scroller(this.stage);

  // //main loop for animation
  // requestAnimationFrame(this.update.bind(this))
  this.loadSpriteSheet()
}

Main.SCROLL_SPEED = 2

Main.prototype.update = function() {
  // scroller.update()

  this.scroller.moveViewportXBy(Main.SCROLL_SPEED)
  this.renderer.render(this.stage)
  requestAnimationFrame(this.update.bind(this))
}

Main.prototype.loadSpriteSheet = function() {
  var loader = PIXI.loader
  loader.add('wall', './resources/wall.json')
  loader.add('bg-mid', './resources/bg-mid.png')
  loader.add('bg-far', 'resources/bg-far.png')
  loader.once('complete', this.spriteSheetLoaded.bind(this))
  loader.load()
}

Main.prototype.spriteSheetLoaded = function() {
  this.scroller = new Scroller(this.stage)
  requestAnimationFrame(this.update.bind(this))
}
