let bigHand = document.getElementById('big-hand');
let secondHand = document.getElementById('second-hand');
let smallHand = document.getElementById('small-hand');

setInterval(() => {
  const date = new Date();
  const [hour, minute, second] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  const secondDeg = second * 6;
  const minuteDeg = (minute + second / 60) * 6;
  const hourDeg = (hour + minute / 60) * 15;
  setTransform(bigHand, secondDeg);
  setTransform(secondHand, minuteDeg);
  setTransform(smallHand, hourDeg);
}, 1000);

function setTransform(element, value) {
  element.style.transform = `rotate(${value - 90}deg)`;
}
