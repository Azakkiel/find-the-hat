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
    //this._hatPos = [[1],[1]]; //potom zmenit
    //this.holePos = [[2],[0]]; //potom zmenit
}
print () {
    for (let i = 0; i <this._field.length;i++){
        console.log(this._field[i].join(' '));
    }
}
//treba dorobit umiestnenie capice a dier dopici
static generateField(height, width,holes){
let newField = [];
for (let i = 0; i < height; i++) {
    newField.push([]);
    for (let j = 0; j < height; j++) {
        newField[i].push(fieldCharacter)
    };
  };
  //hat generation
 let randomNumX = Math.floor(Math.random()*width);
 let randomNumY = Math.floor(Math.random()*height);
 let hatPos = [[0],[0]];
 hatPos[0] = randomNumX;
 hatPos[1] = randomNumY;
 newField[randomNumX][randomNumY] = hat;
 //hole generation
 /*
 console.log(newField);
 newField[0][1] = '85';
 console.log(newField)
 */
 let i =0;
 while (i < holes){
    let randomNumHoleX = Math.floor(Math.random()*width);
    let randomNumHoleY = Math.floor(Math.random()*height);
    while (newField[randomNumHoleY][randomNumHoleX] == hat || newField[randomNumHoleY][randomNumHoleX] == hole){
        randomNumHoleX = Math.floor(Math.random()*width);
        randomNumHoleY = Math.floor(Math.random()*height);
    };
    newField[randomNumHoleY][randomNumHoleX] = hole;
    i++;
 }
 newField[0][0] = pathCharacter;
 //console.log(newField);
return newField;
}
//takes in direction from user and moves him
promptInput() {
    const input = prompt('Enter a direction: N, W, E, S: ');
    //console.log(input)
    if (input == 'N'){
       if (!this._posY == 0){
        this._posY --;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
       } else {console.log('You went out of bounds, you lose.')}
    } else if (input == 'S'){
        if (this._posY + 1 < this._field.length){
        this._posY ++;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
        } else {console.log('You went out of bounds, you lose.')};
    } else if (input == 'W'){
        if (!this._posX == 0){
        this._posX --;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
        }else {console.log('You went out of bounds, you lose.')};
    } else if (input== 'E'){
        if (this._posX + 1 < this._field[0].length){
        this._posX ++;
        this.positionCheck();
        this.addPathChar();
        this.print();
        this.promptInput();
        } else {console.log('You went out of bounds, you lose.')};
        
    } else {
        console.log('wrong input, try again')
        this.promptInput();
    }
}
//checks if player is on hat, hole or out of bounds and ends the game if any of those are true
positionCheck() {
    let currentPos =[[this._posX],[this._posY]]
    console.log(currentPos.toString())
    console.log(this._field[this._posY][this._posX])
        if (this._field[this._posY][this._posX] == hat){
        throw ('Got the hat, you win.');
    } else if (this._field[this._posY][this._posX] == hole){
        throw ('Fell into a hole, you lose.');
        
    } else if (currentPos[1].toString() > this._field.length-1 || currentPos[0].toString() > this._field[0].length-1 || currentPos[1].toString() < 0 || currentPos[0].toString() < 0 ){
        throw ('Out ouf bounds, you lose.');
    }else {return false};
}
addPathChar() {
    this._field[this._posY][this._posX] = pathCharacter;
}

}

/*const kkt = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  */
  const kkt = new Field(Field.generateField(5,5,3));
  kkt.print();
  kkt.promptInput();