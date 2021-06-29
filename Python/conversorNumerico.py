numero = int(input('Digite o numero...'))
print('==='*25)
print('Escolha uma das bases de conversao')
print('[1] para binario')
print('[2] para octal')
print('[3] para hexadecimal')
opcao = int(input('Sua opcao:...'))
if  opcao == 1:
    print('{}'.format(bin(opcao)))
elif opcao == 2:
    print('{}'.format(oct(opcao)))
elif opcao == 3:
    print('{}'.format(hex(opcao)))
print('==='*25)

