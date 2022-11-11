// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

function writeCards(people, eventType) {
    const cards= [];
    let message; 
    for (let i = 0; i < people.length; i++) {
        message = `Thank you, ${people[i]}, for the wonderful ${eventType} gift!`;
    }
    cards.push(message);
}

function countDown(num) {
    let n = Math.abs(num);

    while (n >= 0) {
        console.log(n);
        n--;
    }

}

