from django.contrib import admin
from django.urls import path, include
from escola.views import AlunoViewSet
from rest_framework import routers
from django.urls import path
from escola.views import FuncionarioViewset
from escola.views import ClienteViewset
from escola.views import PedidoViewset

router = routers.DefaultRouter()
router.register(r'funcionarios', FuncionarioViewset)
router.register(r'clientes', ClienteViewset)
router.register(r'pedidos', PedidoViewset)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(router.urls))
]