from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import (
    CompanyViewSet,
    RetrieveListLocationViewSet,
    RetrieveListSectorViewSet,
    RetrieveListEmployeesNumberViewSet,
)

router = DefaultRouter()
router.register(r"companies/locations", RetrieveListLocationViewSet)
router.register(r"companies/sectors", RetrieveListSectorViewSet)
router.register(r"companies/employees-number", RetrieveListEmployeesNumberViewSet)
router.register(r"companies", CompanyViewSet)


urlpatterns = [
    path("", include(router.urls)),
]
