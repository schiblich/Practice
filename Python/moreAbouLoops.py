listaString = ['apple', 'banana', 'republic'];
for element in listaString:
	print(element);

for i in range(3):
	print(i);
	print(listaString[i]);

for i in range(len(listaString)):
	#print(i);
	print(listaString[i]);
#imprimir multiplos de 3 e 5
print(list(range(1,100)));
total = 0;
for i in range(1,100):
	if i % 3 == 0 or i % 5 == 0:
		total += 1;
print(total);
