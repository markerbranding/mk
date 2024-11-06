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
    }, "-=0.8");

    gsap.to(".trazo__edificio", {
        scrollTrigger: {
            pin: ".trazo__edificio",
            trigger: ".pin__start",
            start: "top top",
            end: "top end",
            endTrigger: ".info__bottom",
            pinSpacing: false,
        }
    });

    gsap.set(".st0", { drawSVG: "0%" });
    gsap.set(".edificio", { css: { 'filter': 'grayscale(100%)','-webkit-filter': 'grayscale(0%)', opacity:0 } });
    gsap.set(".nube", { opacity: 0 });

    function dibuja() {
        gsap.to(".st0", { drawSVG: "100%", stagger: 0.010 });
    }
    function borra() {
        gsap.to(".st0", { drawSVG: "0%", duration: 0.5 });
    }


    function aparece() {
        gsap.to(".edificio", { css: { opacity: 1 }, duration: 2 });
    }
    function desaparece() {
        gsap.to(".edificio", { css: { opacity: 0 }, duration: 1 });
    }


    function color() {
        gsap.to(".edificio", { css: { 'filter': 'grayscale(0%)','-webkit-filter': 'grayscale(0%)' } });
    }
    function grayscale() {
        gsap.to(".edificio", { css: { 'filter': 'grayscale(100%)','-webkit-filter': 'grayscale(0%)' } });
    }
    
    ScrollTrigger.create({
        immediateRender: false,
        trigger:".info__top",
        start: "top 40%",
        end: "bottom 50%",
        onEnter: dibuja,
        onLeave: borra,
        onEnterBack: dibuja,
        onLeaveBack: borra,
    });
    
    ScrollTrigger.create({
        immediateRender: false,
        trigger:".info__top",
        start: "30% 50%",
        end: "top 50%",
        endTrigger: ".info__bottom",
        onEnter: aparece,
        onLeave: aparece,
        onEnterBack: aparece,
        onLeaveBack: desaparece,
    });

    ScrollTrigger.create({
        immediateRender: false,
        trigger:".info__top",
        start: "bottom 50%",
        end: "bottom 50%",
        endTrigger: ".info__bottom",
        onEnter: color,
        onLeave: color,
        onEnterBack: color,
        onLeaveBack: grayscale,
    });

    ScrollTrigger.batch(".edificio__pic", {
        immediateRender: false,
        trigger:".info__top",
        start: "20% 50%",
        end: "top 50%",
        endTrigger: ".info__bottom",
        onEnter: (batch) =>	gsap.to(batch, { opacity: 0.4 }),
		onLeave: (batch) =>	gsap.to(batch, { opacity: 1 }),
        onEnterBack: (batch) =>	gsap.to(batch, { opacity: 0.4 }),
		onLeaveBack: (batch) =>	gsap.to(batch, { opacity: 0.4 }),
    });

    ScrollTrigger.batch(".nube", {
        immediateRender: false,
        trigger:".info__top",
        start: "20% 50%",
        end: "top 50%",
        endTrigger: ".info__bottom",
        onEnter: (batch) =>	gsap.to(batch, { opacity: 0 }),
		onLeave: (batch) =>	gsap.to(batch, { opacity: 1 }),
        onEnterBack: (batch) =>	gsap.to(batch, { opacity: 0 }),
		onLeaveBack: (batch) =>	gsap.to(batch, { opacity: 0 }),
    });

    gsap.to(".nube1", {
        x: 150,
        y: 30,
        ease: "power1.out",
        scrollTrigger:{
            trigger:".info__bottom",
            start: "top 50%",
            end: "bottom 50%",
            endTrigger: ".info__bottom",
            scrub: 1,
        },
    })

    gsap.to(".nube2", {
        x: 70,
        y: 30,
        ease: "power1.out",
        scrollTrigger:{
            trigger:".info__bottom",
            start: "top 50%",
            end: "bottom 50%",
            endTrigger: ".info__bottom",
            scrub: 1,
        },
    })

    gsap.to(".titulo__creamos", {
        x: 150,
        scrollTrigger: {
            trigger: "#section__hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        }
    })

    gsap.to(".titulo__habitat", {
        x: -150,
        scrollTrigger: {
            trigger: "#section__hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
        }
    })

    // Testimonios Drag:
    Draggable.create(".draggable", {
        type: "x",
        bounds: "#section__testimonios",
        inertia: true,
    });

    gsap.from("#section__divisor img", {
        scale: 0.6,
        borderRadius: "20",
        scrollTrigger: {
          trigger: "#section__divisor",
          scrub: true,
          start: "top 90%",
          end: "50% 50%",
          ease: "power4.inOut",
        }
      })


}