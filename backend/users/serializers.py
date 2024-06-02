from django.contrib.auth import get_user_model, password_validation
from rest_framework import serializers


User = get_user_model()


class UserSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с пользователями."""

    class Meta:
        fields = (
            "email",
            "id",
            "username",
            "first_name",
            "last_name",
            "password",
        )
        model = User
        extra_kwargs = {"password": {"write_only": True}}

    def validate_password(self, value):
        password_validation.validate_password(value, self.instance)
        return value


class UserCreateSerializers(serializers.ModelSerializer):
    """Сериализатор для создания пользователя."""

    class Meta:
        fields = ("email", "id", "username", "first_name", "last_name", "password")
        model = User
        extra_kwargs = {"password": {"write_only": True}}

    def validate_password(self, value):
        password_validation.validate_password(value, self.instance)
        return value
