// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`;

//Получение данных 

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const obj = {list: []};


// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");   //Фрагментируем одиноковые блоки в массив

// Разбираем по очереди блоки и пушим в массив родительского объекта
studentNode.forEach((element) => {
  let tempObj = {};
  let nameNode = element.querySelector("name");
  let langAttr = nameNode.getAttribute('lang');
  tempObj.name = element.querySelector("second").textContent + " " + element.querySelector("first").textContent;
  tempObj.age = element.querySelector("age").textContent;
  tempObj.prof = element.querySelector("prof").textContent;
  tempObj.lang = langAttr;
  obj.list.push(tempObj);
});

// Вывод результата в консоль
console.log(obj);

/* Задание
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
*/