// Función para generar la Clave
function generarClave() {
    const nombre = document.getElementById("nombre").value.trim().toUpperCase();
    const primerApellido = document.getElementById("primerApellido").value.trim().toUpperCase();
    const segundoApellido = document.getElementById("segundoApellido").value.trim().toUpperCase();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Extraer la información de la fecha de nacimiento
    const [anio, mes, dia] = fechaNacimiento.split("-");
    const anioDosDigitos = anio.slice(-2);

    // Generar los primeros 4 caracteres del nombre y apellidos
    const cl = (
        obtenerIniciales(primerApellido, segundoApellido, nombre) + anioDosDigitos + mes + dia
    );

    let clave = '<h2> Clave Generada: ' + cl + ' </h2>';

    document.getElementById("resultadoClave").innerHTML = clave;
}

// Función para obtener las iniciales de apellidos y nombre
function obtenerIniciales(primerApellido, segundoApellido, nombre) {
    const inicialPA = primerApellido.charAt(0);
    const vocalPA = primerApellido.slice(1).match(/[AEIOU]/)?.[0] || "X";
    const inicialSA = segundoApellido.charAt(0) || "X";
    const inicialN = nombre.charAt(0);
    return inicialPA + vocalPA + inicialSA + inicialN;
}
