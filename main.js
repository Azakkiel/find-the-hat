const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(twoDimArray){
    this._field = twoDimArray;
    this._posX = 6;
    this._posY = 1;
    this._hatPos = [[0],[0]];
    this.holePos = [[0],[0]];
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
//checks if player is on hat, hole or out of bounds and ends the game if any of those are true
positionCheck() {
    let currentPos =[[this._posX],[this._posY]]
    console.log(currentPos.toString())
        if (currentPos[0].toString() == this._hatPos[0].toString() && currentPos[1].toString() == this._hatPos[1].toString()){
        console.log('Got the hat, you win.');
        return;
    } else if (currentPos[0].toString() === this.holePos[0].toString() && currentPos[1].toString() === this.holePos[1].toString() ){
        console.log('Fell into a hole, you lose.');
        return;
    } else if (currentPos[1].toString() > this._field.length || currentPos[0].toString() > this._field[0].length){
        console.log('Out ouf bounds, you lose.');
        return;
    }
}


}

const kkt = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  kkt.positionCheck();