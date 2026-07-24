№    Вираз                       Моя гіпотеза     Реальний результат       Пояснення
|-----------------------------|---------------|----------------------|----------------------
1    typeof 42                    number               number            42 звичайне число
2    typeof 42n                   biginit              biginit           Число з n має тип BigInt
3    typeof 'hello'               string               string            Строка
4    typeof true                  boolean              boolean           Логiчне значення
5    typeof undefined             undefined            undefined         Змiнна без значення
6    typeof null                  object               object            Помилка JavaScript, null має тип object
7    typeof NaN                   number               number            Належить до типу number
8    typeof Infinity              number               number            Cпеціальне числове значення
9    typeof Symbol('id')          symbol               symbol            Має власний тип symbol
10   typeof {}                    object               object            Звичайний об'єкт має тип object
11   typeof []                    object               object            Масив є різновидом об'єкта
12   typeof [1, 2, 3]             object               object            Масив повертає object
13   typeof function() {}         function             function          Для функцій typeof повертає function
14   typeof (() => {})            function             function          Стрілочна функція теж має тип function
15   typeof (2 + 2)               number               number            Результат додавання - число
16   typeof ('2' + 2)             string               string            Рядок + число = рядок
17   typeof ('foo' - 'bar')       number               number            Оператор - намагається перетворити рядки у числа,виходить NaN,typeof NaN повертає number             
18   let x; typeof x              undefined            undefined         Оголошена змiнна,але не має значення
19   typeof nonExistentVariable   undefined            undefined         typeof безпечно перевіряє змінну і повертає undefined не викликаючи помилку
20   typeof typeof 42             string               string            Перший typeof повертає number, другий typeof визначає тип цього рядка string


# Підозрілі справи

## 1 typeof null

**Чому це виглядає як баг?**

Я очікував отримати тип null, але JavaScript повернув object.
Насправді null не є об'єктом. Це історична помилка JavaScript, яку не виправляють через сумісність зі старим кодом.

**Порада майбутньому собі**

Не використовувати typeof для перевірки null.
Правильно перевіряти value === null

## 2. typeof []

**Чому це виглядає як баг?**

Я очікував отримати array, але JavaScript повернув object.
Масив у JavaScript є спеціальним видом об'єкта.

**Порада майбутньому собі**

Для перевірки масиву потрібно використовувати Array.isArray(value)

## 3. typeof NaN

**Чому це виглядає як баг?**

Назва NaN означає "Not a Number", але typeof повертає number.
Це тому, що NaN є спеціальним значенням числового типу.

**Порада майбутньому собі**

Якщо потрібно перевірити саме NaN, треба використовувати Number.isNaN(value)

## 4. typeof nonExistentVariable

**Чому це виглядає як баг?**

Я очікував побачити помилку, тому що змінної не існує.
Але typeof спеціально не викликає помилку і повертає undefined.

**Порада майбутньому собі**

typeof можна використовувати для безпечної перевірки існування змінної typeof myVariable !== "undefined"



