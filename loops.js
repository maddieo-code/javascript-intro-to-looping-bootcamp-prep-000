function forLoop(arr) {
  for (var i = 0; i < 25; i++) {
    if (i = 1) {
      arr[1] = "I am 1 strange loop.";
    } else {
      arr[i] = `I am ${i} strange loops.`;
    }
  }
  return arr;
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(arr) {
  do {
    arr.shift();
  } while (arr.length > 0 || maybeTrue());
  return arr;
}
