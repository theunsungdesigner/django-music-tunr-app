from rest_framework import viewsets

# Create your views here.

from .serializers import ArtistSerializer, SongSerializer
from .models import Artist, Song


class ArtistView(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class SongView(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = SongSerializer
