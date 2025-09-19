// File: /scripts/user-reviews.js
// Reemplaza un <div class="user-reviews"></div> en tu HTML por un carousel de reseñas aleatorias,
// con estrellas, nombre y texto. Cada 5 s cambia con un suave efecto de desvanecimiento.

// ————————————————————————————————
// IIFE para encapsular sin contaminar el scope global
// ————————————————————————————————
(function () {
    // ————————————————————————————————
    // 1) Lista de reseñas extraídas de Google Reviews
    // Cada objeto tiene nombre completo y comentario de cinco estrellas
    // ————————————————————————————————
    const reviews = [
        {
            name: "Eliana Latimori",
            text:
                "Un estudio muy profesional y dedicado con sus clientes. Despejaron todas mis dudas y me acompañaron en todo momento, si buscan calidad humana y profesional es en este lugar."
        },
        {
            name: "María José Domínguez Piaggio",
            text:
                "Excelente! Profesionalismo y buena atención a clientes. Resolutivos."
        },
        {
            name: "Rodrigo Hillebrand",
            text:
                "Excelente atención y profesionalismo. El equipo del estudio se toma el tiempo de escuchar y explicar todo con claridad, brindando un acompañamiento humano y comprometido. Me sentí muy respaldado en todo momento. Súper recomendables para quienes buscan abogados confiables, eficaces y con calidez humana. ¡Gracias por todo!"
        },
        {
            name: "Florencia Santillán",
            text:
                "El Lic. Santiago Haspert es muy profesional, y su amplio conocimiento y amabilidad me dio mucha confianza en llevar mi caso. ¡Muchas gracias!"
        },
        {
            name: "Ileana Lorena Tonina",
            text: "Recomiendo, muy responsable y atento."
        },
        {
            name: "Nicolás Cardone",
            text:
                "Gracias al estudio y a todo el equipo de abogados por el asesoramiento y acompañamiento que me brindaron en mi caso. Desde el principio el seguimiento y todo el proceso fue súper satisfactorio con una calidez y profesionalismo que agradezco infinitamente."
        },
        {
            name: "Flor Reinaldi",
            text: "Muy buena atención y predisposición."
        },
        {
            name: "Cecilia Bustos",
            text:
                "Excelente equipo de profesionales, me sentí acompañada en todo el proceso, dando respuestas certeras de mi caso en particular, súper recomendable."
        },
        {
            name: "Nicolás Acosta",
            text:
                "Desde el primer contacto me sentí escuchado y acompañado. El equipo fue claro, eficiente y muy humano en todo momento. Me asesoraron con paciencia y resolvieron mi situación de forma rápida y efectiva."
        },
        {
            name: "Agustín Martínez",
            text:
                "Excelente equipo de profesionales dispuestos a escuchar y resolver las situaciones planteadas."
        }
    ];

    // ————————————————————————————————
    // 2) Inyección de estilos CSS dinámicos
    // Mantiene altura fija, tipografía profesional, estrella amarilla, fade transition
    // ————————————————————————————————
    const style = document.createElement("style");
    // Dentro de user-reviews.js, reemplaza la sección de style.textContent con esto:
    style.textContent = `
    .user-reviews {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 200px;                /* altura fija */
    margin: 1rem auto;
    padding: 1rem;
    box-sizing: border-box;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    
    /* CENTRADO HORIZONTAL Y VERTICAL */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* FADE */
    opacity: 1;
    transition: opacity 0.5s ease;

    font-family: Arial, sans-serif;
    text-align: center;           /* texto centrado */
    }
    .user-reviews .stars {
    color: #f5a623;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    }
    .user-reviews .review-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
    }
    .user-reviews .review-text {
    font-size: 0.95rem;
    line-height: 1.4;
    color: #333;
    }
`;

    document.head.appendChild(style);

    // ————————————————————————————————
    // 3) Selecciona el contenedor y prepara la baraja de reseñas
    // ————————————————————————————————
    const container = document.querySelector(".user-reviews");
    if (!container) return; // si no existe, no hace nada

    // Fisher–Yates shuffle para ordenar aleatoriamente
    const shuffled = reviews.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    let currentIndex = 0;
    const total = shuffled.length;
    const intervalMs = 5000; // 5 segundos

    // ————————————————————————————————
    // 4) Función que renderiza una reseña y aplica fade
    // ————————————————————————————————
    function showReview(idx) {
        const { name, text } = shuffled[idx];

        // Fade out
        container.style.opacity = 0;

        setTimeout(() => {
            // Cambia contenido
            container.innerHTML = `
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <div class="review-name">${name}</div>
        <div class="review-text">${text}</div>
      `;
            // Fade in
            container.style.opacity = 1;
        }, 500); // coincide con transition-duration
    }

    // ————————————————————————————————
    // 5) Inicia el ciclo
    // ————————————————————————————————
    showReview(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % total;
        showReview(currentIndex);
    }, intervalMs);
})();
