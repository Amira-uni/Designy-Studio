/* ============================================
   PREMIUM AGENCY JS
   ============================================ */

/* ===== CUSTOM CURSOR ===== */
const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
});

/* Smooth outline follow */
function animateOutline(){
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    outline.style.left = outlineX - 20 + "px";
    outline.style.top = outlineY - 20 + "px";
    requestAnimationFrame(animateOutline);
}
animateOutline();

/* ===== MOBILE NAV ===== */
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");

navToggle.onclick = () => {
    navLinks.classList.toggle("open");
};

/* ===== FADE + SLIDE ON SCROLL ===== */
const fadeItems = document.querySelectorAll(".fade-up, .slide-left, .slide-right");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry, index)=>{
        if(entry.isIntersecting){
            entry.target.style.transitionDelay = (index * 0.15) + "s"; // stagger effect
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

fadeItems.forEach(item => observer.observe(item));


