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
positionCheck() {
    let currentPos =[[this._posX],[this._posY]];
    if (currentPos === this.hatPos){
        console.log('Got the hat, you win.');
        return;
    } else if (currentPos === this.holePos){
        console.log('Fell into a hole, you lose.');
        return;
    } else if (currentPos[1] > this._field.length || currentPos[0] > this._field[0].length){
        console.log('Out ouf bounds, you lose.')
    }
}


}

const kkt = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  kkt.positionCheck();