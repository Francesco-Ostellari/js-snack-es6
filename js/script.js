/* Consegna:
Scrivere una funzione(e lanciarla) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
 */

const numA = 2;
const numB = 5;
const array2 = myFunction(numA, numB);


function myFunction(numA, numB) {
  const names = ['Paolo', 'Maria', 'Chiara', 'Federico', 'Mattia', 'Stefano', 'Martina'];
  const array2 = [];
  names.forEach((name, index) => {
    if (index >= numA && index <= numB) {
      array2.push(name);
    }
  });

  console.log(names, array2);
  return array2;
}
