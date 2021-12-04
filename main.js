const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(twoDimArray){
    this._field = twoDimArray;
}
print () {
    for (let i = 0; i <this._field.length;i++){
        console.log(this._field[i].join());
    }
}
}

const kkt = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  kkt.print();