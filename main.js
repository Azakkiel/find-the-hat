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
    this._hatPos = [[1],[2]];
    this.holePos = [[2],[0]];
}
print () {
    for (let i = 0; i <this._field.length;i++){
        console.log(this._field[i].join(' '));
    }
}
//takes in direction from user and moves him
promptInput() {
    const input = prompt('Enter a direction: N, W, E, S: ');
    console.log(input)
    if (input == 'N'){
        this._posY --;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
    } else if (input == 'S'){
        this._posY ++;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
    } else if (input == 'W'){
        this._posX --;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
    } else if (input== 'E'){
        this._posX ++;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
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
        return true;
    } else if (currentPos[0].toString() === this.holePos[0].toString() && currentPos[1].toString() === this.holePos[1].toString() ){
        console.log('Fell into a hole, you lose.');
        return false;
    } else if (currentPos[1].toString() > this._field.length-1 || currentPos[0].toString() > this._field[0].length-1){
        console.log('Out ouf bounds, you lose.');
        return false;
    }
}
addPathChar() {
    this._field[this._posY][this._posX] = pathCharacter;
}

}

const kkt = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  kkt.promptInput();