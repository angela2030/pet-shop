document.getElementById('formulario').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var tipoMascota = document.querySelector('input[name="tipo-mascota"]:checked');
    var motivoContacto = document.getElementById('motivo-contacto').value;

    if (!nombre || !email || !mensaje || !tipoMascota || !motivoContacto) {
        alert('Por favor complete todos los campos obligatorios.');
        event.preventDefault(); // Evitar que se envíe el formulario si faltan campos
    } else {
        // Simulación de envío exitoso del formulario (aquí puedes agregar tu lógica real de envío)
        setTimeout(function() {
            var mensajeEnviado = document.createElement('p');
            mensajeEnviado.textContent = '¡Su mensaje fue enviado con éxito! Nos pondremos en contacto pronto.';
            document.getElementById('contacto').appendChild(mensajeEnviado);
            document.getElementById('formulario').reset(); // Limpiar el formulario después del envío
        }, 1000); // Simulación de envío, espera 1 segundo
        event.preventDefault(); // Evitar que se envíe el formulario
    }
});


