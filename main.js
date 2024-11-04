
// Logica C

let crom_S = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let crom_b = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];


let Cmaj7 = [crom_S[0],crom_S[4], crom_S[7],crom_S[11]]
let C7 = [crom_S[0],crom_S[4], crom_S[7],crom_b[10]]
let Cm7 = [crom_S[0],crom_b[3], crom_S[7],crom_b[10]]
let Cm7b5 = [crom_S[0],crom_b[3], crom_b[6],crom_b[10]]
let Cdim7 = [crom_S[0],crom_b[3], crom_b[6],crom_b[9]]


console.log(Cmaj7);
console.log(C7);
console.log(Cm7);
console.log(Cm7b5);
console.log(Cdim7);

// logica Db 

let crom_S_Db = ["D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];
let crom_b_Db = ["D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C"];

let Dbmaj7 = [crom_S_Db[0], crom_S_Db[4], crom_S_Db[7], crom_S_Db[11]];
let Db7 = [crom_S_Db[0], crom_S_Db[3], crom_S_Db[6], crom_b_Db[10]];
let Dbm7 = [crom_S_Db[0], crom_b_Db[2], crom_S_Db[6], crom_b_Db[10]];
let Dbm7b5 = [crom_S_Db[0], crom_b_Db[2], crom_b_Db[5], crom_b_Db[10]];
let Dbdim7 = [crom_S_Db[0], crom_b_Db[2], crom_b_Db[5], crom_b_Db[8]];

console.log(Dbmaj7);
console.log(Db7);
console.log(Dbm7);
console.log(Dbm7b5);
console.log(Dbdim7);

// logica D

let crom_S_D = ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#"];
let crom_b_D = ["D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭"];

let Dmaj7 = [crom_S_D[0], crom_S_D[4], crom_S_D[7], crom_S_D[11]];
let D7 = [crom_S_D[0], crom_S_D[4], crom_S_D[7], crom_b_D[10]];
let Dm7 = [crom_S_D[0], crom_b_D[3], crom_S_D[7], crom_b_D[10]];
let Dm7b5 = [crom_S_D[0], crom_b_D[3], crom_b_D[6], crom_b_D[10]];
let Ddim7 = [crom_S_D[0], crom_b_D[3], crom_b_D[6], crom_b_D[9]];

console.log(Dmaj7);
console.log(D7);
console.log(Dm7);
console.log(Dm7b5);
console.log(Ddim7);






