/*
  A partire da un array di stringhe, 
  crea un secondo array formattando le stringhe del primo array in minuscolo e con 
  l’iniziale maiuscola.

  Es: [''pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const names = ['pippo', 'PLUTO', 'Paperino']
console.log(names)
const newArr = names.map(names =>  names[0].toUpperCase() + names.slice(1).toLowerCase())
console.log(newArr)