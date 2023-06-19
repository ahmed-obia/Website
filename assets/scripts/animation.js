scrollEvents.init();
var onvisible = {
// animation effects (@obia.ahmed1337)
  effects: {
    'blur-in': {
      transition: function(speed, delay) {
        return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'filter ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function(intensity) {
        this.style.opacity = 0;
        this.style.filter = 'blur(' + (0.25 * intensity) + 'rem)';
      },
      play: function() {
        this.style.opacity = 1;
        this.style.filter = 'none';
      },
    },
      play: function() {
        this.style.opacity = 1;
        this.style.transform = 'none';
      },
    },
    'fade-right': {
      transition: function(speed, delay) {
        return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function(intensity) {
        this.style.opacity = 0;
        this.style.transform = 'translateX(' + (-1.5 * intensity) + 'rem)';
      },
      play: function() {
        this.style.opacity = 1;
        this.style.transform = 'none';
      },
    },
    'fade-left': {
      transition: function(speed, delay) {
        return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function(intensity) {
        this.style.opacity = 0;
        this.style.transform = 'translateX(' + (1.5 * intensity) + 'rem)';
      },
      play: function() {
        this.style.opacity = 1;
        this.style.transform = 'none';
      },
    },
    'fade-down': {
      transition: function(speed, delay) {
        return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function(intensity) {
        this.style.opacity = 0;
        this.style.transform = 'translateY(' + (-1.5 * intensity) + 'rem)';
      },
      play: function() {
        this.style.opacity = 1;
        this.style.transform = 'none';
      },
    },
    'fade-up': {
      transition: function(speed, delay) {
        return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function(intensity) {
        this.style.opacity = 0;
        this.style.transform = 'translateY(' + (1.5 * intensity) + 'rem)';
      },
      play: function() {
        this.style.opacity = 1;
        this.style.transform = 'none';
      },
    },
    'fade-in': {
      transition: function(speed, delay) {
        return 'opacity ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function() {
        this.style.opacity = 0;
      },
      play: function() {
        this.style.opacity = 1;
      },
    },
    'fade-in-background': {
      custom: true,
      transition: function(speed, delay) {
        this.style.setProperty('--onvisible-speed', speed + 's');
        if (delay) this.style.setProperty('--onvisible-delay', delay + 's');
      },
      rewind: function() {
        this.style.removeProperty('--onvisible-background-color');
      },
      play: function() {
        this.style.setProperty('--onvisible-background-color', 'rgba(0,0,0,0.001)');
      },
    },
    'zoom-in-image': {
      target: 'img',
      transition: function(speed, delay) {
        return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function() {
        this.style.transform = 'scale(1)';
      },
      play: function(intensity) {
        this.style.transform = 'scale(' + (1 + (0.1 * intensity)) + ')';
      },
    },
    'zoom-out-image': {
      target: 'img',
      transition: function(speed, delay) {
        return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function(intensity) {
        this.style.transform = 'scale(' + (1 + (0.1 * intensity)) + ')';
      },
      play: function() {
        this.style.transform = 'none';
      },
    },
    'focus-image': {
      target: 'img',
      transition: function(speed, delay) {
        return 'transform ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '') + ', ' + 'filter ' + speed + 's ease' + (delay ? ' ' + delay + 's' : '');
      },
      rewind: function(intensity) {
        this.style.transform = 'scale(' + (1 + (0.05 * intensity)) + ')';
        this.style.filter = 'blur(' + (0.25 * intensity) + 'rem)';
      },
      play: function(intensity) {
        this.style.transform = 'none';
        this.style.filter = 'none';
      },
    },
  }
onvisible.add('#text01', {
  style: 'fade-in',
  speed: 1375,
  intensity: 2,
  delay: 1750,
  staggerOrder: '',
  state: true,
  replay: false
});
onvisible.add('#divider03', {
  style: 'fade-in',
  speed: 375,
  intensity: 5,
  delay: 0,
  staggerOrder: '',
  state: true,
  replay: false
});
onvisible.add('#text02', {
  style: 'fade-down',
  speed: 1250,
  intensity: 6,
  delay: 0,
  staggerOrder: '',
  state: true,
  replay: false
});
onvisible.add('#image01', {
  style: 'zoom-in',
  speed: 1250,
  intensity: 5,
  delay: 0,
  staggerOrder: '',
  state: true,
  replay: true
});
onvisible.add('.buttons.style1', {
  style: 'fade-in',
  speed: 1250,
  intensity: 5,
  delay: 375,
  stagger: 375,
  state: true,
  replay: false
});
onvisible.add('#container03 > .wrapper > .inner', {
  style: 'fade-down',
  speed: 1125,
  intensity: 10,
  delay: 0,
  state: true,
  replay: false
});
onvisible.add('.image.style1', {
  style: 'zoom-in',
  speed: 750,
  intensity: 7,
  delay: 0,
  staggerOrder: '',
  state: true,
  replay: false
})()