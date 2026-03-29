// --- 1. Scroll-Triggered Reveals (Intersection Observer) ---
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// --- 2. Parallax Scroll Effect (Electron and Nucleus) ---
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxShapes = document.querySelectorAll('.parallax-shape');
    
    // Disable on mobile to save performance
    if (window.innerWidth > 768) {
        parallaxShapes.forEach(shape => {
            const speed = shape.getAttribute('data-speed');
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});


// --- 3. Interactive Toggle Logic (Energy States) ---
const energyToggle = document.getElementById('energy-toggle');
const energyReadout = document.getElementById('energy-readout');
const insightSection = document.getElementById('insight');

energyToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        // Excited State
        energyReadout.innerText = "Energy absorbed. Electrons jumping to higher orbitals. Photon emission imminent.";
        energyReadout.style.color = "#39ff14"; // Neon Green
        
        // Change section background to simulate an energy flash
        insightSection.style.background = "radial-gradient(circle at center, rgba(57, 255, 20, 0.1) 0%, #0a0f12 60%)";
    } else {
        // Ground State
        energyReadout.innerText = "System stable. Electrons resting in lowest energy orbitals.";
        energyReadout.style.color = "#00e5ff"; // Cyan
        
        // Revert background
        insightSection.style.background = "none";
    }
});

// --- 4. Interactive Bonding Logic ---
const bondBtn = document.getElementById('bond-btn');
const bondingStage = document.getElementById('bonding-stage');
const toast = document.getElementById('custom-toast');

bondBtn.addEventListener('click', () => {
    // 1. Trigger the atom connection animation
    bondingStage.classList.add('is-bonded');
    
    // 2. Change the button state so it can't be clicked again
    bondBtn.innerText = "Molecule Synthesized";
    bondBtn.style.pointerEvents = "none";
    bondBtn.style.opacity = "0.5";
    bondBtn.style.borderColor = "#777";
    bondBtn.style.color = "#777";

    // 3. Wait 1 second for the CSS animation to finish, then show the custom toast
    setTimeout(() => {
        toast.classList.add('show-toast');
        
        // Optional: Hide the toast automatically after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show-toast');
        }, 5000);
        
    }, 1000); 
});