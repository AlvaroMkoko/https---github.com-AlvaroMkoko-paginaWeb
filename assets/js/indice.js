// Función para crear un índice de páginas
function generarIndice() {
    const paginas = [
        { nombre: "Listas", url: "pages/listas.html" },
        { nombre: "Tabla", url: "pages/tabla.html" },
        { nombre: "Tabla Pitagorica", url: "pages/tbpitagorica.html" },
        { nombre: "Operaciones Con JavaScript", url: "pages/OperacionesConJS.html"},
        { nombre: "Genarar Clave", url: "pages/curp.html"}
    ];

    const lista = document.getElementById("listaPaginas");
    lista.innerHTML = ""; // Limpiar cualquier contenido previo

    paginas.forEach(pagina => {
        const item = document.createElement("li");
        const enlace = document.createElement("a");
        enlace.href = pagina.url;
        enlace.textContent = pagina.nombre;
        item.appendChild(enlace);
        lista.appendChild(item);
    });
}
