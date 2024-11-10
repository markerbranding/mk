// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__proyectos", ease: "power4.out"});
});

gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {

    // Hero animación:
    var tl = gsap.timeline();

    tl.from("h1", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        delay: 1,
        ease: "power1.out"
    })
    .from("h2", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("p", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero .btn", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero picture", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power1.out"
    }, "-=0.8")
    .from(".st1", {
        drawSVG: "0%",
        stagger: 0.010,
        duration: 1,
    }, "-=1.2");


    // Batch Cards
    ScrollTrigger.batch(".card", {
        trigger: "#listado__desarrollos",
        start: "top, 70%",
        end: "top, 60%",
        onEnter: (batch) =>	gsap.to(batch, { opacity: 1, stagger: 0.2 }),
        onEnterBack: (batch) =>	gsap.to(batch, { opacity: 1, stagger: 0.2 }),
        onLeave: (batch) =>	gsap.to(batch, { opacity: 1, stagger: 0.2 }),
        onLeaveBack: (batch) =>	gsap.to(batch, { opacity: 0, stagger: 0.2 }),
    });


}