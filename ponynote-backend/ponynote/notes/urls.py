from django.conf.urls import include, url
from rest_framework import routers

from .views import NoteViewSet

router = routers.DefaultRouter()
router.register('notes', NoteViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]
