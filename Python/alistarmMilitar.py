from  datetime import date 
anoNascimento = int(input('Digite o ano que vc  nasceu...'))
atual = date.today().year
idade = atual - anoNascimento
print('==='*25)
if  idade >= 18:
    print('pode alistar')
elif idade < 18:
    print('nao precisa alistar')
print('==='*25)


