"use strict";


// function tree ( simbol , treeHeight) {
//     var x = "";
//     var space = "";
//
//     for (var i = 0; i < treeHeight; i++) {
//         for (var j = treeHeight; j > i; j--) {
//             space += " ";
//         }
//         (i == 0)? x = x + simbol:x = x + simbol + simbol;
//         console.log(space + x);
//         space = "";
//     }
//
// }
//
// tree( "+" , 12);


// f(10,12);

// var styles = ["Джас","Блюз"];
// styles[styles.length] = "Рок-н-Ролл";
// styles[styles.length - 2] = "Классика";
// alert (styles.shift() );
// styles.unshift("рэп","пнгии");
// console.log(styles);


// var number = [];
//
// while (true) {
//     var x = prompt("В ведиче чсила", "5");
//     if (x === "" || x === null || isNaN(x) ) break;
//     number.push(+x);
// }
// var sum = 0;
// for (var i = 0;i < number.length;i++) {
//     sum = sum + number[i];
// }
// alert(sum);


//
// function pow(a ,b ) {
//     var x = prompt("В ведите первое значение");
//     var y = prompt("В ведите второе значение");
//     x=a;
//     y=b;
//     var p=a;
//
//     for (var i= 1;i < b;i++) {
//  p = p * a;
//
//     }
//     console.log(p);
// }
//
// pow(5,3);


//    var number = [];
//
//    while (true) {
//        var value = prompt("В видите число","5");
// if (value === "" || value === null || isNaN(value) )break;
// number.push(+value);
//    }
//    var sum = 0;
//    for (var i = 0;i<number.length;i++) {
//        sum = sum + number[i];
//    }
//    alert(sum);

var m = {
    "mars" : [2,1,1]
};
var x = 0;
for (var i = 0;i < 3;i++) {

    x = x + m.mars[i];
}
console.log(x);