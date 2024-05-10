from django.urls import path, include
from django.contrib import admin
from api.urls import urlpatterns as api_patterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("quickbuyer.urls"))
] + api_patterns