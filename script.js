'use strict';
var money = prompt("Ваш бюджет на месяц?","0");
var time= prompt("Введите дату в формате YYYY-MM-DD","2019-03-04");

var appData = {
    budget: money,
    timeData: time,
    expenses: prompt("Введите обязательную статью расходов в этом месяце","еда") + " : " + 
                 prompt("Во сколько обойдется?","100"),
       // “ответ на первый вопрос” : “ответ на второй вопрос”
        
    //optionalExpenses: prompt("объект с необязательными расходами","еда"),
    //income: prompt("объект с обязательными расходами","еда"),
    savings: false
}
//appData.expenses.subExp = prompt("Введите обязательную статью расходов в этом месяце","еда");
//appData.expenses.subCost = prompt("Во сколько обойдется?","100");
alert(appData.budget/30);
//alert(appData.expenses);

