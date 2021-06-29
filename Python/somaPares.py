soma = 0
cont = 0
for c in range(1,7):
    print('==='*25)
    num = int(input('Insira um numero... '))
    soma = soma + num
    cont += 1
print('vc  informou {} numeros e a soma foi {} '.format(cont,soma))
	#sleep(0.5)
print('Fim')


