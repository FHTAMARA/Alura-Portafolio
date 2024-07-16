document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario hasta que se valide

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validación del nombre
    if (name === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    // Validación del correo electrónico
    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return;
    } else {
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
    }

    // Validación del mensaje
    if (message === '') {
        alert('Por favor, ingresa un mensaje.');
        return;
    }

    // Si todas las validaciones pasan
    alert('Formulario enviado con éxito!');
    this.submit(); // Enviar el formulario
});
