from random import randint
computador = randint(0,5);
print('--=--'*20)
print('Vou pensar em um número de  0 até 5...Tente adivinhar!')
jogador = (int(input("Digite  um numero...")))
print('-=--'*20)
if  jogador == computador:
    print('Parabens!...Acertou')
else:
    print('tente outra vez')
print("---"*20)
print('pensei no numero {}' .format(computador));
