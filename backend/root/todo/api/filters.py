import django_filters
from ..models import Task

class TaskFilter(django_filters.FilterSet):
    date_range = django_filters.DateFromToRangeFilter(field_name='created_at')

    class Meta:
        model = Task
        fields = []  # Include other fields you want to filter
