from django.contrib.auth import get_user_model
from rest_framework import mixins, status, viewsets
from rest_framework.permissions import AllowAny

from .models import Location, Sector, EmployeesNumber, Company
from .paginations import PageLimitResultsSetPagination
from .permissions import IsCompanyOwnerOrReadOnly, AuthPostRetrieve
from .serializers import (
    LocationSerializers,
    SectorSerializers,
    EmployeesNumberSerializers,
    CompanyReadSerializers,
    CompanyWriteSerializers,
)

User = get_user_model()


class RetrieveListLocationViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка локаций либо конкретной локации."""

    queryset = Location.objects.all()
    serializer_class = LocationSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class RetrieveListSectorViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка отраслей компании или конкретной отрасли."""

    queryset = Sector.objects.all()
    serializer_class = SectorSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class RetrieveListEmployeesNumberViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    """Набор представлений для получения списка с количеством сотрудников или конкретного количества."""

    queryset = EmployeesNumber.objects.all()
    serializer_class = EmployeesNumberSerializers
    pagination_class = None
    permission_classes = [AllowAny]


class CompanyViewSet(viewsets.ModelViewSet):
    """Набор представлений для работы с компанией."""

    queryset = Company.objects.all()
    pagination_class = PageLimitResultsSetPagination
    permission_classes = [AuthPostRetrieve, IsCompanyOwnerOrReadOnly]

    def get_serializer_class(self):
        if self.action in ("list", "retrieve"):
            return CompanyReadSerializers
        return CompanyWriteSerializers

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)
