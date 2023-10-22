from rest_framework import generics, filters
from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination
#from django_filters.rest_framework import DjangoFilterBackend

from ..models import Color, Task
from .serializers import ColorSerializer, TaskSerializerDetail
from .filters import TaskFilter

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 1000
    page_size_query_param = 'page_size'
    max_page_size = 10000

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'
    #max_page_size = 1000

class ColorListCreateView(generics.ListCreateAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializerDetail

class TaskListPaginationView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializerDetail
    pagination_class = LimitOffsetPagination
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title']
    ordering_fields = ['title']

class TaskListPaginationView_V2(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializerDetail
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title']
    ordering_fields = ['title']

class TaskListPaginationView_V3(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializerDetail
    pagination_class = StandardResultsSetPagination
    filterset_class = TaskFilter

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializerDetail