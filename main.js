const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(twoDimArray){
    this._field = twoDimArray;
    this._posX = 0;
    this._posY = 0;
}
print () {
    for (let i = 0; i <this._field.length;i++){
        console.log(this._field[i].join(' '));
    }
}
//takes in direction from user and moves him
promptInput() {
    const input = prompt('Enter a direction: N, W, E, S: ');
    if (input == 'N'){
        this._posY --;
    } else if (input == 'S'){
        this._posY ++;
    } else if (input == 'W'){
        this._posX --;
    } else if (input== 'E'){
        this._posY ++;
    } else {
        console.log('wrong input, try again')
        this.promptInput();
}
}


}

const kkt = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  kkt.promptInput();