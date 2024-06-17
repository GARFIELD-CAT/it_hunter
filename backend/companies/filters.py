import django_filters

from .models import Company


class CompanyNameFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name="name", method="name_icontains")

    class Meta:
        model = Company
        fields = ("name",)

    def name_icontains(self, queryset, slug, name):
        return queryset.filter(name__icontains=name)
