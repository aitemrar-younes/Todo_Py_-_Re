from django.urls import path

from .views import ColorListCreateView, TaskListCreateView, TaskDetailView, TaskListPaginationView, TaskListPaginationView_V2

urlpatterns = [
	path('color/', ColorListCreateView.as_view(), name='colorListCreate'),
	path('task/', TaskListCreateView.as_view(), name='taskListCreate'),
	path('taskPaged/', TaskListPaginationView.as_view(), name='taskListPaged'),
	path('taskPaged_v2/', TaskListPaginationView_V2.as_view(), name='taskListPaged_v2'),
	path('task/<int:pk>/', TaskDetailView.as_view(), name='taskDetail'),

]