primeiro = int(input('Escreva um numero para o primeiro termo...'))
razao =  int(input('Razao:   '))
decimo = int(primeiro + (10  - 1) *  razao)
for c in range(primeiro,decimo,razao):
     print('{}'.format(primeiro, end='>'))

