
/*Funcion para que aparezcan los tooltips*/
$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

/*mensaje para agradecer el envío de formulario para contacto */
$('#enviarCorreo').click(function () {
        alert("El correo fue enviado correctamente, gracias por contactarnos")
    });