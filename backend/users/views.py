from django.contrib.auth import get_user_model
from djoser.serializers import SetPasswordSerializer
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .paginations import PageLimitResultsSetPagination
from .permissions import CurrentUserOrAdmin
from .serializers import UserCreateSerializers, UserSerializers

User = get_user_model()


class CreateListUserViewSet(
    mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet
):
    """
    Набор представлений для создания пользователя и
    получения списка всех пользователей.
    """

    queryset = User.objects.all()
    pagination_class = PageLimitResultsSetPagination
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.action in ("create"):
            return UserCreateSerializers
        return UserSerializers

    def perform_create(self, serializer):
        username = serializer.validated_data["username"]
        password = serializer.validated_data["password"]
        serializer.save()
        user = get_object_or_404(User, username=username)
        user.set_password(password)
        user.save()


class UserViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """Набор представлений для работы с профилем пользователя."""

    queryset = User.objects.all()
    serializer_class = UserSerializers
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=["get"])
    def me(self, request):
        serializer = self.get_serializer(self.request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["post"], permission_classes=[CurrentUserOrAdmin])
    def set_password(self, request, *args, **kwargs):
        serializer = SetPasswordSerializer(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        new_password = serializer.validated_data["new_password"]
        self.request.user.set_password(new_password)
        self.request.user.save()
        return Response(status=status.HTTP_201_CREATED)
