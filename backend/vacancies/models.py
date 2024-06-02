from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

LOCATIONS = [
    ("msk", "Москва"),
    ("yerevan", "Ереван"),
    ("spb", "Санкт-Петербург"),
]
CURRENCIES = [
    ("RUR", "Рубли"),
    ("USD", "Доллары"),
    ("EUR", "Евро"),
]
CURRENCIES_IDS = ("RUR", "USD", "EUR")
TYPES = [("open", "Открытая"), ("closed", "Закрытая")]
SCHEDULES = [
    ("fullDay", "Полный день"),
    ("shift", "Сменный график"),
    ("flexible", "Гибкий график"),
    ("remote", "Удаленная работа"),
    ("flyInFlyOut", "Вахтовый метод"),
]
EMPLOYMENTS = [
    ("full", "Полная занятость"),
    ("part", "Частичная занятость"),
    ("project", "Проектная работа"),
    ("volunteer", "Волонтерство"),
    ("probation", "Стажировка"),
]
EXPERIENCE = [
    ("noExperience", "Нет опыта"),
    ("between1And3", "От 1 года до 3 лет"),
    ("between3And6", "От 3 до 6 лет"),
    ("moreThan6", "Более 6 лет"),
]
TAGS = [
    ("dev", "Разработка"),
    ("anlt", "Аналитика"),
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


class Salary(models.Model):
    """Зарплата."""

    _from = models.DecimalField(
        verbose_name="зарплата от",
        decimal_places=2,
        max_digits=12,
        blank=True,
        null=True,
        help_text="Заполните стартовое значение зарплаты",
    )

    to = models.DecimalField(
        verbose_name="зарплата до",
        decimal_places=2,
        max_digits=12,
        blank=True,
        null=True,
        help_text="Заполните конечное значение зарплаты",
    )

    currency = models.CharField(
        verbose_name="название валюты",
        max_length=10,
        default="RUR",
        choices=CURRENCIES,
        help_text="Заполните код валюты",
    )

    class Meta:
        verbose_name = "зарплата"
        verbose_name_plural = "зарплаты"

    def __str__(self):
        return f"От {self._from} до {self.to} {self.currency}"


class Type(models.Model):
    """Тип вакансии. Открытая или Закрытая"""

    name = models.CharField(
        verbose_name="тип вакансии",
        max_length=25,
        choices=TYPES,
        unique=True,
        help_text="Заполните тип вакансии",
    )

    class Meta:
        verbose_name = "тип"
        verbose_name_plural = "типы"

    def __str__(self):
        return self.name


class Schedule(models.Model):
    """График работы."""

    name = models.CharField(
        verbose_name="график работы",
        max_length=25,
        choices=SCHEDULES,
        unique=True,
        help_text="Заполните график работы",
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "график работы"
        verbose_name_plural = "графики работы"

    def __str__(self):
        return self.name


class Employment(models.Model):
    """Тип занятости."""

    name = models.CharField(
        verbose_name="тип занятости",
        max_length=25,
        unique=True,
        choices=EMPLOYMENTS,
        default="Не указано",
        help_text="Заполните тип занятости для вакансии",
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "тип занятости"
        verbose_name_plural = "типы занятости"

    def __str__(self):
        return self.name


class Experience(models.Model):
    """Опыт работы."""

    name = models.CharField(
        verbose_name="опыт работы",
        max_length=25,
        unique=True,
        choices=EXPERIENCE,
        help_text="Заполните опыт работы для вакансии",
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "опыт работы"
        verbose_name_plural = "опыт работы"

    def __str__(self):
        return self.name


class Tag(models.Model):
    """Теги для вакансий."""

    # TODO: Будет выбор из готового списка. Доделать зависимый выбор навыка от сферы
    name = models.CharField(
        verbose_name="название тега",
        choices=TAGS,
        unique=True,
        max_length=100,
        help_text="Заполните название тега",
    )

    class Meta:
        ordering = ["name"]
        verbose_name = "тег"
        verbose_name_plural = "теги"

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    """Вакансия."""

    name = models.CharField(
        verbose_name="название вакансии",
        max_length=255,
        help_text="Заполните название вакансии",
    )

    locations = models.ManyToManyField(
        Location,
        verbose_name="локация",
        related_name="vacancies",
        help_text="Заполните локацию вакансии",
    )

    salary = models.ForeignKey(
        Salary,
        verbose_name="зарплата",
        related_name="vacancies",
        help_text="Введите желаемый диапазон зарплаты",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    type = models.ForeignKey(
        Type,
        verbose_name="тип вакансии",
        related_name="vacancies",
        help_text="Заполните тип вакансии",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    published_at = models.DateTimeField(
        verbose_name="дата публикации",
        auto_now_add=True,
        help_text="Дата формируется автоматически",
    )

    created_at = models.DateTimeField(
        verbose_name="дата создания вакансии",
        auto_now_add=True,
        help_text="Дата формируется автоматически",
    )

    archived = models.BooleanField(
        verbose_name="вакансия в архиве",
        default=False,
    )

    url = models.URLField(
        verbose_name="урл вакансии", help_text="Заполните урл вакансии"
    )

    employer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="vacancies",
        verbose_name="работодатель",
        help_text="Укажите работодателя",
    )

    schedule = models.ForeignKey(
        Schedule,
        verbose_name="график работы",
        related_name="vacancies",
        help_text="Заполните график работы",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    employment = models.ForeignKey(
        Employment,
        verbose_name="занятость",
        related_name="vacancies",
        help_text="Заполните тип занятости",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    experience = models.ForeignKey(
        Experience,
        verbose_name="опыт работы ",
        related_name="vacancies",
        help_text="Заполните опыт работы для вакансии",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    description = models.TextField(
        verbose_name="описание акансии",
        help_text="Заполните описание вакансии",
    )

    snippet = models.TextField(
        verbose_name="краткое описание акансии",
        help_text="Заполните краткое описание вакансии",
    )

    tags = models.ManyToManyField(
        Tag,
        verbose_name="теги вакансии",
        related_name="vacancies",
        help_text="Выберите теги",
    )

    class Meta:
        ordering = ["-published_at"]
        verbose_name = "вакансия"
        verbose_name_plural = "вакансии"

    def __str__(self):
        return self.name
