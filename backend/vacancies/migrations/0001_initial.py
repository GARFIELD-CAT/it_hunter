# Generated by Django 3.2.25 on 2024-06-10 05:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Employment",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[
                            ("full", "Полная занятость"),
                            ("part", "Частичная занятость"),
                            ("project", "Проектная работа"),
                            ("volunteer", "Волонтерство"),
                            ("probation", "Стажировка"),
                        ],
                        default="Не указано",
                        help_text="Заполните тип занятости для вакансии",
                        max_length=25,
                        unique=True,
                        verbose_name="тип занятости",
                    ),
                ),
            ],
            options={
                "verbose_name": "тип занятости",
                "verbose_name_plural": "типы занятости",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Experience",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[
                            ("noExperience", "Нет опыта"),
                            ("between1And3", "От 1 года до 3 лет"),
                            ("between3And6", "От 3 до 6 лет"),
                            ("moreThan6", "Более 6 лет"),
                        ],
                        help_text="Заполните опыт работы для вакансии",
                        max_length=25,
                        unique=True,
                        verbose_name="опыт работы",
                    ),
                ),
            ],
            options={
                "verbose_name": "опыт работы",
                "verbose_name_plural": "опыт работы",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Location",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[
                            ("msk", "Москва"),
                            ("yerevan", "Ереван"),
                            ("spb", "Санкт-Петербург"),
                        ],
                        help_text="Заполните название города",
                        max_length=100,
                        unique=True,
                        verbose_name="название города",
                    ),
                ),
            ],
            options={
                "verbose_name": "Локация",
                "verbose_name_plural": "Локации",
            },
        ),
        migrations.CreateModel(
            name="Salary",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "_from",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        help_text="Заполните стартовое значение зарплаты",
                        max_digits=12,
                        null=True,
                        verbose_name="зарплата от",
                    ),
                ),
                (
                    "to",
                    models.DecimalField(
                        blank=True,
                        decimal_places=2,
                        help_text="Заполните конечное значение зарплаты",
                        max_digits=12,
                        null=True,
                        verbose_name="зарплата до",
                    ),
                ),
                (
                    "currency",
                    models.CharField(
                        choices=[("RUR", "Рубли"), ("USD", "Доллары"), ("EUR", "Евро")],
                        default="RUR",
                        help_text="Заполните код валюты",
                        max_length=10,
                        verbose_name="название валюты",
                    ),
                ),
            ],
            options={
                "verbose_name": "зарплата",
                "verbose_name_plural": "зарплаты",
            },
        ),
        migrations.CreateModel(
            name="Schedule",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[
                            ("fullDay", "Полный день"),
                            ("shift", "Сменный график"),
                            ("flexible", "Гибкий график"),
                            ("remote", "Удаленная работа"),
                            ("flyInFlyOut", "Вахтовый метод"),
                        ],
                        help_text="Заполните график работы",
                        max_length=25,
                        unique=True,
                        verbose_name="график работы",
                    ),
                ),
            ],
            options={
                "verbose_name": "график работы",
                "verbose_name_plural": "графики работы",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Tag",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[("dev", "Разработка"), ("anlt", "Аналитика")],
                        help_text="Заполните название тега",
                        max_length=100,
                        unique=True,
                        verbose_name="название тега",
                    ),
                ),
            ],
            options={
                "verbose_name": "тег",
                "verbose_name_plural": "теги",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Type",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[("open", "Открытая"), ("closed", "Закрытая")],
                        help_text="Заполните тип вакансии",
                        max_length=25,
                        unique=True,
                        verbose_name="тип вакансии",
                    ),
                ),
            ],
            options={
                "verbose_name": "тип",
                "verbose_name_plural": "типы",
            },
        ),
        migrations.CreateModel(
            name="Vacancy",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        help_text="Заполните название вакансии",
                        max_length=255,
                        verbose_name="название вакансии",
                    ),
                ),
                (
                    "published_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Дата формируется автоматически",
                        verbose_name="дата публикации",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(
                        auto_now_add=True,
                        help_text="Дата формируется автоматически",
                        verbose_name="дата создания вакансии",
                    ),
                ),
                (
                    "archived",
                    models.BooleanField(
                        default=False, verbose_name="вакансия в архиве"
                    ),
                ),
                (
                    "url",
                    models.URLField(
                        help_text="Заполните урл вакансии", verbose_name="урл вакансии"
                    ),
                ),
                (
                    "description",
                    models.TextField(
                        help_text="Заполните описание вакансии",
                        verbose_name="описание акансии",
                    ),
                ),
                (
                    "snippet",
                    models.TextField(
                        help_text="Заполните краткое описание вакансии",
                        verbose_name="краткое описание вакансии",
                    ),
                ),
                (
                    "employer",
                    models.ForeignKey(
                        help_text="Укажите работодателя",
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="vacancies",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="работодатель",
                    ),
                ),
                (
                    "employment",
                    models.ForeignKey(
                        blank=True,
                        help_text="Заполните тип занятости",
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="vacancies",
                        to="vacancies.employment",
                        verbose_name="занятость",
                    ),
                ),
                (
                    "experience",
                    models.ForeignKey(
                        blank=True,
                        help_text="Заполните опыт работы для вакансии",
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="vacancies",
                        to="vacancies.experience",
                        verbose_name="опыт работы ",
                    ),
                ),
                (
                    "locations",
                    models.ManyToManyField(
                        help_text="Заполните локацию вакансии",
                        related_name="vacancies",
                        to="vacancies.Location",
                        verbose_name="локация",
                    ),
                ),
                (
                    "salary",
                    models.ForeignKey(
                        blank=True,
                        help_text="Введите желаемый диапазон зарплаты",
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="vacancies",
                        to="vacancies.salary",
                        verbose_name="зарплата",
                    ),
                ),
                (
                    "schedule",
                    models.ForeignKey(
                        blank=True,
                        help_text="Заполните график работы",
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="vacancies",
                        to="vacancies.schedule",
                        verbose_name="график работы",
                    ),
                ),
                (
                    "tags",
                    models.ManyToManyField(
                        help_text="Выберите теги",
                        related_name="vacancies",
                        to="vacancies.Tag",
                        verbose_name="теги вакансии",
                    ),
                ),
                (
                    "type",
                    models.ForeignKey(
                        blank=True,
                        help_text="Заполните тип вакансии",
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="vacancies",
                        to="vacancies.type",
                        verbose_name="тип вакансии",
                    ),
                ),
            ],
            options={
                "verbose_name": "вакансия",
                "verbose_name_plural": "вакансии",
                "ordering": ["-published_at"],
            },
        ),
    ]
