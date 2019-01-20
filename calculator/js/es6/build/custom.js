(function () {
'use strict';

var startBtn = document.getElementById("start");
var budgetValue = document.getElementsByClassName("budget-value")[0];
var dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
var expensesValue = document.getElementsByClassName("expenses-value")[0];
var levelValue = document.getElementsByClassName("level-value")[0];
var optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0];
var incomeValue = document.getElementsByClassName("income-value")[0];
var monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0];
var yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

var expensesItem = document.getElementsByClassName("expenses-item");
var expensesBtn = document.getElementsByTagName("button")[0];
var optionalExpensesBtn = document.getElementsByClassName("optionalexpenses-btn")[0];
var countBtn = document.getElementsByTagName("button")[2];
var optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
var incomeItem = document.querySelector(".choose-income");
var checkSavings = document.querySelector("#savings");
var sumValue = document.querySelector(".choose-sum");
var percentValue = document.querySelector(".choose-percent");
var yearValue = document.querySelector(".year-value");
var monthValue = document.querySelector(".month-value");
var dayValue = document.querySelector(".day-value");


startBtn.addEventListener("click", function () {
    time = prompt("YYYY-MM-DD", "2019-01-24");
    money = +prompt("Ваш бюджет на месяц?", "1000");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "1000");
    }
    appDate.budget = money;
    appDate.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
expensesBtn.addEventListener("click", function () {
    var sum = 0;

    for (var i = 0; i < expensesItem.length; i++) {

        var a = expensesItem[i].value;
        var b = expensesItem[++i].value;
        console.log(i);
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) && !null
            && a != "" && b != "" && a.length <= 50) {
            appDate.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});


optionalExpensesBtn.addEventListener("click", function () {
    for (var i = 0; i < optionalExpensesItem.length; i++) {
        var opt = optionalExpensesItem[i].value;
        appDate.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + " ";

    }
});
countBtn.addEventListener("click", function () {
    if (appDate.budget != undefined) {
        appDate.moneyPerDay = (appDate.budget / 30).toFixed();
        dayBudgetValue.textContent = appDate.moneyPerDay;

        if (appDate.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень";
        } else if (appDate.moneyPerDay > 100 && appDate.manyPerDay < 2000) {
            levelValue.textContent = "Средний уровень";
        } else if (appDate.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else (
        dayBudgetValue.textContent = "Сначло нажмите кнопку -Начать расчет-"
    );
});

incomeItem.addEventListener("input", function () {
    var items = incomeItem.value;
    appDate.income = items.split(", ");
    incomeValue.textContent = appDate.income;

});

checkSavings.addEventListener("input", function () {
    if (appDate.savings == true) {
        appDate.savings = false;
    } else (
        appDate.savings = true
    );
});
sumValue.addEventListener("input", function () {
    if (appDate.savings == true) {
        var sum = +sumValue.value;
        var percent = +percentValue.value;
        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }

});
percentValue.addEventListener("input", function () {
    if (appDate.savings == true) {
        var sum = +sumValue.value;
        var percent = +percentValue.value;
        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;
        monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }

});


var money, time;


var appDate = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

}());

//# sourceMappingURL=custom.js.map
