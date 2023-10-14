from django.urls import path

from .views import ColorListCreateView, TaskListCreateView, TaskDetailView

urlpatterns = [
	path('color/', ColorListCreateView.as_view(), name='colorListCreate'),
	path('task/', TaskListCreateView.as_view(), name='taskListCreate'),
	path('task/<int:pk>/', TaskDetailView.as_view(), name='taskDetail'),

]