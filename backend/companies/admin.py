from django.contrib import admin
from .models import Location, Sector, Link, EmployeesNumber, Company


class CompanyAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "snippet",
        "description",
        "employees_number",
        "technologies",
        "startup",
        "logo",
        "profile_image",
        "created_at",
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


class SectorAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


class LinkAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


class EmployeesNumberAdmin(admin.ModelAdmin):
    list_display = (
        "pk",
        "name",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    empty_value_display = "-пусто-"


admin.site.register(Location, LocationAdmin)
admin.site.register(Sector, SectorAdmin)
admin.site.register(Link, LinkAdmin)
admin.site.register(EmployeesNumber, EmployeesNumberAdmin)
admin.site.register(Company, CompanyAdmin)
