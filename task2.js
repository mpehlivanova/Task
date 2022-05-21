let arr1 = [11, 14, 10, 12]
let arr2 = [12, 9, 1, 5, 11, 5];
let arr3 = [76, 80];
let arr4 = [76, 80, 81, 77, 83, 78, 80];

function sumMax(array) {
  if (array.length > 2) {
    if (array.length % 2 == 0) {
      let maxSum = 0;
      let num1;
      let num2;
      let num3;

      for (let i = 1; i < array.length - 1; i++) {
        let el1 = array[i - 1];
        let el2 = array[i];
        let el3 = array[i + 1];
        let sum = el1 + el2 + el3;

        if (sum > maxSum) {
          maxSum = sum;
          num1 = el1;
          num2 = el2;
          num3 = el3;
        }
      }
      let arrMax = [num1, num2, num3];
      return " sum: " + maxSum + ";   sequence: " + arrMax;
    } else {
      let maxSum = 0;
      let number1;
      let number2;
      let number3;

      for (let i = 1; i < array.length - 1; i++) {
        number1 = array[i - 1];
        number2 = array[i];
        number3 = array[i + 1];

        let sum = number1 + number2 + number3;

        if (sum > maxSum) {
          maxSum = sum;
          number1 = array[i - 1];
          number2 = array[i];
          number3 = array[i + 1];
        }
      }
      let arrMax = [number1, number2, number3];
      return " sum: " + maxSum + ";   sequence: " + arrMax;
    }
  } else {
    return "err";
  }
}


console.log(sumMax(arr1));
console.log(sumMax(arr2));
console.log(sumMax(arr3));
console.log(sumMax(arr4));

