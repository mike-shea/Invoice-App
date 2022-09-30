import { ItemCounterType } from './types';

function randomNumber() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function amountDue(items: ItemCounterType[]) {
  return items.reduce(
    (sum, current) => {
      const itemAmount = parseInt(current.price) * parseInt(current.quantity);
      sum.total = sum.total + itemAmount;
      return sum;
    },
    { total: 0 }
  );
}

function visualCurrency(amount: string) {
  return Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD'
  }).format(parseInt(amount) / 100);
}

function newIdTag() {
  const random4Digits = Math.floor(Math.random() * 5000);
  const padded = random4Digits.toString().padStart(4, '0');
  console.log(padded);
  return `${randomNumber()}${randomNumber()}${padded}`;
}
export { newIdTag, visualCurrency, amountDue };
