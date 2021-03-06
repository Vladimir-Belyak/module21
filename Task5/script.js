const btn = document.querySelector('.j-btn');
const fieldInput = document.querySelector('.field__input')
const fieldResult = document.querySelector('.show__result');

// Функция для вывода списка
function showTask(arrayTask) {
    if (arrayTask.length == 0)
        alert("Пользователь с указанным id не найден");
    else {
        fieldResult.innerHTML = "";
        let addLi = document.createElement('ol');
        fieldResult.appendChild(addLi);
        arrayTask.forEach(element => {
            let listItem = document.createElement('li');
            if (element.completed) {
                listItem.innerHTML = element.title.strike();
            } else
                listItem.innerHTML = element.title;
            addLi.appendChild(listItem);
        });
    }
}

// Функция, которая возвращает fetch
const useRequest = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + parseInt(fieldInput.value) + '/todos')       // Проверку на ввод не делал, в ТЗ нет ;)
        .then((response) => {
            return response.json();
        })
        .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
    const requestResult = await useRequest();
    showTask(requestResult);
});

/* Задание 5.
Написать код приложения, интерфейс которого состоит из поля ввода и кнопки «Получить список задач».
При нажатии на кнопку нужно отправить запрос с помощью fetch на URL https://jsonplaceholder.typicode.com/users/3/todos.
Число 3 представляет собой id пользователя, вместо него нужно подставить число, введенное в поле. Если пользователь с таким id существует,
вернется список задач для этого пользователя, каждая задача представлена объектом вида:

{
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
}
Где title — описание задачи, а completed — флаг, отображающий, выполнена задача или нет.
Вывести данный список на страницу, оформив соответствующим образом: в виде списка (ul или ol),
выполненные задачи должны быть написаны зачеркнутым текстом. Если пользователь с введенным id не существует, вывести сообщение:
«Пользователь с указанным id не найден». */