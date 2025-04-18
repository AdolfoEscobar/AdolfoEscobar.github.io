let tituloSeccion = document.getElementById("sobres");
let skills = document.getElementById("skills-container");

tituloSeccion.onclick = function(){
    tituloSeccion.style.color = "#d4af37";
    tituloSeccion.innerHTML = "Innovación a través de la Tecnología";
};

let tuxedoImage = document.createElement("img");
tuxedoImage.src = './img/tuxedo.png';
tuxedoImage.alt = 'Linux Image';

// Añadir tecnologías
let rustImage = document.createElement("img");
rustImage.src = './img/rust.png';
rustImage.alt = 'Rust';

let reactImage = document.createElement("img");
reactImage.src = './img/react.png';
reactImage.alt = 'React';

let goImage = document.createElement("img");
goImage.src = './img/go.png';
goImage.alt = 'Go';

skills.appendChild(tuxedoImage);
skills.appendChild(rustImage);
skills.appendChild(reactImage);
skills.appendChild(goImage);

// Animación para las tarjetas de servicios
document.addEventListener('DOMContentLoaded', function() {
    // Agregamos animación de aparición a las tarjetas
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Formulario de contacto
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.');
            form.reset();
        });
    }
});


