//Crear una función asíncrona que contenga la URL en una variable.
const mostrarTitulos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    return new Promise(async (resolve) => {
        try { // Luego mediante el bloque de try/catch conectarse a la URL indicada
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    const listaDeTitulos = data.filter(d => d.id < 21).map(d => d.title) // .filter nos permite solo para aquellos cuyo id sea menor a 21 y map solo hace return del .title de cada uno
                    resolve(listaDeTitulos)
                });
        } catch (error) {
            console.log(error)
        }
    })
}
const getMensaje = () => { // ● Se debe crear otra función que retorne una promesa, la cual debe tardar tres (3) segundos en resolver
    return new Promise((resolve) => {
        setTimeout(() => { resolve('Información enviada') }, 3000)
    })
}


// Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco (5), de forma directa con await,
// para ser mostrado en la consola del navegador, agregando el llamado a las dos funciones principales.
const llamadaFunciones = async () => {
    const titulos = await mostrarTitulos()
    const resp = await getMensaje();
    console.log(titulos)
    console.log(resp)
}
llamadaFunciones()
