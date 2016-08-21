
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
      engineRev.play()
      $('.line').toggleClass('rotate')
    },
    'hello': function () {
      console.log('hello to you too')
      engineRev.play()
      $('.line').toggleClass('rotate')
    },
    'varoom': function () {
      console.log('command varoom')
      engineRev.play()
      $('.line').toggleClass('rotate')
    },
    'vroom': function () {
      console.log('command vroom')
      engineRev.play()
      $('.line').toggleClass('rotate')
    },
    'broom': function () {
      console.log('command broom')
      engineRev.play()
      $('.line').toggleClass('rotate')
    },
    'veroom': function () {
      console.log('command veroom')
      engineRev.play()
      $('.line').toggleClass('rotate')
    }
  }
  annyang.addCommands(commands)
  annyang.start()
}
