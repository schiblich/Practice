hipotenusa = float(input('Digite o numero hipoenusa'))
adjacente = float(input('Digite o numero adjacente'))
oposto = float(input('Digite o numero oposto'))
if hipotenusa < adjacente + oposto and adjacente < hipotenusa + oposto and oposto < hipotenusa +adjacente:
    print('é  adequado para formar triangulo')
else:
    print('Não é adequado para formar Triangulo')