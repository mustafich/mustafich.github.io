(function () {
  'use strict';

  // var age = 1 ;
  // console.log(typeof age);

  // var name = "Вася"
  // console.log(typeof name);

  // var lesson = true;
  // console.log(typeof lesson);

  // var nameMenuShop = undefined;
  // console.log(typeof nameMenuShop );

  // var nameShopUsers = null;
  // console.log(typeof nameShopUsers);

  // var user = {name:"Вася"};
  // console.log(typeof user);
  // var f;
  // var y = 'a';

  // var x =  500;


  // window.onscroll = function() {
  // if(window.pageYOffset>500){
  //     document.body.style.backgroundColor = 'red';

  // }else {
  //     document.body.style.backgroundColor = '#fff';
  // }
  // console.log(window.pageYOffset);
  // };


  // var prom = prompt("Сколько ворон сидит на дереве","games");
  // var a = "На дереве сидит";
  // var y = "ворон"
  // var p = "ворон!"
  // var b = "ы!";
  // var c = "а!";
  // if (prom == 1) {
  // 	alert(a + " " + prom + ' ' + y + c);
  // } else if (prom == null) {
  // 	alert("Тут отмена не прокатит!Обнови страницу и попробуй еще раз.");
  // } else if (prom == undefined || prom <= 0) {
  // 	alert("Ты че дурак.Как может быть минус вороны");
  // } else if (prom > 1 && prom < 5) {
  // 	alert(a + " " + prom + " " + y + b);
  // } else if (prom > 5 && prom < 21) {
  // 	alert(a + " " + prom + " " + p);
  // } else if (prom == 21) {
  // 	alert (a + " " + prom + " " + y + c)
  // } else if (prom >21 && prom < 25) {
  // 	alert(a + " " + prom + " " + y +b)
  // } else if (prom >24 && prom < 31) {
  // 	alert(a + " " + prom + " " + p);
  // } else if (prom > 30) {
  // 	alert("Столько ворон не поместятся на дереве")
  // } else if (prom == "games") {
  // 	var games = prompt("Ты запустил игру,давай тогда играть!Выбиры категорию для игры 1.Математика 2.Фильмы 3.Игры","Математика")
  // 	 if (games == "Математика") {
  // 		var gamesMat = prompt("Ты выбрал математику Первый вопрос 5+5=","10");
  // 			if (gamesMat == 10) {
  // 				alert("Молодец.Ответ правильный");
  // 			} else if (gamesMat == null) {
  // 				alert(" Ты проиграл");
  // 			} else {
  // 				alert("Неправильно");
  // 			}

  // 	}
  // 	if (games == "Фильмы") {
  // 		var gamesFilm = prompt("Продолжи название фильма Ходячие... ","мертвецы");
  // 		if (gamesFilm == "мертвецы") {
  // 			alert("Правильно")
  // 		} else if (gamesFilm == null) {
  // 				alert(" Ты проиграл");
  // 			} else {
  // 				alert("Неправильно");
  // 			}
  // 	}
  // 	if (games == "Игры") {
  // 		var gamesGame = prompt("Игры. хорошый выбор В какой году вышел кс 1.6","2003");
  // 		if (gamesGame == 2003) {
  // 			alert("Правильно!!!")
  // 		}
  // 		else if (gamesGame == null) {
  // 				alert(" Ты проиграл");
  // 			} else {
  // 				alert("Неправильно");
  // 			}
  // 	}
  // }

  // var x = prompt("Сколько ворон сидит на дереве","0");
  // var a = "На дереве сидит";
  // var y = "ворон"
  // var p = "ворон!"
  // var b = "ы!";
  // var c = "а!";
  //  // console.log(12%100);
  //  // 1= 'a';
  //  // 2,3,4 = 'ы'
  //  // 11,12,13,14
  //  var dot = "";
  //  if(x%100 < 10 || x%100 > 15){
  //  	 switch (x%10) {
  //  	case 1: dot = "a" ; break;
  //  	case 2: dot = "ы" ;break;
  //  	case 3: dot = "ы" ;break;
  //  	case 4: dot = "ы" ;break;
  //  	// case 5: dot = "ы" ;break;


  //  }
  //  }

  // console.log(a + ' ' + x +" " + y+dot)


  // var x = prompt("Сколько денег у кассира в АТБ","");

  // var res = 'гривен';
  // if(x%100 < 11 || x%100 > 14){
  //  if(x%10 > 1 && x%10 < 5 ){
  //  	res = 'гривны';
  //  }
  //  else if(x%10==1){
  //      res = 'гривна';
  //  }else{
  //  	res = 'гривен';
  //  }
  // }

  // // гривны 2 3 4

  // // гривна 1

  // // гривен 5 6 7 8 9 0

  // // гривен 11 12 13 14

  // console.log('У кассира'+" "+x+" "+ res)


  // var x = prompt("Сколько у бабушки котов","");

  // // 1 21 = 'кот';
  // //  // 2,3,4 22  = 'кота'
  // //  // 10 11,12,13,14 16 17 18 19 20  котов

  // // var a = "У бабушки"
  // // var b = "кот";
  // // var v = "кота"
  // // var c = "котов";

  // var c = 'котов';
  // if(x%100 < 10 || x%100 > 20) {
  // 	if(x%10 > 1 && x%10 < 4) {
  // 		c = 'кота';
  // 	}
  // 	else if(x%10 == 1) {
  // 		c = 'кот';
  // 	}
  // 	else {
  // 		c = 'кота';
  // 	}
  // }
  // console.log(x + " " + c);

  // var vop = prompt("Вы хотите узнать в каком подьезде вы живите","да") ;
  // 	if (vop == "да") {
  // 		var kvar = prompt("В какой квартитре вы живете?","");
  // 		if(kvar > 1 && kvar < 20) {
  // 			alert("Вы живете в первом подьезди")
  // 		}
  // 		if(kvar > 21 && kvar < 48) {
  // 			alert("Вы живете во втором подьезди")
  // 		}
  // 		if(kvar > 49 && kvar < 90) {
  // 				alert("Вы живете в третьем подьезди")
  // 		}
  // 		else if (kvar > 90) {
  // 			alert("Вы живете не здесь")
  //
  // 		}
  // 		else if (kvar < 0) {
  // 			alert("Вы живете не здесь")
  //
  // 		}
  //
  // 	}
  // var login = prompt("В ведите свой логин","ivan");
  // if (login == "ivan") {
  // 	var pasvord = prompt("ivan","334455");
  // 	if (pasvord == 334455) {
  // 		alert("ДОбро подалывать!")
  // 	}
  // }
  // if (login == "alex") {
  // 	var pasvord = prompt("alex","777");
  // 	if (pasvord == 777) {
  // 		alert("ДОбро подалывать!")
  // 	}
  // }
  // if (login == "petr") {
  // 	var pasvord = prompt("petr","b5678");
  // 	if (pasvord == b5678) {
  // 		alert("ДОбро подалывать!")
  // 	}
  // }
  // else {
  // 	alert("Вы вели не верно")
  // }
  //
  //
  // var stag = prompt("Какой у вас стаж роботы","");
  // 	if(stag > 0 && stag < 3) {
  // 		alert("Ваша надбавка составляет 0%")
  // 	}
  // 	if(stag > 3 && stag < 10) {
  // 		alert("Ваша надбавка составляет 10%")
  // 	}
  // 	if(stag > 10 && stag < 20) {
  // 		alert("Ваша надбавка составляет 20%")
  // 	}
  // 	if(stag > 25) {
  // 		alert("Ваша надбавка составляет 25%")
  // 	}
  // 	else {
  // 		alert("У вас нету надбавки")
  // 	}


  // var x = prompt('Сколько денег вы хотите вывести?',"");

  // console.log(x.length);
  // var res = '';
  // if(x.length == 1){
  //   res = "вы ввели до 10ти"
  // }
  //
  // else if(x.length == 2){
  //     res = "вы ввели десятки"
  // }
  // else if(x.length == 3){
  //     x=Math.floor(x/100);
  //     if (x == 1) {
  //         res = "Одна сотня";
  //     }
  //     else if (x == 2) {
  //         res = "Две сотни";
  //     }
  //     else if (x == 3) {
  //         res = "Три сотни";
  //     }
  //     else if (x == 4) {
  //         res = "Четыре сотни";
  //     }
  //     else if (x == 5) {
  //         res = "Пять сотни";
  //     }
  //     else if (x == 6) {
  //         res = "Шесть сотни";
  //     }
  //     else if (x == 7) {
  //         res = "Семь сотни";
  //     }
  //     else if (x == 8) {
  //         res = "Восем сотни";
  //     }
  //     else if (x == 9) {
  //         res = "Деветь сотни";
  //     }
  // }
  // else if(x.length == 4){
  //   x=Math.floor(x/1000);
  // if (x == 1) {
  //     res = "Одна тысяча";
  // }
  // else if (x == 2) {
  //     res = "Две тысячи";
  // }
  // else if (x == 3) {
  //     res = "Три тысячи";
  // }
  // else if (x == 4) {
  //     res = "Четыре тысячи";
  // }
  // else if (x == 5) {
  //     res = "Пять тысячи";
  // }
  // else if (x == 6) {
  //     res = "Шесть тысячи";
  // }
  // else if (x == 7) {
  //     res = "Семь тысячи"u
  // }
  // else if (x == 8) {
  //     res = "Восем тысячи";
  // }
  // else if (x == 9) {
  //     res = "Деветь тысячи";
  // }
  // }
  //
  // console.log(res);
  // var x = prompt('Сколько денег вы хотите вывести?',"");
  // var z = "";
  // var m = "";
  // var p = "";
  // var t = "";
  // var g = "";
  // var f = "";
  // z = x;
  // m = x;
  // p = x;
  // g = x;
  //
  // x = x / 1000;
  // x = Math.floor(x);
  // var q = "";
  // var w = "";
  // var d = "";
  // if (x == 1) {
  //      q = "Одна тысяча";
  // }
  // else if (x == 2) {
  //      q = "Две тысячи";
  // }
  // else if (x == 3) {
  //      q = "Три тысячи";
  // }
  // else if (x == 4) {
  //    q = "Четыре тысячи";
  // }
  // else if (x == 5) {
  //      q = "Пять тысяч";
  // }
  // else if (x == 6) {
  //      q = "Шесть тысяч";
  // }
  // else if (x == 7) {
  //     q = "Семь тысяч";
  // }
  // else if (x == 8) {
  //     q = "Восем тысяч";
  // }
  // else if (x == 9) {
  //     q = "Деветь тысяч";
  // }
  //
  //     z = z / 100;
  //     z = z % 10;
  //     z = Math.floor(z);
  //
  //
  //     if (z == 1) {
  //         var w = "сто";
  //
  //     }
  //     else if (z == 2) {
  //         var w = "двести";
  //     }
  //     else if (z == 3) {
  //         var w = "триста";
  //     }
  //     else if (z == 4) {
  //         var w = "четыреста";
  //     }
  //     else if (z == 5) {
  //         var w = "п'ятсот";
  //     }
  //     else if (z == 6) {
  //         var w = "шесот";
  //     }
  //     else if (z == 7) {
  //         var w = "семсот";
  //     }
  //     else if (z == 8) {
  //         var w = "восемсод";
  //     }
  //     else if (z == 9) {
  //         var w = "девятьсот";
  //     }
  //
  // g = g % 10;
  //
  // if (g == 0) {
  //     var d = "десять";
  // }
  // else if (m == 1) {
  //     var d = "одинадцать";
  //
  // }   else if (m == 2) {
  //     var d = "двенадцать";
  //
  // }   else if (m == 3) {
  //     var d = "пятьдесят";
  //
  // }   else if (m == 4) {
  //     var d = "шестьдесят";
  //
  // }   else if (m == 5) {
  //     var d = "семьдесят";
  //
  // }   else if (m == 6) {
  //     var d = "восемдесят";
  //
  // }   else if (m == 7) {
  //     var d = "девяносто";
  //
  //     }   else if (m == 8) {
  //     var d = "девяносто";
  //
  //     }   else if (m == 9) {
  //     var d = "девяносто";
  // }
  //     m = m / 10;
  //     m = m % 10;
  //     m = Math.floor(m);
  //         if (m == 2) {
  //     var d = "двадцать";
  // }
  //    else if (m == 3) {
  //     var d = "тридцать";
  //
  // }   else if (m == 4) {
  //     var d = "сорок";
  //
  // }   else if (m == 5) {
  //     var d = "пятьдесят";
  //
  // }   else if (m == 6) {
  //     var d = "шестьдесят";
  //
  // }   else if (m == 7) {
  //     var d = "семьдесят";
  //
  // }   else if (m == 8) {
  //     var d = "восемдесят";
  //
  // }   else if (m == 9) {
  //     var d = "девяносто";
  // }
  //
  //
  //
  //
  //
  //
  //
  //     p %= 10;
  //     p = Math.floor(p);
  //     if ( p == 1) {
  //         var k = "один доллар";
  //     }else if (p == 2) {
  //         var k = "два долара";
  //     }else if (p == 3) {
  //         var k = "три долора";
  //     }else if (p == 4) {
  //         var k = "четыре доллара";
  //     }else if (p == 5) {
  //         var k = "пять доларов";
  //     }else if (p == 6) {
  //         var k = "шесть долоров";
  //     }else if (p == 7) {
  //         var k = "семь долоров";
  //     }else if (p == 8) {
  //         var k = "восемь долоров";
  //     }else if (p == 9) {
  //         var k = "девять долоров";
  //     }
  // if (p > 5 && p < 9) {
  //         var f = "долоров";
  // }
  //
  //
  //
  //
  //
  //
  // console.log(q + ' ' + w + " " + d + " " + k + " " + f);
  // Первая задача
  // var i = 3;
  //
  // while (i) {
  //     alert( i-- );
  // }
  // Вторая Задача
  // var i = 0;
  // while (++i < 5) console.log(i);
  // var i = 0;
  // while (i++ < 5) console.log(i);
  // 3 задача
  // for (var i = 0; i < 5; i++) console.log(i);
  // for (var i = 0; i < 5; ++i) console.log(i);
  // 4 задача
  // for(var i = 2;i <=10 ;i=i + 2) {
  // console.log(i);
  // }
  // 5 задача
  // for (var i = 0; i < 3; i++) {
  //     alert( "номер " + i + "!" );
  // }
  // var i = 0;
  // while (i < 3) {
  //     alert( "номер " + i + "!" );
  //     i++;
  // }
  // 6 задача
  // var x = prompt("В веди число больше 100","101");
  // for (x ;x > 100;x); {
  //
  // }
  // 7 задача
  // var x = 1;
  // for(var i = 0;x == i / 2;i++ ) {
  //     if (i = 11) {
  //         break;
  //     }
  // console.log(x);
  // }
  // 8 задача
  // var i = 4;
  // for (i;i >= 4;i++ ) {
  //     if (i == 401) {
  //         break;
  //     }
  //     console.log(i);
  // }
  // 9 задача
  // for (var i = 4;i <= 13;i = i +3) {
  //     console.log(i);
  // }
  // 11 задача
  // var x = 654;
  // for(x ;x < 655;x--) {
  //     if (x == 0) {
  //         break;
  //     }
  //     console.log(x);
  // }
  // 12 задача
  // var x = 1983;
  // for (x;x <= 2017;x++) {
  //     console.log(x);
  // }
  // 13 задача
  // var x = -4;
  // for (;x <=100;x = x + 2) {
  // console.log(x);
  // }
  // 14 задача
  // var x = 7;
  // var i = 0;
  // var y = "";
  // for (;true;i++) {
  //     y = x * i;
  //     if (i == 11) {
  //         break;
  //     }
  //     console.log(y);
  // }
  // 15 задача
  // var x = 0;
  // for (var i = 0;true;i++) {
  //     x+=i;
  //     if (i>=100) {
  //         break;
  //     }
  // }
  // console.log(x);

  // var x = 0;
  // for (var i = 0;i <= 100;i++)
  //     x +=i;
  // console.log(x);
  // 16 задача
  // var x = 1;
  // for (var i = 1;i <=50;i++) {
  // x=i*x;
  // }
  // console.log(x);
  // var x = prompt("число","3");
  //
  // for (var i = 0;;i--) {
  // x = x - i;
  // }
  //
  // var x;
  // for (var q = 1;q<=10;q++) {
  //     for (var i = 1; i <= 10; i++) {
  //         x = q * i;
  //         console.log(x);
  //     }
  // }
  // var x = prompt("Число",'5');
  // var y = 0;
  // for(var i = 1;i<=10;i++){
  //     x= i * x;
  //     console.log(x);
  // }


  // console.log(x = x * 5);
  // var star = '';
  // for(var i = 0;i < 5; i++){
  //
  // for(var j = 5; j > 0; j--){
  //
  //     star+='x';
  //
  // }
  // console.log(star);
  //
  // }
})();

//# sourceMappingURL=common.js.map