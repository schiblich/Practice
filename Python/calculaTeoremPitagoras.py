import math 
catetoAdjacente = float(input("Digite um numero..."))
catetoOposto =  float(input("Digite outro numero..."))
res = math.hypot(catetoAdjacente,catetoOposto)  
print("A hipotenusa tem como valor {}:" .format(res))