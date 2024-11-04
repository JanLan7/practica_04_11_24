let crom_S = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let crom_b = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];

let acordes = {
    "Cmaj7": [crom_S[0], crom_S[4], crom_S[7], crom_S[11]],
    "C7": [crom_S[0], crom_S[4], crom_S[7], crom_b[10]],
    "Cm7": [crom_S[0], crom_b[3], crom_S[7], crom_b[10]],
    "Cm7b5": [crom_S[0], crom_b[3], crom_b[6], crom_b[10]],
    "Cdim7": [crom_S[0], crom_b[3], crom_b[6], crom_b[9]]
};

function obtenerAcorde() {
    let acordeDeseado = prompt("Escribe el acorde que deseas conocer (ej. Cmaj7, C7, Cm7, Cm7b5, Cdim7):");
    if (acordes[acordeDeseado]) {
        alert("El acorde " + acordeDeseado + " está compuesto por: " + acordes[acordeDeseado]);
    } else {
        alert("Acorde no encontrado");
    }
}

obtenerAcorde();
