from django.contrib.auth import get_user_model
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .filters import CompanyNameFilter
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
    filterset_class = CompanyNameFilter

    def get_serializer_class(self):
        if self.action in ("list", "retrieve", "my"):
            return CompanyReadSerializers
        return CompanyWriteSerializers

    def create(self, serializer):
        company_queryset = Company.objects.filter(owner=self.request.user)

        if company_queryset:
            return Response(
                data={"errors:": "У текущего пользователя уже есть компания."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        else:
            return super().create(self.request)

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    @action(detail=False, methods=["get"])
    def my(self, request):
        company = self.queryset.filter(owner=self.request.user)

        if company:
            serializer = self.get_serializer(company.get())
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(
                data={"errors:": "У текущего пользователя нет компании."},
                status=status.HTTP_400_BAD_REQUEST,
            )
