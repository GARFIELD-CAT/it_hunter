from django.contrib.auth import get_user_model
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

from .models import Location, Sector, Link, EmployeesNumber, Company


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


class SectorSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с отраслями компании."""

    class Meta:
        fields = ("id", "name")
        model = Sector

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class LinkSerializers(serializers.ModelSerializer):
    """Сериализатор для работы со ссылками на ресурсы компании."""

    class Meta:
        fields = ("id", "name")
        model = Link

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name

        return data


class EmployeesNumberSerializers(serializers.ModelSerializer):
    """Сериализатор для работы с количеством сотрудников."""

    class Meta:
        fields = ("id", "name")
        model = EmployeesNumber

    def to_representation(self, instance):
        data = dict()
        data["id"] = instance.id
        data["name"] = instance.name
        data["value"] = instance.get_name_display()

        return data


class CompanyReadSerializers(serializers.ModelSerializer):
    """Сериализатор чтения для работы с компаниями."""

    owner = UserSerializers(read_only=True)
    locations = LocationSerializers(read_only=True, many=True)
    sector = SectorSerializers(read_only=True, many=True)
    employees_number = EmployeesNumberSerializers(read_only=True)
    links = LinkSerializers(read_only=True, many=True)

    class Meta:
        fields = (
            "id",
            "name",
            "owner",
            "snippet",
            "description",
            "sector",
            "employees_number",
            "locations",
            "links",
            "technologies",
            "startup",
            "logo",
            "profile_image",
            "created_at",
        )
        model = Company


class CompanyWriteSerializers(
    WritableNestedModelSerializer, serializers.ModelSerializer
):
    owner = UserSerializers(read_only=True)
    locations = serializers.PrimaryKeyRelatedField(
        queryset=Location.objects.all(), many=True
    )
    sector = serializers.PrimaryKeyRelatedField(
        queryset=Sector.objects.all(), many=True, required=False
    )
    employees_number = serializers.PrimaryKeyRelatedField(
        queryset=EmployeesNumber.objects.all(), required=False
    )
    links = serializers.PrimaryKeyRelatedField(
        queryset=Link.objects.all(), many=True, required=False
    )

    class Meta:
        fields = (
            "id",
            "name",
            "owner",
            "snippet",
            "description",
            "sector",
            "employees_number",
            "locations",
            "links",
            "technologies",
            "startup",
            "logo",
            "profile_image",
            "created_at",
        )
        model = Company

    def validate_locations(self, data):
        if data == []:
            raise serializers.ValidationError("Нужно указать как минимум 1 локацию")
        locations_set = set()

        for location in data:
            if location in locations_set:
                raise serializers.ValidationError("Локации не должны повторяться")
            locations_set.add(location)

        return data

    def to_representation(self, instance):
        return CompanyReadSerializers(
            instance, context={"request": self.context.get("request")}
        ).data
