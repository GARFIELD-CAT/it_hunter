FROM python:3.9.13

WORKDIR /code
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD gunicorn it_hunter.wsgi:application --bind 0.0.0.0:8000
