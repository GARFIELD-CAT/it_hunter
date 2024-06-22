# it_hunter

## Описание

Проект it_hunter позволяет искать вакансии и сотрудников.

## Технологии

### Backend

- Python 3.9
- Django 3.2.6
- django rest framework 3.12.4
- Postgresql 12.4
- Gunicorn 20.0.4

### Frontend

- React.JS
- Vite
- Tailwind
- ReactQuery

## Запуск проекта локально

### Backend

- Склонируйте репозиторий `git clone https://github.com/GARFIELD-CAT/it_hunter.git`
- Перейдите в папку проекта it_hunter
- Перейдите в папку backend
- Разверните venv окружение `py -3.9 -m venv venv`
- Активировать venv окружение `.\venv\Scripts\activate.bat`
  - Если используется PowerShell `.\venv\Scripts\Activate.ps1`
  - Если используете bash: `source ./venv/Scripts/activate`
- Установить poetry `pip install poetry`
- Установить зависимости `poetry install`
- Создайте файл .env с данными переменных окружения на основе шаблона template.env. Сейчас достаточно просто убрать "template"
- Запустите docker контейнер `docker-compose up` для разворачивания базы данных
- Перейдите в другое окно терминала
- Активировать venv окружение `.\venv\Scripts\activate.bat`
  - Если используется PowerShell `.\venv\Scripts\Activate.ps1`
  - Если используете bash: `source ./venv/Scripts/activate`
- Создайте миграции базы данных `python manage.py makemigrations`
- Проведите миграции базы данных `python manage.py migrate`
- Загрузите начальные данные в БД
- Запуск сервера `python manage.py runserver`
- Заполнение базы начальными данными `python manage.py loaddata data/ithunter.json`
- Можно работать

## Работа с админкой

- Админка расположена по адресу http://127.0.0.1/admin
- - email = admin@gmail.com
- - password = 123
- Если нужно. Создание суперпользователя для работы `python manage.py createsuperuser`

### Frontend

- Установите nodeJs
- Установите yarn ` npm i -g yarn`
- Склонируйте репозиторий `git clone https://github.com/GARFIELD-CAT/it_hunter.git`
- Перейдите в папку проекта it_hunter
- Перейдите в папку client командой `cd client`
- Установите зависимости проекта командой `yarn`
- После успешной установки запустите проект командой `yarn start`

## Авторы

Команда 7

## MacOS

На macOS команда `py` не используется. Вместо этого обычно используют команды `python3` или просто `python`, в зависимости от того, как настроена ваша система. Вот как можно выполнить те же шаги на macOS:

### 1. Клонирование репозитория

Сначала нужно клонировать репозиторий:

```bash
git clone https://github.com/GARFIELD-CAT/it_hunter.git
```

### 2. Переход в папку проекта

Перейдите в папку проекта:

```bash
cd it_hunter
```

### 3. Переход в папку backend

Перейдите в папку `backend`:

```bash
cd backend
```

### 4. Развертывание виртуального окружения

Создайте виртуальное окружение с использованием Python 3.9:

```bash
python3.9 -m venv venv
```

### 5. Активация виртуального окружения

Активация виртуального окружения:

```bash
source venv/bin/activate
```

### 6. Установка poetry

Установите `poetry`:

```bash
pip install poetry
```

### 7. Установка зависимостей

Установите зависимости проекта с помощью `poetry`:

```bash
poetry install
```

### 8. Создание файла .env

Создайте файл `.env` на основе шаблона `template.env`. Просто скопируйте файл и уберите "template" из названия:

```bash
cp template.env .env
```

### 9. Запуск Docker контейнера

Запустите Docker контейнер для разворачивания базы данных:

```bash
docker-compose up
```

### 10. Создание миграций базы данных

Откройте другое окно терминала и создайте миграции базы данных:

```bash
python manage.py makemigrations
```

### 11. Проведение миграций базы данных

Проведите миграции базы данных:

```bash
python manage.py migrate
```

### 12. Загрузка начальных данных в БД

(Шаг может варьироваться в зависимости от проекта. Обычно команда для этого указывается в документации проекта.)

### 13. Запуск сервера

Запустите сервер:

```bash
python manage.py runserver
```
