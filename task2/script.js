const objToJSON = {
    name: 'Anton', 
    age: 36, 
    skills: ['Javascript', 'HTML', 'CSS'],
    salary: 80000};

console.log (JSON.stringify(objToJSON));

/* Задание
Дан образец JSON-строки:

{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}

Ваша задача — создать JS-объект, который при преобразовании в JSON будет возвращать в качестве результата такую же JSON-строку, как в образце. Получившуюся строку вывести в консоль. */