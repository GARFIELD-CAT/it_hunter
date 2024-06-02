from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient, APITestCase

User = get_user_model()


class APIUrlTests(APITestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.user_1 = User.objects.create(
            first_name="first_name_user_1",
            last_name="last_name_user_1",
            email="user_1@gmail.com",
            username="user_1",
            password="pass_1",
        )
        cls.user_2 = User.objects.create(
            first_name="first_name_user_2",
            last_name="last_name_user_2",
            email="user_2@gmail.com",
            username="user_2",
            password="pass_2",
        )

    def setUp(self):
        self.user_token = User.objects.create(
            first_name="first_name_user_token",
            last_name="last_name_user_token",
            email="user_token@gmail.com",
            username="user_token",
            password="testpass12",
        )
        self.token = Token.objects.create(user=self.user_token)
        self.token_client: APIClient = APIClient()
        self.token_client.credentials(HTTP_AUTHORIZATION=f"Token {self.token}")
        self.guest_client = APIClient()

    # Проверяем адрсе /api/users/.
    def test_api_users_is_available_to_the_user_with_the_token(self):
        """Адрес /api/users/ доступен пользователю с токеном."""
        url = "/api/users/"
        data = {}
        response = self.token_client.get(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_users_is_available_to_an_anonymous_usern(self):
        """Адрес /api/users/ доступен анонимному пользователю."""
        url = "/api/users/"
        data = {}
        response = self.guest_client.get(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_users_returns_correct_data(self):
        """Адрес /api/users/ возвращает корректные данные."""
        url = "/api/users/"
        data = {}
        response = self.guest_client.get(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
