/** 
Return the Nth Even Number 
**/

//P.R.E.P

//Parameter - a positive number will be given 

//return to the console

//example - 3 --> 4 (the 3rd even number is 4 (0, 2, 4))

//psuedo code

function nthEven(n){
    //given a value, how do I calculate the nth even number? taking 0 into account

    //5 is given (0, 2, 4, 6, 8) the answer is 8. -

    //so -1 and multiply by 2

    let  number = (n - 1)*2

    return number
}

console.log(nthEven(1))