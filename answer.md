№            Сцена                        |   Що вивелося       |      Хто винен      |    Як уникнути
-----------------------------------------------------------
1    let name; console.log(name);            undefined               JavaScript         присвоїти змінній значення
2    let name = null; console.log(name);     null                    Розробник          Якщо значення відоме — записати його, якщо ні — null використовувати свідомо
3    greet();                                Hello, undefined        JavaScript         Передавати аргумент під час виклику функції
4    return a + b;                           5                       Ніхто              Працює правильно
5    немає return                            undefined               Розробник          Повернути результат через return
6    return;                                 undefined               Розробник          Повернути потрібне значення замість порожнього return
7    user.age                                undefined               JavaScript         Додати age або перевірити її існування
8    user.middleName                         null                    Розробник          null використовується свідомо
9    arr[10]                                 undefined               JavaScipt          Звертатися лише до існуючих індексів масиву
10   user.address.street                     undefined               Розробник          Додати властивість street