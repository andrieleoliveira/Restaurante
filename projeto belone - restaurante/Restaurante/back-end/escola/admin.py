from django.contrib import admin
from escola.models import Aluno
from escola.models import Funcionario
from escola.models import Cliente
from escola.models import Pedido

# Configuração do admin para o modelo Aluno
class Alunos(admin.ModelAdmin):
    list_display = ("id", "nome", "email")
    list_display_links = ("id","nome")
    search_fields = ("nome",)

# Registra 
admin.site.register(Aluno, Alunos)

# Configuração do admin para o modelo Funcionario
class FuncionariosAdmin(admin.ModelAdmin):
    list_display = ("id", "nome", "senha", "email")
    list_display_links = ("id","nome")
    search_fields = ("nome",)


admin.site.register(Funcionario, FuncionariosAdmin)

class ClientesAdmin(admin.ModelAdmin):
    list_display = ("id", "nome", "senha", "email","cnpj")
    # Define que o link para a página de detalhes do cliente será o campo 'id' ou 'nome'
    list_display_links = ("id","nome")
    # Permite pesquisar clientes pelo campo 'nome'
    search_fields = ("nome",)


admin.site.register(Cliente, ClientesAdmin)


class PedidosAdmin(admin.ModelAdmin):
    # Exibe as colunas 'id', 'nome', 'contato' e 'pedido' na listagem de pedidos
    list_display = ("id", "nome", "contato", "pedido")
    # Define que o link para a página de detalhes do pedido será o campo 'id' ou 'nome'
    list_display_links = ("id","nome")
    # Permite pesquisar pedidos pelo campo 'nome'
    search_fields = ("nome",)


admin.site.register(Pedido, PedidosAdmin)
