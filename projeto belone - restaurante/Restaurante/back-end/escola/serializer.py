from rest_framework import serializers
from escola.models import Aluno
from escola.models import Funcionario
from escola.models import Cliente
from escola.models import Pedido

class AlunosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ('id','nome','email',)
#chamando os obj da classe
class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ('id','nome','senha','email',)

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('id','nome','senha','email', 'cnpj',)

class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedido
        fields = ('id','nome','contato','pedido',)