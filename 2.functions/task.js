// Задание 1
function getArrayParams(arr)  {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
   }
   let avg = sum / arr.length;
   avg = +avg.toFixed(2);
  // Ваш код
  return { min: min, max: max, avg: avg };
}
// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // Ваш код
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let nozzle = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    nozzle = func(arrOfArr[i]);
    if (nozzle > max) {
        max = nozzle;
    }
  }
  // Ваш кода
  // for ...
  return max;
}

// Задание 3
function worker2(arr) {

  // Ваш код
}
