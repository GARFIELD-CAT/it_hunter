from django.contrib.auth import get_user_model, password_validation
from phonenumber_field.validators import validate_international_phonenumber
from rest_framework import serializers


User = get_user_model()


class UserSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с пользователями."""

    class Meta:
        fields = (
            "id",
            "email",
            "first_name",
            "last_name",
            "phone",
        )
        model = User


class UserCreateSerializers(serializers.ModelSerializer):
    """Сериализатор для создания пользователя."""

    class Meta:
        fields = ("email", "id", "first_name", "last_name", "phone", "password")
        model = User
        extra_kwargs = {"password": {"write_only": True}}

    def validate_password(self, value):
        password_validation.validate_password(value, self.instance)
        return value

    def validate_phone(self, value):
        validate_international_phonenumber(value)
        return value
