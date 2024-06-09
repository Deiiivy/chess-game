let tablero = document.getElementById("tablero")


for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8;j++){
        const celda = document.createElement('div')
        celda.classList.add('celda')
        celda.classList.add((i, j) % 2 === 0 ? 'blanca' : 'negra');
        celda.dataset.fila = i;
        celda.dataset.columna = j;
        tablero.appendChild(celda);
    }
}