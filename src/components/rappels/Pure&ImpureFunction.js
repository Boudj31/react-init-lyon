// FONCTION PURE

const multiply = (arg1, arg2) =>  {
    return arg1 * arg2
}

multiply(2, 3) // 6
multiply(2, 3) // 6
multiply(2, 3) // 6
multiply(2, 3) // 6
multiply(2, 3) // 6
multiply(2, 3) // 6
multiply(2, 3) // 6
multiply(2, 3) // 6


// FONCTION IMPURE
let arg3 = 10;

const multiply2 = (arg1, arg2) =>  {
    return arg1 * arg2 + arg3
}

multiply2(2,3) // 16
multiply2(2,3) // 16

let arg3 = 10;
const multiply3 = (arg1, arg2) =>  {
    arg3 = arg1 + arg2;

    return arg1 * arg2
}
multiply3(2,3) // 6
multiply3(2,3) // 6
multiply3(2,3) // 6
multiply3(2,3) // 6