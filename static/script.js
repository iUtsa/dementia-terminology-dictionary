// Function to search and scroll to the term
function searchTerm() {
    const searchInput = document.getElementById('searchTerm').value.toLowerCase();
    const terms = document.querySelectorAll('#termsList .term-link');

    let found = false;
    terms.forEach(term => {
        if (term.textContent.toLowerCase().includes(searchInput)) {
            term.scrollIntoView({ behavior: 'smooth', block: 'center' });
            term.classList.add('highlight');
            setTimeout(() => term.classList.remove('highlight'), 2000);
            found = true;
        }
    });

    if (!found) alert('Term not found');
}

//pronunciation function

function playPronunciation() {
    const utterance = new SpeechSynthesisUtterance("Alzheimer's");
    utterance.lang = "en-US";
    
    const pronounceBtn = document.getElementById("pronounceBtn");
    
    // Add active class to show pulsing effect and disable button
    pronounceBtn.classList.add("active");
    pronounceBtn.disabled = true;

    // Remove active class and re-enable button after speaking
    utterance.onend = () => {
        pronounceBtn.classList.remove("active");
        pronounceBtn.disabled = false;
    };
    
    // Trigger pronunciation
    window.speechSynthesis.speak(utterance);
}

function pronounceDementia() {
    const pronunciation = new SpeechSynthesisUtterance("dih-men-shuh");
    pronunciation.lang = 'en-US'; // Language setting
    window.speechSynthesis.speak(pronunciation);
}

function playPronunciation() {
    // Get the pronunciation text inside the <h3> tag
    const pronunciationText = document.querySelector("#pronunciation h3").textContent;
    
    // Create a speech synthesis instance
    const utterance = new SpeechSynthesisUtterance(pronunciationText);
    utterance.lang = "en-US"; // Set language to English (US)
    
    // Speak the text
    speechSynthesis.speak(utterance);
}




//planet
const canvas = document.getElementById('dustPlanet');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to the viewport size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 1500; // Adjust for density
const sphereRadius = 300; // Radius of the virtual 3D sphere
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Array of colors for particles
const colors = ['#5fc2ff', '#feb47b', '#9fd2f2', '#feb47b', '#f26f0a'];

class Particle {
    constructor() {
        // Random initial position inside a 3D sphere
        this.angle1 = Math.random() * Math.PI * 2; // Horizontal angle
        this.angle2 = Math.acos(Math.random() * 2 - 1); // Vertical angle
        this.radius = Math.random() * sphereRadius; // Random distance from center

        // Compute 3D position
        this.x = this.radius * Math.sin(this.angle2) * Math.cos(this.angle1);
        this.y = this.radius * Math.sin(this.angle2) * Math.sin(this.angle1);
        this.z = this.radius * Math.cos(this.angle2);

        this.size = Math.random() * 2 + 0.5; // Random dot size
        this.color = colors[Math.floor(Math.random() * colors.length)]; // Random color from the array

        // Movement offsets
        this.offsetAngle1 = Math.random() * 0.02 - 0.01; // Slight movement in angle1
        this.offsetAngle2 = Math.random() * 0.02 - 0.01; // Slight movement in angle2
    }

    update() {
        // Update angles for slight movement
        this.angle1 += this.offsetAngle1;
        this.angle2 += this.offsetAngle2;

        // Recalculate 3D position
        this.x = this.radius * Math.sin(this.angle2) * Math.cos(this.angle1);
        this.y = this.radius * Math.sin(this.angle2) * Math.sin(this.angle1);
        this.z = this.radius * Math.cos(this.angle2);
    }

    draw() {
        // Project 3D coordinates onto 2D canvas
        const scale = (this.z + sphereRadius) / (2 * sphereRadius); // Scale based on depth
        const screenX = centerX + this.x * scale;
        const screenY = centerY + this.y * scale;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(screenX, screenY, this.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create particles
for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
}

function animate() {
    // Clear the canvas for smooth animation
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw all particles
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

animate();



//tree------

document.addEventListener("DOMContentLoaded", () => {
    const togglers = document.querySelectorAll(".caret");

    togglers.forEach(toggler => {
        toggler.addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    });
});