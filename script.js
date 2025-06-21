document.addEventListener('DOMContentLoaded', () => {

    // --- DATOS DE EXPERIENCIA ---
    const experienceData = [
        {
            title: "Ingeniero de proyectos de mantenimiento",
            company: "Enfragen Termoflores",
            date: "2024 - 2025",
            description: "Gestión de la estandarización de activos de la planta conforme a la normativa vigente, supervisión de la interpretación de P&ID para la identificación y clasificación de activos, revisión y optimización de la estructura de inventario, y desarrollo e implementación de KPIs para el monitoreo y seguimiento del progreso del proyecto, planeación y creación de cronogramas.",
            achievements: "<strong>Logros principales:</strong><br>• Optimizacion de renombramiento de activos con macros<br>• Analisis de más de 20.000 datos<br>• Creacion de un algoritmo para optimizar almacen<br>• Monitorear de equipos de mantenimiento"
        },
        {
            title: "Ingeniero Auxiliar de Instrumentación",
            company: "Enfragen Termoflores",
            date: "2023 - 2024",
            description: "Creación de permiso de trabajo y comunicar las actividades diarias, notificación las ordenes de trabajos, realizar listas de pedido, realizar informes mensuales, creación de piezas.",
            achievements: "<strong>Logros principales:</strong><br>• Creacion de un sistema de neutralizacion de agua<br>• Implementacion de un nuevo formato<br>• creacion de un manual y un MPM para el nuevo sistema<br>• supervisar la instalacion de los equipos"
        },
        // ---------- se añade cuando se tenga mas experiencias ----------
    //    {
    //        title: "Analista de Datos",
    //        company: "DataTech Solutions",
    //        date: "2021 - 2022",
    //        description: "Transformé datos complejos en insights valiosos utilizando Python, SQL y Power BI. Desarrollé dashboards interactivos para la toma de decisiones estratégicas y automaticé procesos de análisis.",
    //        achievements: "<strong>Logros principales:</strong><br>• Automatización de reportes con Python<br>• Desarrollo de 15+ dashboards en Power BI<br>• Optimización de consultas SQL complejas<br>• Implementación de machine learning básico"
    //    },
    //    {
    //        title: "Ingeniero Junior",
    //        company: "Industrias Técnicas Ltda",
    //        date: "2020 - 2021",
    //        description: "Inicié mi carrera apoyando en proyectos de mantenimiento de equipos industriales. Desarrollé habilidades en manejo de instrumentación y documentación técnica de procesos.",
    //        achievements: "<strong>Logros principales:</strong><br>• Reducción de tiempo de paradas no programadas<br>• Implementación de check-lists de mantenimiento<br>• Capacitación en normativas de seguridad<br>• Desarrollo de habilidades en trabajo en equipo"
    //    }
    ];

    // --- LÓGICA DEL CARRUSEL DE EXPERIENCIA ---
    function updateExperienceText(index) {
        const experience = experienceData[index];
        const contentDiv = document.getElementById('experience-content');
        
        // Animación de salida
        contentDiv.style.opacity = '0';
        
        setTimeout(() => {
            document.getElementById('experience-title').textContent = experience.title;
            document.getElementById('experience-company').textContent = experience.company;
            document.getElementById('experience-date').textContent = experience.date;
            document.getElementById('experience-description').textContent = experience.description;
            document.getElementById('experience-achievements').innerHTML = experience.achievements;
            
            // Animación de entrada
            contentDiv.style.opacity = '1';
        }, 600); // Coincide con la duración de la transición en CSS
    }

    const experienceCarousel = document.getElementById('experienceCarousel');
    if(experienceCarousel) {
        experienceCarousel.addEventListener('slide.bs.carousel', function (event) {
            updateExperienceText(event.to);
        });
        // Carga inicial
        updateExperienceText(0);
    }

    // --- NAVEGACIÓN CON PUNTOS (DOTS) ---
    const dots = document.querySelectorAll('.dots-nav .dot');
    const sections = document.querySelectorAll('section');

    function updateActiveDot() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                const currentId = section.getAttribute('id');
                dots.forEach(dot => {
                    dot.classList.remove('active');
                    if(dot.getAttribute('href') === `#${currentId}`) {
                        dot.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveDot);
    updateActiveDot(); // Llamar al cargar

});
