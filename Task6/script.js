const btn = document.querySelector('.j-btn');
const pageStart = document.querySelector('.input__page__start')
const pageEnd = document.querySelector('.input__page__end')
const fieldResult = document.querySelector('.show__result');

// Считывание и отображение данных из хранилища, если есть
let oldSaveData = JSON.parse(localStorage.getItem('oldSaveData'));
if (oldSaveData) {
    showTask(oldSaveData);
}

// Функция для вывода списка
function showTask(arrayTask) {
    fieldResult.innerHTML = "";
    let addLi = document.createElement('ol');
    fieldResult.appendChild(addLi);
    arrayTask.forEach(element => {
        let listItem = document.createElement('li');
        listItem.textContent = element.author;
        addLi.appendChild(listItem);
        div = document.createElement("div");
        listItem.appendChild(div);
        img = document.createElement("IMG");
        img.height = element.height * 0.25;       // Уменьшил для наглядности
        img.width = element.width * 0.25;
        img.src = element.download_url;
        div.appendChild(img);
    });
}

// Функция проверки диапазона
function checkRange() {
    if (pageStart.value < 1 || pageStart.value > 10 || !typeof parseInt(pageStart) === 'number') {
        if (pageEnd.value < 1 || pageEnd.value > 10 || !typeof parseInt(pageStart) === 'number') {
            return ("Номер страницы и лимит вне диапазона от 1 до 10");
        } else { return ("Номер страницы вне диапазона от 1 до 10"); }
    } else {
        if (pageEnd.value < 1 || pageEnd.value > 10 || !typeof parseInt(pageStart) === 'number') {
            return ("Лимит вне диапазона от 1 до 10");
        } else { return (""); }
    }
}

// Функция, которая возвращает fetch
const useRequest = () => {
    return fetch('https://picsum.photos/v2/list?page=' + parseInt(pageStart.value) + '&limit=' + parseInt(pageEnd.value))
        .then((response) => {
            return response.json();
        })
        .catch(() => { console.log('error') });
}

btn.addEventListener('click', async () => {
    let rezultCheck = checkRange();
    if (rezultCheck.length == 0) {
        const requestResult = await useRequest();
        localStorage.setItem("oldSaveData", JSON.stringify(requestResult));
        showTask(requestResult);
    } else { alert(rezultCheck); }
});

/* Задание 6.

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:
Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводится ниже текст «Номер страницы вне диапазона от 1 до 10».
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводится ниже текст «Лимит вне диапазона от 1 до 10».
Если и первый, и второй input не в диапазонах или не являются числами — выводится ниже текст «Номер страницы и лимит вне диапазона от 1 до 10».
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.
Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage). */