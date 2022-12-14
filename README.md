
![2022-10-03_00-46-53](https://user-images.githubusercontent.com/61179322/193477798-cc8b498e-8349-479e-9658-e41e1bf6998e.png)
![2022-10-03_00-47-19](https://user-images.githubusercontent.com/61179322/193477799-29e0042a-2271-4af9-abb9-93bad0b90b72.png)
![2022-10-03_00-47-47](https://user-images.githubusercontent.com/61179322/193477801-8c01258f-7b48-4bd0-ba86-74a5de28905a.png)



deploy: https://idf-technology.vercel.app/



Условия следующие:

++ 1. Шапка и футер должны быть высотой не более 200px, содержать векторное лого и быть “приклеены” к верху и низу страницы соответственно. 

++ 2. Под шапкой должны находится хлебные крошки, показывающие текущий этап прохождения регистрации (SignUpInfo / PersonalInfo).

++ 3. На элементах форм необходимо использовать controlled и uncontrolled компоненты.

++ 4. Переход на следующий шаг должен быть после валидации, которая хранится в JSON Schema (см. ниже, это stub на предполагаемый ответ сервера при инициализации приложения).

++ 5. Приложение должно работать при изменении JSON Schema (см. ниже).

++ 6. После заполнения анкеты отобразить модальное окно с заполненной информацией.

Содержание SignUpInfo:
++ Mobile phone (маскированный инпут)
++ Email (email инпут)
++ Password (инпут пароль)
++ Repeat Password (должно совпадать с Password)
++ Next (кнопка для валидации и перехода на следующий этап)

Содержание PersonalInfo:
++ First Name (текстовый инпут)
++ Last Name (текстовый инпут)
++ Sex (радиогруппа)
++ Birthday (3 инпут формата DD MM YYYY)
++ Your Favorite Ocean (селект, элементы приходят в JSON SCHEMA)
++ Hobby (группа чекбоксов с возможностью выбора нескольких элементов, элементы приходят в JSON SCHEMA)
++ Change SignUp Information (кнопка, позволяющая изменить данные с первого шага)
++ Complete (кнопка завершения регистрации, по нажатию на которую показывается модальное окно с заполненной анкетой)
