        let url = 'https://63554889da523ceadcfe628d.mockapi.io/review' //variable donde hacemos referencia al origen de los datos
        fetch(url) //solicitud a la url (promesa)
            .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
            .then(data => showReview(mostrarData(data))) //llamamos a la función mostrardata()
            .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch
            
        const mostrarData = (data) => {
            let cliente = [];
            for (let i = 0; i<data.length; i++){
                cliente[i] = `<div class="usuario">
                <img src="${data[i].avatar}" width="100px" class="img-fluid rounded-circle">
                <p>Cliente: ${data[i].name}</p>
                <p>Opinión: ${data[i].review}</p>
                </div>`
            }
            document.getElementById("resena").innerHTML = cliente.join('');
        }
        
       
        let resenaIndex = 0;
        function showReview() {
            let i;
            let usuario = []
            usuario = document.getElementsByClassName("usuario");
            for (i = 0; i < usuario.length; i++) {
                console.log(usuario[i])
                usuario[i].style.display = 'none';  
              }             
              resenaIndex++;
            
              if (resenaIndex > usuario.length) {resenaIndex = 1}
              usuario[resenaIndex-1].style.display = "block";
              setTimeout(showReview, 2000);
        }

/* var contenido = document.querySelector('#resenas')

function traer_dos() {
    let url = 'https://63554889da523ceadcfe628d.mockapi.io/review'
    fetch(url)
    .then(response => response.json()) // con .json la convierto a formato JSON y la guardo en 'response'
    // .then(data => console.log(data)) // imprime data por consola
    .then(response => {
        // console.log(response)
        // document.write(response[0].avatar) // prueba
        document.write(`
        <img src="${response[0].avatar}" width="100px" class="img-fluid rounded-circle">
        <p>Cliente: ${response[0].name}</p>
        <p>Opinión: ${response[0].review}</p>
        `)
     })
    } */


    
/*     .then(data => console.log(data))
    .catch(error => console.log('Ocurrió un error', error)) // si la promesa de fetch np se resuelve satisfactoriamente, catch atrapa el error */





/* var objJSON = {
    "createdAt" : "2022-10-23T04:59:57.356Z",
    "name" : "Carol Kiehn",
    "avatar" : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg",
    "review" : "review 1",
    "punt" : 13,
    "id" : "1"
}
 */
// document.write("Fecha ", objJSON.createdAt)


// los datos se pueden guardar como .json y abrir con vscode.

// var objJSON = '{ "createdAt" : "2022-10-23T04:59:57.356Z", "name" : "Carol Kiehn", "avatar" : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg", "review" : "review 1", "punt" : 13, "id" : "1"}'

// var pdJSON = JSON.parse(objJSON) // convierte JSON en JS
// document.write(pdJSON.avatar)