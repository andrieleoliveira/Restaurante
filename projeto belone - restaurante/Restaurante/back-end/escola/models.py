from django.db import models
from django.contrib.auth.models import User

class Aluno(models.Model):
    nome = models.CharField( max_length=100)
    email = models.EmailField(max_length=100)

    def __str__(self):
        return self.nome

class Funcionario(models.Model):
    nome = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class Cliente(models.Model):
    nome = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    cnpj = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Pedido(models.Model):
    nome = models.CharField(max_length=100)
    contato = models.CharField(max_length=100)
    pedido = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    

    

    

    

