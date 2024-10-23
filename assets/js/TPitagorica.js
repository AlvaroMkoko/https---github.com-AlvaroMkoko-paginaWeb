function generar() {
    // Crea la tabla HTML
    let output = '<table border="1" cellspacing="0" cellpadding="5">';

    for (let i = 1; i <= 10; i++) {
        output += '<tr>'; // Comienza una nueva fila
        for (let j = 1; j <= 10; j++) {
            output += `<td>${i * j}</td>`; // Añade una celda con el valor de i*j
        }
        output += '</tr>'; // Cierra la fila
    }

    output += '</table>'; // Cierra la tabla

    // Selecciona un elemento en el que se va a mostrar la tabla (por ejemplo, un div con id="resultado").
    document.getElementById('resultado').innerHTML = output;
}