function randomNumber() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function newIdTag() {
  const random4Digits = Math.floor(Math.random() * 5000);
  const padded = random4Digits.toString().padStart(4, '0');
  console.log(padded);
  return `${randomNumber()}${randomNumber()}${padded}`;
}

export { newIdTag };
