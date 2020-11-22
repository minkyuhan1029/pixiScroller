// function Main() {
//   // Sets the stage of the game
//   this.stage = new PIXI.Container()
//   this.renderer = PIXI.autoDetectRenderer(512, 384, {
//     view: document.getElementById('game-canvas')
//   })
//   // this.scroller = new Scroller(this.stage);

//   // //main loop for animation
//   // requestAnimationFrame(this.update.bind(this))
//   this.loadSpriteSheet()
// }

// Main.SCROLL_SPEED = 2

// Main.prototype.update = function() {
//   // scroller.update()

//   this.scroller.moveViewportXBy(Main.SCROLL_SPEED)
//   this.renderer.render(this.stage)
//   requestAnimationFrame(this.update.bind(this))
// }

// Main.prototype.loadSpriteSheet = function() {
//   var loader = PIXI.loader
//   loader.add('wall', './resources/wall.json')
//   loader.add('bg-mid', './resources/bg-mid.png')
//   loader.add('bg-far', 'resources/bg-far.png')
//   loader.once('complete', this.spriteSheetLoaded.bind(this))
//   loader.load()
// }

// Main.prototype.spriteSheetLoaded = function() {
//   this.scroller = new Scroller(this.stage)
//   requestAnimationFrame(this.update.bind(this))

//   this.pool = new WallSpritesPool()
//   this.wallSlices = []
// }

// Main.prototype.generateTestWallSpan = function() {
//   var lookupTable = [
//     this.pool.borrowFrontEdge, // 1st slice
//     this.pool.borrowWindow, // 2nd slice
//     this.pool.borrowDecoration, // 3rd slice
//     this.pool.borrowWindow, // 4th slice
//     this.pool.borrowDecoration, // 5th slice
//     this.pool.borrowWindow, // 6th slice
//     this.pool.borrowBackEdge // 7th slice
//   ]
//   var yPos = [
//     128, // 1st slice
//     128, // 2nd slice
//     128, // 3rd slice
//     192, // 4th slice
//     192, // 5th slice
//     192 // 6th slice
//   ]

//   for (var i = 0; i < lookupTable.length; i++) {
//     var func = lookupTable[i]

//     var sprite = func.call(this.pool)
//     sprite.position.x = 64 + i * 64
//     sprite.position.y = yPos[i]

//     this.wallSlices.push(sprite)

//     this.stage.addChild(sprite)
//   }
// }

// Main.prototype.clearTestWallSpan = function() {
//   var lookupTable = [
//     this.pool.returnFrontEdge, // 1st slice
//     this.pool.returnWindow, // 2nd slice
//     this.pool.returnDecoration, // 3rd slice
//     this.pool.returnWindow, // 4th slice
//     this.pool.returnDecoration, // 5th slice
//     this.pool.returnWindow, // 6th slice
//     this.pool.returnBackEdge // 7th slice
//   ]

//   for (var i = 0; i < lookupTable.length; i++) {
//     var func = lookupTable[i]
//     var sprite = this.wallSlices[i]

//     this.stage.removeChild(sprite)
//     func.call(this.pool, sprite)
//   }

//   this.wallSlices = []
// }

function Main() {
  this.stage = new PIXI.Container()
  this.renderer = PIXI.autoDetectRenderer(512, 384, {
    view: document.getElementById('game-canvas')
  })

  this.scrollSpeed = Main.MIN_SCROLL_SPEED

  this.loadSpriteSheet()
}

Main.MIN_SCROLL_SPEED = 5
Main.MAX_SCROLL_SPEED = 15
Main.SCROLL_ACCELERATION = 0.005

Main.prototype.update = function() {
  this.scroller.moveViewportXBy(this.scrollSpeed)
  this.scrollSpeed += Main.SCROLL_ACCELERATION
  if (this.scrollSpeed > Main.MAX_SCROLL_SPEED) {
    this.scrollSpeed = Main.MAX_SCROLL_SPEED
  }
  this.renderer.render(this.stage)
  requestAnimationFrame(this.update.bind(this))
}

Main.prototype.loadSpriteSheet = function() {
  var loader = PIXI.loader
  loader.add('wall', 'resources/wall.json')
  loader.add('bg-mid', 'resources/bg-mid.png')
  loader.add('bg-far', 'resources/bg-far.png')
  loader.add('flappy-bird', 'resources/flappy-bird.png')
  loader.once('complete', this.spriteSheetLoaded.bind(this))
  loader.load()
}

Main.prototype.spriteSheetLoaded = function() {
  this.scroller = new Scroller(this.stage)
  requestAnimationFrame(this.update.bind(this))
}
