let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let spendOn = prompt('Введите обязательную статью расходов в этом месяце');
let spendEmount = prompt( 'Во сколько обойдется?');
let appData = {
    budget : money,
    timeData : time,
    expenses : {
        spendOn : spendEmount,
    },
    optionalExpenses : {},
    income : [],
    savings : false
};
alert(money/30);