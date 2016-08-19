
engineIdle = new Audio('idle.mp3');
engineIdle.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
engineIdle.play();

if (annyang) {
  var commands = {
    'hello': function () {
      console.log('hello to you too')
    },
    'varoom': function () {
      console.log('command varoom')
    },
    'vroom': function () {
      console.log('command vroom')
    }
  }
  annyang.addCommands(commands)
  annyang.start()
}
