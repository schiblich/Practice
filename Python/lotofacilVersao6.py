print('==='*35)
print('Lotofacil')
print('==='*35)
print('=======================================================Numeros Primos========================================================')
print('--Na lotofacil os  numeros primos sao: 2 3 5 7 11 13 17 19 23, só 6 destes saem em cada sorteio... ')
print('=============================================================================================================================')
n1 = int(input('digite a frequencia para 2...'))
n2 = int(input('digite a frequencia para 3...'))
n3 = int(input('digite a frequencia para 5...'))
n4 = int(input('digite a frequencia para 7...'))
n5 = int(input('digite a frequencia para 11...'))
n6 = int(input('digite a frequencia para 13...'))
n7 = int(input('digite a frequencia para 17...'))
n8 = int(input('digite a frequencia para 19...'))
n9 = int(input('digite a frequencia para 23...'))
i = 7 
med = c1 +  c2 + c3 + c4 + c5 +  c6 + c7 + c8
c1  = n1 + n2 + n3 
if c1 >= i:
    print(c1)
c2 = n1 + n3 +n4
elif n2 == i:
    print('3, ')
elif n3 == i:
    print('5, ')
elif n4 == i:
    print('7, ')
elif n5 == i:
    print('11,')
elif n6 == i:
    print('13,')
elif n7 == i:
    print('17, ')
elif n8 == i:
    print('19, ')
elif n9 == i:
    print('23, ')

print(i)

