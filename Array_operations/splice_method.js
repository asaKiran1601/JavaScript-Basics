//  By using splice() method we can able to add and remove the elements at a same time

let arr = [1,2,3,4,5]

//syntax for splice() = array.splice(startIndex, deleteCount, item1, item2, ...);

// removing 2 elements from index 1
// arr.splice(1,2);

// removing and adding elements from index 1
arr.splice(1,2,'a','b');
console.log(arr)
