from django.contrib import admin
from django.contrib.auth import get_user_model

from .models import CustomUser

User = get_user_model()


class CustomUserAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "first_name",
        "last_name",
        "email",
        "date_joined",
        "is_active",
        "is_staff",
    )
    search_fields = ("email", "first_name")
    list_filter = ("is_active",)
    empty_value_display = "-пусто-"


admin.site.register(CustomUser, CustomUserAdmin)
