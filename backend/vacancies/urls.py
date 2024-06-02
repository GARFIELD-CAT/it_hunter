from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    RetrieveListTagViewSet,
    VacancyViewSet,
    RetrieveListLocationViewSet,
    RetrieveListExperienceViewSet,
    RetrieveListEmploymentViewSet,
    RetrieveListScheduleViewSet,
    RetrieveListTypeViewSet,
)

router = DefaultRouter()
router.register(r"vacancies/locations", RetrieveListLocationViewSet)
router.register(r"vacancies/tags", RetrieveListTagViewSet)
router.register(r"vacancies/types", RetrieveListTypeViewSet)
router.register(r"vacancies/schedules", RetrieveListScheduleViewSet)
router.register(r"vacancies/employments", RetrieveListEmploymentViewSet)
router.register(r"vacancies/experiences", RetrieveListExperienceViewSet)
router.register(r"vacancies", VacancyViewSet)


urlpatterns = [
    path("", include(router.urls)),
]
