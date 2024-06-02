from django.contrib.auth import get_user_model, password_validation
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

from .models import (
    Tag,
    Vacancy,
    Location,
    Salary,
    Type,
    Employment,
    Experience,
    CURRENCIES,
    CURRENCIES_IDS,
)

User = get_user_model()


class EmployerSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с работодателем."""

    class Meta:
        fields = (
            "id",
            "email",
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


class TagSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с тегами."""

    class Meta:
        fields = ("id", "name")
        model = Tag

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class LocationSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с локациями."""

    class Meta:
        fields = ("id", "name")
        model = Location

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class SalaryReadSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с зарплатой."""

    class Meta:
        fields = (
            "id",
            "_from",
            "to",
            "currency",
        )
        model = Salary

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["_from"] = instance._from
        data["to"] = instance.to
        data["currency"] = instance.currency
        data["value"] = instance.get_currency_display()

        return data


class SalaryWriteSerializers(serializers.ModelSerializer):
    """Сериализатор для записи зарплаты."""

    id = serializers.ReadOnlyField(source="salary.id")
    _from = serializers.DecimalField(decimal_places=2, max_digits=12)
    to = serializers.DecimalField(decimal_places=2, max_digits=12)
    currency = serializers.CharField()

    class Meta:
        fields = ("id", "_from", "to", "currency")
        model = Salary


class TypeSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с типом вакансии."""

    class Meta:
        fields = ("id", "name")
        model = Type

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class ScheduleSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с графиком работы."""

    class Meta:
        fields = ("id", "name")
        model = Type

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class EmploymentSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с типом занятости."""

    class Meta:
        fields = ("id", "name")
        model = Employment

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class ExperienceSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с опытом работы."""

    class Meta:
        fields = ("id", "name")
        model = Experience

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class VacancyReadSerializers(serializers.ModelSerializer):
    """Сериализатор чтения для работы с вакансиями."""

    locations = LocationSerializers(read_only=True, many=True)
    salary = SalaryReadSerializers(read_only=True)
    type = TypeSerializers(read_only=True)
    employer = EmployerSerializers(read_only=True)
    schedule = ScheduleSerializers(read_only=True)
    employment = EmploymentSerializers(read_only=True)
    experience = ExperienceSerializers(read_only=True)
    tags = TagSerializers(read_only=True, many=True)

    class Meta:
        fields = (
            "id",
            "name",
            "locations",
            "salary",
            "type",
            "published_at",
            "created_at",
            "archived",
            "url",
            "employer",
            "schedule",
            "employment",
            "experience",
            "description",
            "snippet",
            "tags",
        )
        model = Vacancy


class VacancyWriteSerializers(
    WritableNestedModelSerializer, serializers.ModelSerializer
):
    employer = EmployerSerializers(read_only=True)
    tags = serializers.PrimaryKeyRelatedField(queryset=Tag.objects.all(), many=True)
    locations = serializers.PrimaryKeyRelatedField(
        queryset=Location.objects.all(), many=True
    )
    salary = SalaryWriteSerializers()
    url = serializers.URLField(read_only=True)

    class Meta:
        fields = (
            "id",
            "name",
            "locations",
            "salary",
            "type",
            "published_at",
            "created_at",
            "archived",
            "url",
            "employer",
            "schedule",
            "employment",
            "experience",
            "description",
            "snippet",
            "tags",
        )
        model = Vacancy

    def validate_locations(self, data):
        if data == []:
            raise serializers.ValidationError("Нужно указать как минимум 1 локацию")
        locations_set = set()

        for location in data:
            if location in locations_set:
                raise serializers.ValidationError("Локации не должны повторяться")
            locations_set.add(location)

        return data

    def validate_tags(self, data):
        if data == []:
            raise serializers.ValidationError("Нужно указать как минимум 1 тег")
        tag_set = set()

        for tag in data:
            if tag in tag_set:
                raise serializers.ValidationError("Теги не должны повторяться")
            tag_set.add(tag)

        return data

    def validate_salary(self, data):
        if data == []:
            return data

        _from = data["_from"]
        to = data["to"]

        if data["currency"] not in CURRENCIES_IDS:
            raise serializers.ValidationError(
                f"Введенной валюты нет в списке воможных. {CURRENCIES}"
            )

        if to < _from:
            raise serializers.ValidationError(
                "Начальная зарплата не должны быть больше конечной."
            )

        return data

    def to_representation(self, instance):
        return VacancyReadSerializers(
            instance, context={"request": self.context.get("request")}
        ).data
