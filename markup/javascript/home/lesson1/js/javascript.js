/*jshint browser: false, devel: true*/
/*[11:56:05] Rustam Abduvaliiev: Напиши код, де треба буде вводити з клавіатури числа, допоки ти не введеш не число. 
Має повернути відсортований масив, від меншого до більшого, де немає продубльованих значень
[11:56:27] Rustam Abduvaliiev: 3 2 4 5 6 42 2 2 1 має повернути 1 2 3 4 5 6 42*/












































function getUniqueSortedValues() {
    var status = true;
  	var numberArr = [];
  	var enteredValue;
  	var uniqueArr = [];
  	while (status === true) {
      enteredValue = +prompt('enter value');
      if (typeof(enteredValue) == 'number') {
        numberArr.push(enteredValue);
      } else {
        status = false;
      }
    }
  	for (var i = 0; i < numberArr.length; i++) {
      if (numberArr.indexOf(prompt('enter value')) == -1) {
        uniqueArr.push(numberArr[i]);
      }
    }
}
//getUniqueSortedValues();
//        if (b < 0) {
//            b *= -1;
//        }
	/*for (var i = 0; i < b - 1 ; i++) {
 		result = result * a;
	}*/
//function pow() {
//    "use strict";
//	var a = prompt('value 1');
//	var b = prompt('value 2');
//	var result = a;
//    function getNumber(a, b) {
//        if (b < 0) {
//            result = 1 / [result * a];
//            console.log(result);
//        } else {
//            result = result * a;
//        }
//    }
// alert(result);   
//}
//pow();



/*
//Сегодня мне пришла на ум еще одна задачка по JavaScript. Представим, что у нас есть объект полный чисел, строк и прочих данных и нам нужно его превратить в массив состоящий только из чисел.
var obj = {
  person1Age: 20,
  person1Name: "Ivanov",
  person2Age: 30,
  person2Name: "Petrov",
  person3Age: 40,
  person3Name: "Sidorov"
};

var extractedNumber = [];
var keyNumber;
var trueNumber = 5;

for (keyNumber in obj) {
    console.log('keyNumber', keyNumber);
    console.log('obj[keyNumber]', obj[keyNumber]);
    if (typeof obj[keyNumber] == 'number') {
    extractedNumber.push(obj[keyNumber]);
        }
    console.log(extractedNumber);
}
alert(extractedNumber);
*/




























