export default function algoritmLuna(cardNumber) {
  const numberCard = cardNumber.toString();
  const arr = [];
  for (let i = 0; i < numberCard.length; i += 1) {
    if (i % 2 === 0) {
      const m = parseInt(numberCard[i], 10) * 2;
      if (m > 9) {
        arr.push(m - 9);
      } else {
        arr.push(m);
      }
    } else {
      const n = parseInt(numberCard[i], 10);
      arr.push(n);
    }
  }
  const summ = arr.reduce((a, b) => a + b);
  return Boolean(!(summ % 10));
}
