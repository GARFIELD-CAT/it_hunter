# it_hunter
### Описание
Проект it_hunter позволяет искать вакансии для работы.
### Технологии
- Python 3.9
- Django 3.2.6
- django rest framework 3.12.4
- Postgresql 12.4
- Gunicorn 20.0.4
### Запуск проекта локально
- Склонируйте репозиторий ```git clone https://github.com/GARFIELD-CAT/it_hunter.git```
- Перейдите в папку проекта it_hunter
- Перейдите в папку backend
- Разверните venv окружение ```py -3.9 -m venv venv```
- Активировать venv окружение ```.\venv\Scripts\activate.bat```
    - Если используется PowerShell ```.\venv\Scripts\Activate.ps1```
- Установить poetry ```pip install poetry```
- Установить зависимости ```poetry install```
- Создайте файл .env с данными переменных окружения на основе шаблона template.env. Сейчас достаточно просто убрать "template"
- Запустите docker контейнер ```docker-compose up``` для разворачивания базы данных
- Перейдите в другое окно терминала
- Создайте миграции базы данных ```python manage.py makemigrations```
- Проведите миграции базы данных ```python manage.py migrate```
- Загрузите начальные данные в БД
- Запуск сервера ```python manage.py runserver```
- Можно работать
### Работа с админкой
- Админка расположена по адресу http://127.0.0.1/admin
- - username = admin
- - password = 123
- Если нужно. Создание суперпользователя для работы ```python manage.py createsuperuser```
### Заполнение базы начальными данными
- Запустите проект
- Заполнение данными ```python manage.py loaddata data/ithunter.json```
### Авторы
Команда 7
