

//project 1 
//'Recursion' project

//Iterative Fibonacci

function fib(n) {
    if(n == 0)
        return "You have entered 0?!";
    else if(n == 1) 
       return [0];
    else if(n == 2)
        return [0, 1];
    else if(n > 2){
        let a = 0, b = 1;
        let array = [0, 1];
        for (let index = 2; index < n; index++) {

            b = a + b;
            array.push(b);
            a = b - a;
            
        }
        return array;
    }
    else
        return "Not a valid number,, try again, bitch!";
}

console.log(fib(10));


//Recursive Fibonacci

function fibsRec(n, a, b, array) {
    if(n == 0)
        return "You have entered 0?!";
    else if(n == 1) 
        return [0];
    else if(n < 0)
        return "Still dont understand this,, bitch!!";

    if(n == 2)
        return array;
    else {
        b = a + b;
        array.push(b)
        a = b - a;
        n--;
        return fibsRec(n, a, b, array);
    }   
} 

console.log(fibsRec(10, 0, 1, [0, 1]));


//MergeSort

function mergeSortRec(arr) {
    if(arr.length == 0) 
        return "An empty array? Really?";
    else if(arr.length == 1)
        return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    return merge(mergeSortRec(left), mergeSortRec(right));
}

function merge(leftArr, rightArr) {
    const result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {

        if(leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    //for if above loop condition exceeds only for one array
    //then that means that one array has still leftover elements
    //so only one of the two loops below will execute
    while(leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while(rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
}

console.log(mergeSortRec([10, 7, 8, 8, 29,67, 66, 11, 32, 54, 9, 1, 5])); // [1, 5, 7, 8, 8, 9, 10, 11, 29, 32, 54, 66, 67]

