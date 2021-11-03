// ** INIZIALIZZAZIONE CONSTANTI E VARIABILI **//
const btn = document.getElementById('fl_btn-header');
const container = document.getElementById('container');
let squareNumber = '';
let gameLevel = '';


// // 1. Quando preme su Play faccio leggere il valore della select e faccio registrare il numero di quadrati da stampare
document.getElementById('fl_btn-header').addEventListener('click', function(){
  
  container.innerHTML = '';
  const boxSquare = document.createElement('div');
  boxSquare.className = 'box-square';
  container.append(boxSquare);
  
  let valoreLetto = document.getElementById('select-livello').value;
  console.log(valoreLetto);
  
  // const listaRandom = [];
  
  if(valoreLetto == '1'){
    squareNumber = 100;
    gameLevel = 'crazy';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      console.log(sq[i]);
      // for(let i = 0; i < 16; i++){
      //   gererazioneUnivocaNumRandom(listaRandom, 1, squareNumber);
      //   }
      //   console.log(listaRandom);
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
    }
  }else if(valoreLetto == '2'){
    squareNumber = 81;
    gameLevel = 'easy';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      console.log(sq[i]);
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
      // gererazioneUnivocaNumRandom(listaRandom, 1, squareNumber);
    }
  }

  else if(valoreLetto == '3'){
    squareNumber = 49;
    gameLevel = 'hard';
    for(let i = 1; i <= squareNumber; i++){
      squareGenerator (boxSquare, gameLevel);
    }
    const sq = document.getElementsByClassName('square');
    for(let i = 1; i <= sq.length; i++){
      let cella = sq[i-1];
      cella.innerHTML = `<span>${i}</span>`;
      console.log(sq[i]);
      cella.addEventListener('click', function(){
        cella.classList.add('clicked');
      })
      // gererazioneUnivocaNumRandom(listaRandom, 1, squareNumber);

    }
  }
  console.log(squareNumber);
  });
  // -----------------------------------------------------

// **********FUNZIONI****************


// funzione per generare numero random
function numRandom (num1, num2){
  return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
}


// funzione per verificare che il numero random non sia già stato estratto
function gererazioneUnivocaNumRandom(lista, num1, num2){
  let number = null;
  let valid = false;

  while(!valid){
    number = numRandom (num1, num2);
    console.log(number);
    if(!lista.includes(number)){
      valid = false;
      lista.push(number);
    }
  }
  return number;
}

// generatore di square
function squareGenerator (target, level){
    const sq = document.createElement('div');
    // const nR = gererazioneUnivocaNumRandom(lista, num1, num2);
    // controllo se il numero è pari o dispari
    const classes = ['square', level];
    // sq.innerHTML = `<span>${nR}</span>`;
    sq.classList.add(...classes);
    target.append(sq);
    return sq;
  }
















































  // +++++++++++++++++++++++++++++++++++++++++++++++
  // VECCHIA VERSIONE
// §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
//   // ** INIZIALIZZAZIONE CONSTANTI E VARIABILI **//
// const btn = document.getElementById('fl_btn-header');
// // const boxSquare = document.querySelector('.box-square');
// const msgStart = document.getElementById('msg-start');
// const container = document.getElementById('container');
// let squareNumber = '';
// let gameLevel = '';


// // // 1. Quando preme su Play faccio leggere il valore della select e faccio registrare il numero di quadrati da stampare
// document.getElementById('fl_btn-header').addEventListener('click', function(){
//   // msgStart.className = 'hide';
//   // boxSquare.className = 'box-square';
//   container.innerHTML = '';
//   const boxSquare = document.createElement('div');
//   boxSquare.className = 'box-square';
//   container.append(boxSquare);
//   let valoreLetto = document.getElementById('select-livello').value;
//   console.log(valoreLetto);
//   const listaRandom = [];
  
//   if(valoreLetto == '1'){
//     squareNumber = 100;
//     gameLevel = 'crazy';
//     for(let i = 1; i <= squareNumber; i++){
//     squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
//     }
//   }
//   else if(valoreLetto == '2'){
//     squareNumber = 81;
//     gameLevel = 'easy';
//     for(let i = 1; i <= squareNumber; i++){
//       squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
//       }
//   }
//   else if(valoreLetto == '3'){
//     squareNumber = 49;
//     gameLevel = 'hard';
//     for(let i = 1; i <= squareNumber; i++){
//       squareGenerator (boxSquare, listaRandom, 1, squareNumber, gameLevel);
//       }
//   }
//   console.log(squareNumber);
//   });
//   // -----------------------------------------------------

// // **********FUNZIONI****************


// // funzione per generare numero random
// function numRandom (num1, num2){
//   return Math.floor(Math.random() * (num2) + num1);
// }

// // funzione per sapere se un numero è pari o dispari
// function pariODispari(num){
//   if(num % 2) return 'odd';
//   return 'even';
// }

// // funzione per verificare che il numero random non sia già stato estratto
// function gererazioneUnivocaNumRandom(lista, num1, num2){
//   let number = null;
//   let valid = false;

//   while(!valid){
//     number = numRandom (num1, num2);
//     console.log(number);
//     if(!lista.includes(number)){
//       valid = true;
//       lista.push(number);
//     }
//   }
//   return number;
// }

// // generatore di square
// function squareGenerator (target, lista, num1, num2, level){
//     const sq = document.createElement('div');
//     const nR = gererazioneUnivocaNumRandom(lista, num1, num2);
//     // controllo se il numero è pari o dispari
//     const classes = ['square', pariODispari(nR), level];
//     sq.innerHTML = `<span>${nR}</span>`;
//     sq.classList.add(...classes);
//     target.append(sq);
//     return sq;
//   }


