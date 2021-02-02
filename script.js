'use strict';


//Selecting Elemnts
const score0El = document.getElementById('score--0');

const score1El= document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnRoll =document.querySelector('.btn--roll');

const btnHold =document.querySelector('.btn--hold');

const btnNew =document.querySelector('.btn--new');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');

const player1El = document.querySelector('.player--1');

let current = 0;
let score =0;
let randomNumber = ()=> {return Math.trunc((Math.random()*6))+1};

score0El.textContent = 0;

score1El.textContent = 0;

diceEl.classList.add('hidden');

const toggle = function(){
    if(player1El.classList.contains('player--active')){
        player1El.classList.remove('player--active');
        player0El.classList.add('player--active');
    }else{
        player0El.classList.remove('player--active');
        player1El.classList.add('player--active');
        
    }
}


btnRoll.addEventListener('click' , function(){
let rnd = randomNumber();

diceEl.classList.remove('hidden');
diceEl.src = `dice-${rnd}.png`;

if(rnd!==1){
    if(player0El.classList.contains('player--active')){
        
        current= Number(current0El.textContent);
        current+=rnd;
        current0El.textContent = current;

    }else{

        current= Number(current1El.textContent);
        current+=rnd;
        current1El.textContent = current;

    }
}else{
    current1El.textContent=0;
    current0El.textContent=0;
    toggle();

}

});



btnHold.addEventListener('click',function(){
    if(player0El.classList.contains('player--active')){
        current =Number(current0El.textContent);
        score=Number(score0El.textContent);
        score += current;
        score0El.textContent = score;
        //winning option
        if(score>=100){
            player0El.classList.add('player--winner');
            current0El.textContent =0 ;
            btnHold.classList.add('hidden');
            btnRoll.classList.add('hidden');
            diceEl.classList.add('hidden');
            return;
        }
        current0El.textContent =0 ;
       toggle();

    }else{
        current =Number(current1El.textContent);
        score=Number(score1El.textContent);
        score += current;
        score1El.textContent = score;
        if(score>=100){
            player1El.classList.add('player--winner');
            current1El.textContent =0 ;
            btnHold.classList.add('hidden');
            btnRoll.classList.add('hidden');
            diceEl.classList.add('hidden');
            return;
        }
        current1El.textContent =0 ;
        toggle();
    }


});

btnNew.addEventListener('click',function(){
    current0El.textContent =0 ;
    current1El.textContent=0;
    score0El.textContent=0;
    score1El.textContent=0;
    if(!diceEl.classList.contains('hidden')){
    diceEl.classList.add('hidden');
    }
    if(btnRoll.classList.contains('hidden')){
    btnRoll.classList.remove('hidden');
    }
    if(btnHold.classList.contains('hidden')){
    btnHold.classList.remove('hidden');
    }

    if(!player0El.classList.contains('player--active')){
        toggle();

    }
    if(player0El.classList.contains('player--winner')){
        player0El.classList.remove('player--winner');
    }
    
    if(player1El.classList.contains('player--winner')){
        player1El.classList.remove('player--winner');
    }
    


});

/*

'use strict';

const fs = require('fs');


process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

function logger(msg) {
  ws.write(`${msg.text}\n`);
}
function joinedLogger(level, sep) {
  // write your code here
  
  let f = function(){
      let s = '';
      for (var i=0; i<arguments.length; i++) {
          if(arguments[i].level>=level){
              if(s.length>0){
                  s = s + sep +  arguments[i].text;
                  
              }else{
                  s= arguments[i].text;
              }
          }
      }
      //console.log(s);
     process.stdout.write(s);
  }
  
  return f;
}
function main() {
*/