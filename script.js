const obsOpts = { threshold: 0.15 };

const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('show-me');
    });
}, obsOpts);

document.querySelectorAll('.reveal-item').forEach((el) => revealObs.observe(el));

// parallax stuff
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const shapes = document.querySelectorAll('.p-shape');
    
    if (window.innerWidth > 768) {
        shapes.forEach(s => {
            const spd = s.getAttribute('data-spd');
            s.style.transform = `translateY(${scrolled * spd}px)`;
        });
    }
});

// state toggle
const nrgToggle = document.getElementById('nrg-toggle');
const nrgOut = document.getElementById('nrg-out');
const insightPane = document.getElementById('insight');

nrgToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        nrgOut.innerText = "Energy absorbed. Electrons jumping to higher orbitals.";
        nrgOut.style.color = "#34e815"; 
        insightPane.style.background = "radial-gradient(circle at center, rgba(52, 232, 21, 0.08) 0%, #0c1114 65%)";
    } else {
        nrgOut.innerText = "System stable. Electrons resting in lowest energy orbitals.";
        nrgOut.style.color = "#05d6ed"; 
        insightPane.style.background = "none";
    }
});

// trigger bond
const triggerBtn = document.getElementById('trigger-bond');
const bondArea = document.getElementById('bond-area');
const sysAlert = document.getElementById('sys-alert');

triggerBtn.addEventListener('click', () => {
    // console.log('init bonding sequence');
    bondArea.classList.add('linked');
    
    triggerBtn.innerText = "Molecule Synthesized";
    triggerBtn.style.pointerEvents = "none";
    triggerBtn.style.opacity = "0.4";
    triggerBtn.style.borderColor = "#555";
    triggerBtn.style.color = "#555";

    setTimeout(() => {
        sysAlert.classList.add('active');
        setTimeout(() => sysAlert.classList.remove('active'), 4500);
    }, 850); 
});