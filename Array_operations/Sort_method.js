let arr = [23,67,859,6,9,654,43,3]

let newArray= arr.sort()
console.log(newArray);

// this sort is according to the 1st number because the output will be in the form of string.

// To sort numeric values correctly, you can provide a compare function:

let arr1 = [23,67,859,6,9,654,43,3]

let newArray1= arr1.sort(
    function(a,b){
        return a-b;
    }
)
console.log(arr1);

// If the compare function returns a negative value, a comes before b.
// If the compare function returns a positive value, a comes after b.
// If the compare function returns 0, the order of a and b remains unchanged.