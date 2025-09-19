//solicitar-consulta.js

document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;
    const form = document.getElementById('formulario');
    const steps = document.querySelectorAll('.fc-step');
    const progress = document.querySelectorAll('.fc-progress__step');

    function showStep(step) {
        steps.forEach(s => {
            s.classList.toggle('fc-step--active', Number(s.dataset.step) === step);
        });
        progress.forEach((p, i) => {
            p.classList.toggle('fc-progress__step--active', i + 1 === step);
            p.classList.toggle('fc-progress__step--complete', i + 1 < step);
        });
    }

    // Validaciones y navegación
    document.getElementById('next1').addEventListener('click', () => {
        const seleccionado = form.querySelector('input[name="modalidad"]:checked');
        if (!seleccionado) {
            alert('Por favor, elija Presencial o Videollamada.');
            return;
        }
        currentStep = 2;
        showStep(currentStep);
    });

    document.getElementById('next2').addEventListener('click', () => {
        const nombre = form.nombre.value.trim();
        const telefono = form.telefono.value.trim();
        const referencia = form.referencia.value.trim();
        if (!nombre || !telefono || !referencia) {
            alert('Complete todos los campos obligatorios.');
            return;
        }
        currentStep = 3;
        showStep(currentStep);
    });

    document.getElementById('prev2').addEventListener('click', () => {
        currentStep = 1;
        showStep(currentStep);
    });

    document.getElementById('prev3').addEventListener('click', () => {
        currentStep = 2;
        showStep(currentStep);
    });

    // Envío con AJAX a Formspree para mostrar paso 4 sin recargar
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    currentStep = 4;
                    showStep(currentStep);
                } else {
                    alert('Ocurrió un error al enviar. Intente nuevamente.');
                }
            })
            .catch(() => {
                alert('Ocurrió un error de red. Verifique su conexión.');
            });
    });

    // Inicializar
    showStep(currentStep);
});
