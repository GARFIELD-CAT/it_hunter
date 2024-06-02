from rest_framework import mixins, viewsets
from rest_framework.permissions import AllowAny

from .models import (
    Tag,
    Vacancy,
    Location,
    Experience,
    Employment,
    Schedule,
    Type,
    Salary,
)
from .paginations import PageLimitResultsSetPagination
from .permissions import AuthPostRetrieve, IsEmployerOrReadOnly
from .serializers import (
    TagSerializers,
    VacancyReadSerializers,
    VacancyWriteSerializers,
    LocationSerializers,
    TypeSerializers,
    ScheduleSerializers,
    EmploymentSerializers,
    ExperienceSerializers,
)


class RetrieveListTagViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка тэгов либо конкретного тэга."""

    queryset = Tag.objects.all()
    serializer_class = TagSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class RetrieveListLocationViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка локаций либо конкретной локации."""

    queryset = Location.objects.all()
    serializer_class = LocationSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class RetrieveListTypeViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка типов вакансии либо конкретного типа."""

    queryset = Type.objects.all()
    serializer_class = TypeSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class RetrieveListScheduleViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка графиков работы либо конкретного графика."""

    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class RetrieveListEmploymentViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка типов занятости либо конкретной занятости."""

    queryset = Employment.objects.all()
    serializer_class = EmploymentSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class RetrieveListExperienceViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка опытов работы либо конкретного опыта."""

    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class VacancyViewSet(viewsets.ModelViewSet):
    """Набор представлений для работы с вакансией."""

    queryset = Vacancy.objects.all()
    pagination_class = PageLimitResultsSetPagination
    permission_classes = [AuthPostRetrieve, IsEmployerOrReadOnly]

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return VacancyReadSerializers
        return VacancyWriteSerializers

    def perform_create(self, serializer):
        return serializer.save(employer=self.request.user)
