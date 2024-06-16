from rest_framework.permissions import IsAuthenticated


class CurrentUser(IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        user = request.user
        return obj.pk == user.pk
