// 1) Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function biggieSize(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
            arr[x] = "big";
        }
    }
    return arr;
}
console.log( biggieSize( [-1,3,5,-5] ) );

// 2) Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var x = 0; x < arr.length; x++) {
        if ( low > arr[x]) {
            low = arr[x];
        }

        if (high < arr[x]) {
            high = arr[x];
        }

    }
    console.log(low);
    return high;
}
console.log( printLowReturnHigh( [0,1,-30,10,50,-10] ) );

// 3) Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(arr) {
    console.log( arr[ arr.length - 2 ] );
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] % 2 !== 0) {
            return arr[x];
        }
    }
}
console.log( printOneReturnAnother( [0,1,-30,10,50,-10,7] ) );

// 4) Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function doubleVision(arr) {
    var newArray = [];
    for(var x = 0; x < arr.length; x++) {
        newArray.push(arr[x] * 2);
    }
    return newArray;
}
console.log(doubleVision([1,2,3]));

// 5) Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function countPositives(arr) {
    var sumPositives = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
            sumPositives += 1;
        }
    }
    arr[arr.length - 1] = sumPositives;
    return arr;
}
console.log(countPositives([-1,1,1,1]));

// 6) Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evensAndOdds(arr) {
    if (arr.length < 3) {
        return "Array must have at least 3 indices."
    }

    for(var x = 0; x < arr.length; x++) {
        if( arr[x] && arr[x + 1] && arr[x + 2]) {
            if(arr[x] % 2 !==0 && arr[x + 1] % 2 !== 0 && arr[x + 2] %2 !== 0) {
                console.log("That's odd!");
            }

            if(arr[x] % 2 === 0 && arr[x + 1] % 2 === 0 && arr[x + 2] % 2 === 0) {
                console.log("Even more so!");
            }
        }
    }
}
console.log( evensAndOdds( [4,2,7,-3,3,9,2,54,8,8] ) );

// 7) Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementTheSeconds(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (x % 2 !== 0) {
            arr[x]++;
        }
        console.log(arr[x]);
    }
    return arr;
}
console.log( incrementTheSeconds( [4,2,7,-3,3,9,2,8] ) );

// 8) Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function previousLengths(arr) {
    for(var x = arr.length - 1; x > 0; x--) {
        arr[x] = arr[x-1].length
    }
    return arr;
}
console.log( previousLengths( ["hello", "dojo", "awesome"] ) );

// 9) Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addSeven(arr) {
    var newArray = [];
    for(var x = 0; x < arr.length; x++) {
        newArray[x] = arr[x] + 7;
    }
    return newArray;
}
console.log( addSeven( [1,2,3] ) );

// 10) Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(arr) {
    for(var x = 0; x < arr.length / 2; x++) {
        var temp = arr[x];
        arr[x] = arr[arr.length - (1 + x)];
        arr[arr.length - (1 + x)] = temp;
    }
    return arr;
}
console.log( reverseArray( [3,1,6,4,2] ) );

// 11) Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (negative values should remain negative). Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(arr) {
    var newArray = [];
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] > 0) {
            arr[x] = -arr[x];
        }
        newArray.push(arr[x]);
    }
    return newArray;
}
console.log( outlookNegative( [1,-3,5] ) );

// 12) Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
    var food = false;
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] === "food") {
            food = true;
            console.log("yummy");
        }
    }

    if(!food) {
        console.log("I'm hungry");
    }
}
console.log( alwaysHungry( ["poop","caca","food",7,"food"] ) );

// 13) Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
    for(var x = 0; x <= arr.length / 2; x++) {
        if(x % 2 === 0) {
            var temp = arr[x];
            arr[x] = arr[arr.length - (1 + x)];
            arr[arr.length - (1 + x)] = temp;
        }
    }
    console.log(arr);
}
console.log( swapTowardCenter( [1,2,3,4,5,6] ) );
console.log( swapTowardCenter( [true,42,"Ada",2,"pizza"] ) );

// 14) Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleTheArray(arr, num) {
    for(var x = 0; x < arr.length; x++) {
        arr[x] *= num;
    }
    return arr;
}
console.log( scaleTheArray( [1,2,3], 3 ) );
