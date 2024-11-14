// 1. Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше,
// чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

const comparisonFunc = (num1, num2) => {
  if (num1 > num2) {
    return 1;
  }
  if (num1 < num2) {
    return -1;
  }
  return 0;
};

const result = comparisonFunc(1, 2);

console.log("result ", result);

const result2 = comparisonFunc(4, 2);

console.log("result ", result2);

const result3 = comparisonFunc(2, 2);

console.log("result ", result3);

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
const factorialFunc = (num) => {
  let result = 1;
  for (let i = 2; i < num + 1; i++) {
    result *= i;
  }
  return result;
};

const result4 = factorialFunc(5);

console.log("result ", result4);

// 3. Написать функцию, которая принимает три отдельные цифры и
// превращает их в одно число. Например:
// цифры 1, 4, 9 превратятся в число 149.

const numberMergeFunc = (num1, num2, num3) => {
  return num1 * 100 + num2 * 10 + num3;
};

const result5 = numberMergeFunc(5, 4, 1);

console.log("result ", result5);

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

const areaOfRectangleFunc = (length, ...width) => {
  if (width.length == 0) {
    return length ** 2;
  }
  if (width.length == 1) {
    return length * width;
  }
  return null;
};

const result6 = areaOfRectangleFunc(5);

console.log("result ", result6);

const result7 = areaOfRectangleFunc(5, 6);

console.log("result ", result7);
// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число,
// равное сумме всех своих собственных делителей.

const isNumberPerfect = (num) => {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      sum = i + sum;
    }
  }
  if (sum == num) {
    return true;
  }
  return false;
};

console.log("is 6 a perfect number", isNumberPerfect(20));

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
// и выводит только те числа из диапазона,
// которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

const perfectNumbers = (minNum, maxNum) => {
  const perfectNumArr = [];
  for (let i = minNum; i < maxNum + 1; i++) {
    if (isNumberPerfect(i)) {
      perfectNumArr.push(i);
    }
  }
  return perfectNumArr;
};

console.log(perfectNumbers(1, 1000));

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и
// выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

const showTime = (hours, minutes, seconds) => {
  return hours + ":" + minutes + ":" + seconds;
};

console.log(showTime(12, 30, 25));

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

const parsSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};

console.log(parsSeconds(1, 2, 5));

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы,
// минуты и секунды и возвращает в виде строки «чч:мм:сс».

const SecondsToTimeForm = (seconds) => {
  return (
    parseInt(seconds / 3600) +
    ":" +
    parseInt((seconds % 3600) / 60) +
    ":" +
    parseInt(seconds % 60)
  );
};

console.log(SecondsToTimeForm(20000));

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров,
// которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
// При выполнении задания используйте функции из предыдущих 2-х заданий:
// сначала обе даты переведите в секунды, узнайте разницу в секундах,
// а потом разницу переведите обратно в «чч:мм:сс».

const diffBetweenNumbers = (
  hours1,
  minutes1,
  seconds1,
  hours2,
  minutes2,
  seconds2
) => {
  const resSeconds1 = parsSeconds(hours1, minutes1, seconds1);
  const resSeconds2 = parsSeconds(hours2, minutes2, seconds2);
  let finalSeconds;
  if (resSeconds1 > resSeconds2) {
    finalSeconds = resSeconds1 - resSeconds2;
  } else {
    finalSeconds = resSeconds2 - resSeconds1;
  }
  return SecondsToTimeForm(finalSeconds);
};

console.log(diffBetweenNumbers(12, 30, 60, 20, 60, 10));
