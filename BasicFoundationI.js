// 1) Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function calculate1to255() {
    var get1to255 = [];
    for (var x = 1; x <= 255; x++) {
        get1to255.push(x);
    }
    return get1to255;
}
console.log(calculate1to255());

// 2) Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function geteven1000() {
    var sum = 0;
    for (var x = 1; x <= 1000; x++) {
        if (x % 2 === 0) {
            sum += x;
        }
    }
    return sum;
}
console.log(geteven1000());

// 3) Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sumOdd5000() {
    var sum = 0;
    for (var x = 1; x <=5000; x++) {
        if (x % 2 !== 0) {
            sum += x;
        }
    }
    return sum;
}
console.log(sumOdd5000());

// 4) Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArray(arr) {
    var sum = 0;
    for (var x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    return sum;
}
console.log(sumArray([-5,2,5,12]));

// 5) Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr) {
    var max = arr[0];
    for (var x = 1; x < arr.length; x++) {
        if (max < arr[x]) {
            max = arr[x];
        }
    }
    return max;
}
console.log(findMax([-3,3,5,7]));

// 6) Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(arr) {
    var sum = 0;
    for (var x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    return (sum / arr.length);
}
console.log(findAvg([1,3,5,7,20]));

// 7) Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arrayOdd() {
    var onlyOdds = [];
    for (var x = 0; x < 50; x++) {
        if (x % 2 !== 0) {
            onlyOdds.push(x);
        }
    }
    return onlyOdds;
}
console.log(arrayOdd());

// 8) Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterThanY(arr, y) {
    var sum = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > y) {
            sum ++;
        }
    }
    return sum;
}
console.log(greaterThanY([1, 3, 5, 7] , 3));

// 9) Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squares(arr) {
    for (var x = 0; x < arr.length; x++) {
        arr[x] *= arr[x];
    }
    return arr;
}
console.log(squares([1,5,10,-2] ));

// 10) Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function noNegatives(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            arr[x] = 0;
        }
    }
    return arr;
}
console.log(noNegatives([1,5,10,-2]));

// 11) Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr) {
    var newArr = [];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var x = 0 ; x < arr.length; x++) {
        sum += arr[x];

        if (max < arr[x]) {
            max = arr[x];
        }

        if (min > arr[0]) {
            min = arr[0];
        }
    }
    newArr.push(max, min, (sum / arr.length));
    return newArr;
}
console.log(maxMinAvg([1,5,10,-2]));

// 12) Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValues(arr) {
    if (arr.length < 2) {
        return " The default minimum length of the array is 2.";
    }

    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}
console.log( swapValues( [1,5,10,-2] ) );

// 13) Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToString(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            arr[x] = "Dojo";
        }
    }
    return arr;
}
console.log( numToString( [-1,-3,2] ) );
