import math
ang = float(input("Digite o angulo..."))
seno = math.sin(math.radians(ang))
coseno = math.cos(math.radians(ang))
tangente = math.tan(math.radians(ang))
print('*****************************************************************************************************************')
print('O seno e {} o conseno e {} do angulo de {} e sua tangente {}' .format(seno, coseno, ang, tangente))
print('*****************************************************************************************************************')