from rest_framework import viewsets
from escola.models import Aluno
from escola.serializer import AlunosSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
from escola.models import Funcionario
from escola.serializer import FuncionarioSerializer
from escola.models import Cliente
from escola.serializer import ClienteSerializer 
from escola.models import Pedido
from escola.serializer import PedidoSerializer
        
class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = AlunosSerializer
    @api_view(['POST'])
    def login_view(request):
        name = request.data.get('nome')
        cnpj = request.data.get('cnpj')
        email = request.data.get('email')

        user = authenticate(request, nome=name, cnpj=cnpj, email = email)

        if user is not None: 
            return Response({'message': 'Login bem-sucedido!'})
        else:
            
            return Response({'message': 'Credenciais inválidas.'}, status=400)
        
#define o conjunto de objetos a serem manip
class FuncionarioViewset(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

class ClienteViewset(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class PedidoViewset(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
    

