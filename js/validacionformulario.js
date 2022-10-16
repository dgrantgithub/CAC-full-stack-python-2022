var formulario = document.getElementsByName('form')[0],
boton = document.getElementById('boton')

///validacion del nombre

var validarNombre = function (e) {
    if(formulario.nombre.value==0){
        alert("Completar el campo de NOMBRE")
        e.preventDefault()
    }
}

var validarApellido = function (e) {
    if(formulario.apellido.value==0){
        alert("Completar el campo de APELLIDO")
        e.preventDefault()
    }
}

var validarNumero = function (e) {
    if(formulario.numero.value==0){
        alert("Completar el campo de NUMERO")
        e.preventDefault()
    }
}

var validarEmail = function (e) {
    if(formulario.email.value==0){
        alert("Completar el campo de EMAIL")
        e.preventDefault()
    }
}

var validarAsunto = function (e) {
    if(formulario.asunto.value==0){
        alert("Completar el campo de ASUNTO")
        e.preventDefault()
    }
}

var validarMensaje = function (e) {
    if(formulario.mensaje.value==0){
        alert("Completar el campo de MENSAJE")
        e.preventDefault()
    }
}

var validar = function (e) {
    validarNombre(e)
    validarApellido(e)
    validarNumero(e)
    validarEmail(e)
    validarAsunto(e)
    validarMensaje(e)
}

formulario.addEventListener("submit", validar)