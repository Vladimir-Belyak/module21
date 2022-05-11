let randomNumber;
// Функция выполнения promise
function usePromise() {
    // Создаем promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            randomNumber = Math.floor(Math.random() * 100);
            if (randomNumber % 2 === 0) {
                resolve(randomNumber);
            } else {
                reject(randomNumber);
            }
        }, 3000);
    });

    // Выполняем promise
    myPromise
        .then((result) => {
            console.log('Завершено успешно. Сгенерированное число — ', result);
        })
        .catch((error) => {
            console.log('Завершено с ошибкой. Сгенерированное число — ', error);
        })
};

usePromise();

/* Задание 
Создать Promise, в котором c задержкой в три секунды сгенерировать случайное целое число от 1 до 100. Для создания задержки использовать setTimeout.
Если сгенерированное число четное — Promise выполнится успешно (resolve), если нечетное — выполнится с ошибкой (reject).
После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:
«Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
«Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число */