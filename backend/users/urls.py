from django.urls import include, path
from djoser.views import TokenCreateView, TokenDestroyView
from rest_framework.routers import DefaultRouter

from .views import CreateListUserViewSet, UserViewSet

router = DefaultRouter()
router.register(r"users", CreateListUserViewSet)
router.register(r"users", UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("auth/token/login/", TokenCreateView.as_view()),
    path("auth/token/logout/", TokenDestroyView.as_view()),
]
