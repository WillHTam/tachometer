
engineIdle = new Audio('idle.mp3')
engineIdle.addEventListener('ended', function () {
    this.currentTime = 0
    this.play()
}, false)
engineIdle.play()

engineRev = new Audio('purr.mp3')

if (annyang) {
  var commands = {
    'test': function () {
      console.log('test confirmed')
    },
    'hello': function () {
      console.log('hello to you too')
    },
    'varoom': function () {
      console.log('command varoom')
      engineRev.play()
    },
    'vroom': function () {
      console.log('command vroom')
      engineRev.play()
    },
    'broom': function () {
      console.log('command broom')
      engineRev.play()
      $('.line').toggleClass('rotate')
    },
    'veroom': function () {
      console.log('command veroom')
      engineRev.play()
    }
  }
  annyang.addCommands(commands)
  annyang.start()
}
