from django.contrib import admin
from django.db import models
from django.forms import Textarea

from .models import (
    Tag,
    Vacancy,
    Location,
    Salary,
    Type,
    Schedule,
    Employment,
    Experience,
)


class VacancyAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
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
    )
    search_fields = ("name",)
    list_filter = ("name", "employer")
    empty_value_display = "-пусто-"


class VacanciesTagAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


class LocationAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


class SalaryAdmin(admin.ModelAdmin):
    # TODO: Много проблем нужно подумать
    list_display = ("pk", "_from", "to", "currency")
    search_fields = ("_from", "to", "currency")
    list_filter = ("_from", "to", "currency")
    empty_value_display = "-пусто-"


class TypeAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


class ScheduleAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


class EmploymentAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


admin.site.register(Vacancy, VacancyAdmin)
admin.site.register(Location, LocationAdmin)
admin.site.register(Salary, SalaryAdmin)
admin.site.register(Type, TypeAdmin)
admin.site.register(Schedule, ScheduleAdmin)
admin.site.register(Employment, EmploymentAdmin)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Tag, VacanciesTagAdmin)
