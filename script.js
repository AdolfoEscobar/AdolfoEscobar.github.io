let purplestuff = document.getElementById("sobres");
let imageElement = document.querySelector('.portrait');
let skills = document.getElementById("skills-container");
let isAdolfoImage = true;

purplestuff.onclick = function(){
    purplestuff.style.color = "purple"
    purplestuff.innerHTML = "About Adolfo"
};

let toggleImage = function() {
    if (isAdolfoImage) {
        imageElement.src = './img/kali.png';
        imageElement.alt = 'Kali Image';
    } else {
        imageElement.src = './img/adolfo.jpg'; 
        imageElement.alt = 'A Photo of Adolfo Escobar';
    }
    isAdolfoImage = !isAdolfoImage;
};

imageElement.addEventListener("click", toggleImage);

let tuxedoImage = document.createElement("img");
tuxedoImage.src = './img/tuxedo.png';
tuxedoImage.alt = 'Linux Image';

skills.appendChild(tuxedoImage);


