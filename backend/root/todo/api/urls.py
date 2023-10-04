from django.urls import path

from .views import ColorListCreateView, TaskListCreateView

urlpatterns = [
	path('color/', ColorListCreateView.as_view(), name='colorListCreate'),
	path('task/', TaskListCreateView.as_view(), name='taskListCreate'),

]