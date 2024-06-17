import django_filters

from .models import Vacancy, SCHEDULES

FILTER_LOCATIONS = {
    "Москва": "msk",
    "Ереван": "yerevan",
    "Санкт-Петербург": "spb",
}
FILTER_TAGS = {
    "Разработка": "dev",
    "Аналитика": "anlt",
}
FILTER_SCHEDULES = {
    "Удаленная работа": "remote",
}


class VacancyFilter(django_filters.FilterSet):
    """Фильтр для вакансий."""

    name = django_filters.CharFilter(field_name="name", method="filter_name")
    locations = django_filters.CharFilter(
        field_name="locations__name", method="filter_locations"
    )
    tags = django_filters.CharFilter(field_name="tags__name", method="filter_tags")
    schedules = django_filters.CharFilter(
        field_name="schedules__name", method="filter_schedules"
    )
    startup = django_filters.BooleanFilter(
        field_name="employer__startup", method="filter_startup"
    )
    description = django_filters.CharFilter(
        field_name="description", method="filter_description"
    )

    class Meta:
        model = Vacancy
        fields = ("name", "locations", "tags", "schedules", "startup")

    def filter_name(self, queryset, slug, name):
        return queryset.filter(name__icontains=name)

    def filter_locations(self, queryset, locations, value):
        raw_locations = self.request.query_params.get("locations").split(",")
        locations = []

        for location in raw_locations:
            locations.append(FILTER_LOCATIONS.get(location))

        return queryset.filter(locations__name__in=locations).distinct()

    def filter_tags(self, queryset, tags, value):
        raw_tags = self.request.query_params.get("tags").split(",")
        tags = []

        for tag in raw_tags:
            tags.append(FILTER_TAGS.get(tag))

        return queryset.filter(tags__name__in=tags).distinct()

    def filter_schedules(self, queryset, schedules, value):
        raw_schedules = self.request.query_params.get("schedules").split(",")
        schedules = []

        for schedule in raw_schedules:
            schedules.append(FILTER_SCHEDULES.get(schedule))

        return queryset.filter(schedule__name__in=schedules).distinct()

    def filter_startup(self, queryset, slug, value):
        return queryset.filter(employer__startup=value).distinct()

    def filter_description(self, queryset, slug, value):
        return queryset.filter(description__icontains=value)
