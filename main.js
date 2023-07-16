

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