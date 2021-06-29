ano = int(input('digite um ano...  '))
print('==='*24)
if ano % 4  == 0 and ano % 100  != 0 or ano % 400  == 0:
    print('{} é um ano bisexto... '.format(ano))
else:
    print('{} não é um ano bisexto... '.format(ano))