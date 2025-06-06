function ejercicio1(texto) {
  const palabras = texto.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/);
  const conteo = {};
  palabras.forEach(p => conteo[p] = (conteo[p] || 0) + 1);
  return `<pre>${JSON.stringify(conteo, null, 2)}</pre>`;
}
function ejecutarEjercicio1() {
  const texto = document.getElementById("texto1").value;
  document.getElementById("salida1").innerHTML = ejercicio1(texto);
}

function ejercicio2(productos, categoria) {
  const filtrados = productos
    .filter(p => p.categoria === categoria && p.precio < 25)
    .map(p => p.nombre);
  return `<p>Productos filtrados: ${filtrados.join(', ')}</p>`;
}
function ejecutarEjercicio2() {
  const categoria = document.getElementById("categoria2").value.toLowerCase();

  const productos = [
    { nombre: "Camiseta", precio: 20, categoria: "ropa" },
    { nombre: "Pantalón", precio: 30, categoria: "ropa" },
    { nombre: "Laptop", precio: 900, categoria: "tecnología" }
  ];

  const resultadoFiltrado = productos
    .filter(p => p.categoria.toLowerCase() === categoria && p.precio < 25)
    .map(p => p.nombre);

  document.getElementById("salida2").innerHTML = `<p>Resultado: [${resultadoFiltrado.join(', ')}]</p>`;
}
function ejercicio3(nombres) {
  const formateados = nombres.map(nombre => {
    return nombre.trim().toLowerCase()
      .split(/\s+/)
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');
  });
  return `<p>Nombres formateados: ${formateados.join(', ')}</p>`;
}
function ejecutarEjercicio3() {
  const input = document.getElementById("nombres3").value;
  const nombres = input.split(',');
  document.getElementById("salida3").innerHTML = ejercicio3(nombres);
}
function ejecutarEjercicio4() {
  const base = document.getElementById("base4").value.trim();
  const lista = document.getElementById("lista4").value.split(',').map(p => p.trim());
  document.getElementById("salida4").innerHTML = ejercicio4(base, lista);
}

function ejercicio4(palabra, lista) {
  const ordenar = str => str.split('').sort().join('');
  const baseOrdenada = ordenar(palabra);
  const anagramas = lista.filter(p => ordenar(p) === baseOrdenada);
  return `<p>Anagramas encontrados: [${anagramas.join(', ')}]</p>`;
}
function ejecutarEjercicio5() {
  const entrada = document.getElementById("usuarios5").value;
  const datos = entrada.split(',').map(e => e.trim());
  document.getElementById("salida5").innerHTML = ejercicio5(datos);
}
function ejercicio5(usuarios) {
  const totales = {};
  usuarios.forEach(str => {
    const [user, puntos] = str.split(':');
    const nombre = user.trim().toLowerCase();
    const valor = parseInt(puntos);
    if (!isNaN(valor)) {
      totales[nombre] = (totales[nombre] || 0) + valor;
    }
  });
  return `<pre>${JSON.stringify(totales, null, 2)}</pre>`;
}