const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(twoDimArray){
    this._field = twoDimArray;
}
get field() {
    return this_field;
}
set field(twoDimArray){
    this._field = twoDimArray;
}
print () {
    console.log(this._field.join())
}
}
const kkt = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  kkt.print();