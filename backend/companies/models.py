from __future__ import unicode_literals
from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


LOCATIONS = [
    ("msk", "Москва"),
    ("yerevan", "Ереван"),
    ("spb", "Санкт-Петербург"),
]
SECTORS = [
    ("agency", "Агентство"),
    ("telecom", "Телекоммуникации"),
    ("public_sector", "Госсектор"),
    ("technologies", "Технологии"),
    ("non-commercial", "Некоммерческие"),
]
EMPLOYEES_NUMBER = [
    ("to15", "до 15 человек"),
    ("from15to50", "от 15 до 50 человек"),
    ("from50to100", "от 50 до 100 человек"),
    ("from100to500", "от 100 до 500 человек"),
    ("from500", "более 500 человек"),
    ("from1000", "более 1000 человек"),
    ("from10000", "более 10000 человек"),
]


class Location(models.Model):
    """Локация работы. Город."""

    name = models.CharField(
        verbose_name="название города",
        choices=LOCATIONS,
        unique=True,
        max_length=100,
        help_text="Заполните название города",
    )

    class Meta:
        verbose_name = "Локация"
        verbose_name_plural = "Локации"

    def __str__(self):
        return self.name


class Sector(models.Model):
    """Отрасль компании."""

    name = models.CharField(
        verbose_name="отрасль компании",
        max_length=25,
        choices=SECTORS,
        unique=True,
        help_text="Заполните отрасль компании",
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "отрасль компании"
        verbose_name_plural = "отрасли компании"

    def __str__(self):
        return self.name


class Link(models.Model):
    """Ссылка на ресурсы компании."""

    name = models.URLField(
        verbose_name="ссылка на ресурсы компании",
        max_length=250,
        unique=False,
        help_text="Укажите ссылку на ресурсы компании",
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "ссылка на ресурсы компании"
        verbose_name_plural = "ссылки на ресурсы компании"

    def __str__(self):
        return self.name


class EmployeesNumber(models.Model):
    """Количество сотрудников."""

    name = models.CharField(
        verbose_name="количество сотрудников",
        max_length=25,
        choices=EMPLOYEES_NUMBER,
        unique=True,
        help_text="Заполните количество сотрудников",
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "количество сотрудников компании"
        verbose_name_plural = "количество сотрудников компании"

    def __str__(self):
        return self.name


class Company(models.Model):
    name = models.CharField(
        verbose_name="название компании",
        max_length=50,
        help_text="Введите название компании",
        unique=True,
    )
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="companies",
        verbose_name="владелец компании",
        help_text="Укажите владелеца компании",
    )
    snippet = models.TextField(
        verbose_name="краткое описание компании",
        help_text="Заполните краткое описание компании",
        max_length=250,
        blank=True,
        null=True,
    )
    description = models.TextField(
        verbose_name="описание компании",
        help_text="Заполните описание компании",
        blank=True,
        null=True,
    )
    sector = models.ManyToManyField(
        Sector,
        verbose_name="секторы",
        related_name="companies",
        help_text="Выберите отрасли компании",
        blank=True,
    )
    employees_number = models.ForeignKey(
        EmployeesNumber,
        verbose_name="количество сотрудников",
        related_name="companies",
        help_text="Заполните количество сотрудников",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    locations = models.ManyToManyField(
        Location,
        verbose_name="локации",
        related_name="companies",
        help_text="Заполните локации компании",
    )
    links = models.ManyToManyField(
        Link,
        verbose_name="ссылки на ресурсы компании",
        related_name="companies",
        help_text="Укажите ссылки на ресурсы компании",
        blank=True,
    )
    technologies = models.TextField(
        verbose_name="технологии компании",
        help_text="Заполните технологии компании",
        blank=True,
        null=True,
    )
    startup = models.BooleanField(
        verbose_name="является ли компания стартапом",
        help_text="Заполните статус стартапа",
        default=False,
    )
    logo = models.ImageField(
        verbose_name="логотип компании",
        upload_to="companies/logo/",
        help_text="Загрузите логотип компании",
        blank=True,
        null=True,
    )
    profile_image = models.ImageField(
        verbose_name="картинка профиля компании",
        upload_to="companies/profile_image/",
        help_text="Загрузите картинку профиля компании",
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(
        verbose_name="дата создания компании",
        auto_now_add=True,
        help_text="Дата формируется автоматически",
    )

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "компания"
        verbose_name_plural = "компании"

    def __str__(self):
        return self.name
