// 📧 VALIDACIÓN DEL FORMULARIO DE CONTACTO

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const mensajeTextarea = document.getElementById('mensaje');

    // Validación en tiempo real
    nombreInput.addEventListener('blur', function() {
        validateField(this, this.value.trim().length >= 3);
    });

    emailInput.addEventListener('blur', function() {
        validateField(this, validateEmail(this.value));
    });

    mensajeTextarea.addEventListener('blur', function() {
        validateField(this, this.value.trim().length >= 10);
    });

    // Validación al enviar el formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombreValid = nombreInput.value.trim().length >= 3;
        const emailValid = validateEmail(emailInput.value);
        const mensajeValid = mensajeTextarea.value.trim().length >= 10;

        validateField(nombreInput, nombreValid);
        validateField(emailInput, emailValid);
        validateField(mensajeTextarea, mensajeValid);

        if (nombreValid && emailValid && mensajeValid) {
            // Aquí puedes agregar la lógica para enviar el formulario
            console.log('Formulario válido:', {
                nombre: nombreInput.value,
                email: emailInput.value,
                mensaje: mensajeTextarea.value
            });

            // Mostrar mensaje de éxito
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            
            // Limpiar formulario
            form.reset();
            
            // Remover clases de error
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
        }
    });

    // Función para validar email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Función para validar campo
    function validateField(field, isValid) {
        const formGroup = field.closest('.form-group');
        
        if (!isValid) {
            formGroup.classList.add('error');
        } else {
            formGroup.classList.remove('error');
        }
    }
});
