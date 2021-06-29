#total = 0;
#for i in range(1,5):
#	total += i;
#	print(total)
##
#total2 = 0;
#j = 1;
#while j < 25:
#	total2 += j;
#	j += 1
#	print(total2);
#
certaLista = [5, 4, 3, 1, -2,-3, -5];
total4 = 0;
for element in certaLista:
	if element <= 0:
		break
	total4 += element
print(total4);
