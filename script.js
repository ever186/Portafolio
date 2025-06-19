document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('.dots-nav .dot');

    const options = {
        root: null, // usa el viewport como el área de observación
        threshold: 0.5 // se activa cuando el 50% de la sección está visible
    };

    // Esta función se ejecuta cada vez que una sección entra o sale del viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Obtiene el ID de la sección que está visible
                const currentSectionId = entry.target.id;
                
                // Actualiza los puntos de la navegación
                navDots.forEach(dot => {
                    dot.classList.remove('active');
                    // si el href del punto coincide con el ID de la sección, lo marca como activo
                    if (dot.getAttribute('href') === `#${currentSectionId}`) {
                        dot.classList.add('active');
                    }
                });
            }
        });
    };

    // Crea el observador
    const observer = new IntersectionObserver(observerCallback, options);

    // Le dice al observador que "mire" todas las secciones
    sections.forEach(section => {
        observer.observe(section);
    });

});