from __future__ import unicode_literals

from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager

from django.db import models


class CustomUser(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(
        "имя",
        max_length=150,
        help_text="Введите имя пользователя. Не более 150 символов",
    )
    last_name = models.CharField(
        "фамилия",
        max_length=150,
        help_text="Введите фамилию пользователя. Не более 150 символов",
        blank=True,
        null=True,
    )
    email = models.EmailField(
        "адрес электронной почты",
        unique=True,
        help_text="Введите адрес электронной почты",
    )
    phone = PhoneNumberField(
        verbose_name="Телефон",
        region="RU",
        help_text="Введите номер телефона",
        blank=True,
        null=True,
    )
    date_joined = models.DateTimeField(_("date joined"), auto_now_add=True)
    is_active = models.BooleanField(_("active"), default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        ordering = ["id"]

    def __str__(self):
        return self.email
