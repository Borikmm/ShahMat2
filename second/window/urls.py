from django.urls import path
from window.views import index

urlpatterns = [
    path("", index, name="index")
]