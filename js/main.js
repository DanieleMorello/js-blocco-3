/*
  Crea un array composto da 10 automobili.
  Ogni oggetto automobile avrà le seguenti proprietà:
  marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

  Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina,
  nel secondo solo le auto a diesel, nel terzo il resto delle auto.

  Infine stampa separatamente i 3 array.
 */

  const car = [
    [
      {
      marca: 'auto1',
      modello: 'car1',
      alimentazione: 'benzina'
     }
    ],
    [
      {
        marca: 'auto2',
        modello: 'car2',
        alimentazione: 'diesel'
       }
    ],
    [
      {
        marca: 'auto3',
        modello: 'car3',
        alimentazione: 'elettrico'
       },
       {
        marca: 'auto4',
        modello: 'car4',
        alimentazione: 'elettrico'
       },
       {
        marca: 'auto5',
        modello: 'car5',
        alimentazione: 'elettrico'
       },
       {
        marca: 'auto6',
        modello: 'car6',
        alimentazione: 'elettrico'
       },
       {
        marca: 'auto7',
        modello: 'car7',
        alimentazione: 'elettrico'
       },
       {
        marca: 'auto8',
        modello: 'car8',
        alimentazione: 'elettrico'
       },
       {
        marca: 'auto9',
        modello: 'car9',
        alimentazione: 'elettrico'
       },
       {
        marca: 'auto10',
        modello: 'car10',
        alimentazione: 'elettrico'
       }
    
    ]

  ]

  car.forEach((array1) => console.log(array1))