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
  const secondDeg = second * 6 - 90;
  const minuteDeg = (minute + second / 60) * 6 - 90;
  const hourDeg = (hour + minute / 60) * 15 - 90;
  bigHand.style.transform = `rotate(${secondDeg}deg)`;
  secondHand.style.transform = `rotate(${minuteDeg}deg)`;
  smallHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
