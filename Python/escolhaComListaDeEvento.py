import random
n1 = str(input('O primeiro nome...'))
n2 = str(input('O segundo nome...'))
n3 = str(input('O terceiro nome...'))
n4 = str(input('O quarto nome...'))
n5 = str(input('O quinto nome...'))
lista = [n1, n2, n3, n4, n5]
random.shuffle(lista)
print('----------------------------------------------------------------------')
print("A ordem sorteada sera: {}" .format(lista))
print("----------------------------------------------------------------------")
