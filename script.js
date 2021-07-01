// Keyboard Key codes
// https://www.oreilly.com/library/view/javascript-dhtml/9780596514082/apb.html

let beats = {
  //   65
  a: {
    beat: new Beat('./assets/Piano Chord 331.mp3'),
    button: new Button('#00fffe', a),
  },
  //   83
  s: {
    beat: new Beat('./assets/Piano Chord 209.mp3'),
    button: new Button('#00fffe', s),
  },
  //   68
  d: {
    beat: new Beat('./assets/Piano Chord 208.mp3'),
    button: new Button('#00fffe', d),
  },
  //   70
  f: {
    beat: new Beat('./assets/Drum Sticks Hit 3.mp3'),
    button: new Button('#FF00FF', f),
  },
  //   71
  g: {
    beat: new Beat('./assets/Drum Snare Roll.mp3'),
    button: new Button('#FF00FF', g),
  },
  //   72
  h: {
    beat: new Beat('./assets/PREL Musical 57.mp3'),
    button: new Button('#FF00FF', h),
  },
  //   74
  j: {
    beat: new Beat('./assets/Cymbal Suspended 2.mp3'),
    button: new Button('#FF00FF', j),
  },
  //   75
  k: {
    beat: new Beat('./assets/Musical Compos 33.mp3'),
    button: new Button('#FFFFFF', k),
  },
  //   76
  l: {
    beat: new Beat('./assets/Musical Orches 4.mp3'),
    button: new Button('#FFFFFF', l),
  },
};

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
  let keyPressed = event;
  if (keyPressed in beats) {
    // console.log(keyPressed);
    let keyPress = beats[event];
    keyPress.beat.play();
    keyPress.button.select();
  }
};

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */
const gridContainer = document.querySelector('.beatbox');

document.addEventListener('keydown', (event) => {
  // console.log(event);
  // console.log(event.key);
  triggerBeat(event.key);
});

gridContainer.addEventListener('click', (event) => {
  // console.log(event);
  // console.log(event.srcElement.innerText);
  let valueofBeat = event.srcElement.innerText;
  triggerBeat(valueofBeat.toLowerCase());
});
