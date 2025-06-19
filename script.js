document.addEventListener('DOMContentLoaded', () => {
    // Crea el observador
    const observer = new IntersectionObserver(observerCallback, options);

    // Le dice al observador que "mire" todas las secciones
    sections.forEach(section => {
        observer.observe(section);
    });
});



       // Datos de experiencias (puedes modificar estos datos fácilmente)
        const experienceData = [
            {
                title: "Ingeniero de Instrumentación",
                company: "Empresa Industrial S.A.",
                date: "2023 - Presente",
                description: "Lidero proyectos de instrumentación y control avanzado en sistemas industriales críticos. He implementado soluciones de automatización que han mejorado la eficiencia operativa en un 25% y reducido los tiempos de mantenimiento preventivo. Mi experiencia incluye la integración de sistemas SCADA, programación de PLCs y desarrollo de interfaces HMI para el monitoreo en tiempo real de procesos industriales.",
                achievements: "<strong>Logros principales:</strong><br>• Implementación de sistema de monitoreo predictivo<br>• Reducción de costos operativos en 15%<br>• Certificación en ciberseguridad industrial<br>• Liderazgo de equipo multidisciplinario de 8 personas"
            },
            {
                title: "Especialista en Ciberseguridad",
                company: "Tech Security Corp",
                date: "2022 - 2023",
                description: "Desarrollé e implementé protocolos de seguridad para redes industriales, utilizando herramientas como Wireshark, Nmap y Scapy para el análisis forense y detección de vulnerabilidades. Participé en auditorías de seguridad y formé al personal en mejores prácticas de ciberseguridad.",
                achievements: "<strong>Logros principales:</strong><br>• Reducción de incidentes de seguridad en 40%<br>• Implementación de SOC (Security Operations Center)<br>• Certificación en análisis forense digital<br>• Desarrollo de políticas de seguridad"
            },
            {
                title: "Analista de Datos",
                company: "DataTech Solutions",
                date: "2021 - 2022",
                description: "Transformé datos complejos en insights valiosos utilizando Python, SQL y Power BI. Desarrollé dashboards interactivos para la toma de decisiones estratégicas y automaticé procesos de análisis que redujeron el tiempo de generación de reportes en un 60%.",
                achievements: "<strong>Logros principales:</strong><br>• Automatización de reportes con Python<br>• Desarrollo de 15+ dashboards en Power BI<br>• Optimización de consultas SQL complejas<br>• Implementación de machine learning básico"
            },
            {
                title: "Ingeniero Junior",
                company: "Industrias Técnicas Ltda",
                date: "2020 - 2021",
                description: "Inicié mi carrera profesional apoyando en proyectos de mantenimiento preventivo y correctivo de equipos industriales. Desarrollé habilidades en el manejo de instrumentación básica y participé en la documentación técnica de procesos.",
                achievements: "<strong>Logros principales:</strong><br>• Reducción de tiempo de paradas no programadas<br>• Implementación de check-lists de mantenimiento<br>• Capacitación en normativas de seguridad industrial<br>• Desarrollo de habilidades en trabajo en equipo"
            }
        ];

        let currentExperience = 0;
        let isEditing = false;

        // Función para actualizar el contenido del texto
        function updateExperienceText(index) {
            if (isEditing) return; // No actualizar si estamos editando

            const experience = experienceData[index];
            document.getElementById('experience-title').textContent = experience.title;
            document.getElementById('experience-company').textContent = experience.company;
            document.getElementById('experience-date').textContent = experience.date;
            document.getElementById('experience-description').textContent = experience.description;
            document.getElementById('experience-achievements').innerHTML = experience.achievements;
            currentExperience = index;
        }

        // Función para alternar el modo de edición
        function toggleEdit() {
            const content = document.getElementById('experience-content');
            const editor = document.getElementById('experience-editor');
            const editBtn = document.querySelector('.edit-btn');
            
            if (isEditing) {
                // Salir del modo edición sin guardar
                content.style.display = 'block';
                editor.style.display = 'none';
                editBtn.innerHTML = '<i class="fas fa-edit"></i> Editar Contenido';
                isEditing = false;
            } else {
                // Entrar en modo edición
                const experience = experienceData[currentExperience];
                document.getElementById('edit-title').value = experience.title;
                document.getElementById('edit-company').value = experience.company;
                document.getElementById('edit-date').value = experience.date;
                document.getElementById('edit-description').value = experience.description;
                document.getElementById('edit-achievements').value = experience.achievements.replace(/<br>/g, '\n').replace(/<\/?strong>/g, '');
                
                content.style.display = 'none';
                editor.style.display = 'block';
                editBtn.innerHTML = '<i class="fas fa-times"></i> Cancelar';
                isEditing = true;
            }
        }

        // Función para guardar los cambios
        function saveChanges() {
            const title = document.getElementById('edit-title').value;
            const company = document.getElementById('edit-company').value;
            const date = document.getElementById('edit-date').value;
            const description = document.getElementById('edit-description').value;
            const achievements = document.getElementById('edit-achievements').value;

            // Actualizar los datos
            experienceData[currentExperience] = {
                title: title,
                company: company,
                date: date,
                description: description,
                achievements: achievements.replace(/\n/g, '<br>')
            };

            // Actualizar la vista
            updateExperienceText(currentExperience);
            
            // Salir del modo edición
            toggleEdit();
        }

        // Event listeners para el carrusel
        document.getElementById('experienceCarousel').addEventListener('slide.bs.carousel', function (event) {
            if (!isEditing) {
                updateExperienceText(event.to);
            }
        });

        // Navegación con puntos
        document.addEventListener('DOMContentLoaded', function() {
            const dots = document.querySelectorAll('.dots-nav .dot');
            const sections = document.querySelectorAll('section');

            function updateActiveDot() {
                const scrollPosition = window.scrollY + 100;
                
                sections.forEach((section, index) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        dots.forEach(dot => dot.classList.remove('active'));
                        dots[index].classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', updateActiveDot);
            updateActiveDot(); // Llamar una vez al cargar
        });

        // Inicializar con la primera experiencia
        updateExperienceText(0);
