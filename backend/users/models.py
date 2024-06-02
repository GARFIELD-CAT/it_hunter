from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    first_name = models.CharField(
        "имя",
        max_length=150,
        help_text="Введите имя пользователя. Не более 150 символов",
    )
    last_name = models.CharField(
        "фамилия",
        max_length=150,
        help_text="Введите фамилию пользователя. Не более 150 символов",
    )
    email = models.EmailField(
        "адрес электронной почты",
        unique=True,
        help_text="Введите адрес электронной почты",
    )

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        ordering = ["id"]


User = get_user_model()
