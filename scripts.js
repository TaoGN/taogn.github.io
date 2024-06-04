document.getElementById('idiomas');
let menu_item_lenguage = document.querySelector('.menu_item_lenguage');

menu_item_lenguage.addEventListener('click', function() {
    idiomas.classList.toggle('idiomas-toggle');
});

function confirmacion() {
    var respuesta = confirm("¿Deseas enviar esta información?");
    if (respuesta == true) {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Validación de Formulario
    function validateForm() {
        const form = document.querySelector('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.querySelector('input[name="name"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();

            if (name === '' || email === '') {
                alert('Please fill in all required fields.');
                return;
            }
            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
        });
    }

    // Contador de Caracteres
    function addCharacterCounter() {
        const textarea = document.querySelector('textarea[name="message"]');
        const counter = document.createElement('div');
        counter.classList.add('char-counter');
        textarea.parentNode.insertBefore(counter, textarea.nextSibling);

        textarea.addEventListener('input', function() {
            const maxLength = textarea.getAttribute('maxlength');
            const currentLength = textarea.value.length;
            counter.textContent = `${currentLength}/${maxLength} characters`;
        });
    }

    // Botón de Volver al Principio
    function addBackToTopButton() {
        const button = document.createElement('button');
        button.textContent = 'Back to Top';
        button.classList.add('back-to-top');
        document.body.appendChild(button);

        button.addEventListener('click', function() {
            smoothScrollToTop();
        });

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
    }

    function smoothScrollToTop() {
        const duration = 1300;
        const start = window.scrollY;
        const startTime = performance.now();

        function scroll() {
            const currentTime = performance.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start * (1 - progress));
            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        }

        requestAnimationFrame(scroll);
    }

    // Llamando a las funciones
    validateForm();
    addCharacterCounter();
    addBackToTopButton();
});