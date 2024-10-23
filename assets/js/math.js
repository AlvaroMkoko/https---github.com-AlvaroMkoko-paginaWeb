// Función para verificar si un número es par o impar
function esParOImpar() {
    const numero = parseInt(document.getElementById("numeroParImpar").value);
    const resultado = (numero % 2 === 0) ? "El número es par" : "El número es impar";
    document.getElementById("resultadoParImpar").innerText = resultado;
}

// Función para mostrar la tabla de multiplicar de un número
function mostrarTablaMultiplicar() {
    const numero = parseInt(document.getElementById("numeroTabla").value);
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    document.getElementById("resultadoTabla").innerText = tabla;
}

// Función para realizar un producto mediante sumas
function productoConSumas() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    let producto = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
        producto += num1;
    }
    // Si num2 es negativo, cambiar el signo del resultado
    producto = (num2 < 0) ? -producto : producto;
    document.getElementById("resultadoProducto").innerText = `El producto es: ${producto}`;
}

// Función para leer una secuencia de números y encontrar la posición del mayor
function encontrarMayor() {
    const numeros = document.getElementById("numeros").value.split(",").map(Number);
    //let mayor = Math.max(...numeros);
    //let posicion = numeros.indexOf(mayor) + 1; // +1 para la posición en términos humanos
    let mayor = numeros[0];
    let posicion = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
            posicion = i;
        }
    }

    document.getElementById("resultadoMayor").innerText = `El mayor valor es ${mayor} en la posición ${posicion}`;
}

//Función que suma 2 Vectores
function sumaVectores(){
    const vectorA = document.getElementById("vectorA").value.split(",").map(Number);
    const vectorB = document.getElementById("vectorB").value.split(",").map(Number);

    if (vectorA.length !== vectorB.length) {
        document.getElementById("resultadoSumaVectores").innerText = "Los vectores deben tener la misma longitud.";
        return;
    }

    const vectorC = [];
    for (let i = 0; i < vectorA.length; i++) {
        vectorC.push(vectorA[i] + vectorB[i]);
    }

    document.getElementById("resultadoSumaVectores").innerText = `Vector C: [${vectorC.join(", ")}]`;
}

//Función que calcula la Media de una secuencia de Números
function calcularMedia(){
    const numerosM = document.getElementById("numerosM").value.split(",").map(Number);

    let suma=0;

    for (let i = 0; i < numerosM.length; i++) {
        suma += numerosM[i];
    }
    suma = suma/numerosM.length;
    document.getElementById("resultadoMedia").innerText = `La Media es de ${suma}`;
}

//Función que ordena una Secuencia de números
function ordenarSecuencia(){
    const secuencia = document.getElementById("secuencia").value.split(",").map(Number);

    // Método de burbuja para ordenar los números
    for (let i = 0; i < secuencia.length - 1; i++) {
        for (let j = 0; j < secuencia.length - 1 - i; j++) {
            if (secuencia[j] > secuencia[j + 1]) {
                const temp = secuencia[j];
                secuencia[j] = secuencia[j + 1];
                secuencia[j + 1] = temp;
            }
        }
    }

    document.getElementById("resultadoOrdenar").innerText = `Números ordenados: [${secuencia.join(", ")}]`;
}

// Función para obtener la longitud, mayúsculas y minúsculas de cada texto
function procesarTextos() {
    const textos = document.getElementById("secuenciaTextos").value.split(",");
    let resultado = "";

    textos.forEach(texto => {
        const textoTrim = texto.trim(); // Eliminar espacios al inicio y final
        const longitud = textoTrim.length;
        const mayusculas = textoTrim.toUpperCase();
        const minusculas = textoTrim.toLowerCase();

        resultado += `Texto: "${textoTrim}", Longitud: ${longitud}, Mayúsculas: "${mayusculas}", Minúsculas: "${minusculas}"\n`;
    });

    document.getElementById("resultadoTextos").innerText = resultado;
}
