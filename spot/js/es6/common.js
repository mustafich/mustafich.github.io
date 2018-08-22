"use strict";
// function my_function(n) {
//     // Тут нужно написать решение
//     for (var i = 0;i <= n;i++) {
//         document.write(i + " ");
//     }
// }
// my_function(7);

// function my_function(n) {
//     // Тут нужно написать решение
// var t = "";
//     if (n == 0) {
//         return "";
//     }
//     t = my_function(n - 1) + n + " ";
//     return t;
//
// }
// console.log(my_function(5));
//
// function my_function(n) {
//     return n<2 ? "1" : my_function(n-1)+" "+n;
// }


var res="";


function recurs(i,k){

    res= res + " " +i;
    i++;
    if (i>k)
    {
        return res;
    }
    return recurs(i,k);
}

function my_function(n) {
    return recurs(1,n);
}
my_function(5);
console.log(res);