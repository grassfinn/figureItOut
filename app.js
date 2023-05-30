function startTimer(seconds) {
  function countDown() {
    if (seconds != 0) {
      console.log(seconds);
      return seconds--;
    }
    console.log(seconds, ' timer ended');
    clearInterval(timer);
    return;
  }
  const timer = setInterval(countDown, 100);
}

// startTimer(30);

class Category {
  constructor(title, images = []) {
    this.title = title;
    this.images = images;
  }
  pickRandom() {
    const randomItem = Math.floor(Math.random() * this.images.length - 1) + 1
    return this.images[randomItem]
}
}

const pee = new Category('peep', [2,4,6,8])

console.log(pee.pickRandom())
