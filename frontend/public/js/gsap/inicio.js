// Btn ScrollTo:
const heroBtn = document.querySelector("#section__hero .btn__hero");
heroBtn.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#section__intro",
    ease: "power4.out",
  });
});

gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {
  // Hero animación:
  var tl = gsap.timeline();
  gsap.set(".sello", { opacity: 0.2, scale: 12 }),
    gsap.set("#video__inicio", { clipPath: "circle(0% at 50% 50%)" }),
    tl
      .from("h1", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        delay: 1,
        ease: "power1.out",
      })
      .from(
        "h2",
        {
          opacity: 0,
          x: -50,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.2"
      )
      .from(
        "p",
        {
          opacity: 0,
          x: -50,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.2"
      )
      .from(
        "#section__hero picture",
        {
          opacity: 0,
          y: -50,
          duration: 0.8,
          ease: "power1.out",
        },
        "-=0.8"
      );

  // Animacion giro heroBtn:

  gsap.to(".btn__circle", {
    rotation: 360 * 2,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "#section__hero",
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
    },
  });

  // Hero

  gsap.to(".img__hero", {
    width: "50%",
    transformOrigin: "center",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".img__hero",
      start: "top 60",
      end: "+=160%",
      endTrigger: ".column__3",
      scrub: true,
      pin: ".img__hero",
      pinSpacing: false,
    },
  });

  gsap.to("#video__inicio", {
    clipPath: "circle(100% at 50% 50%)",
    scrollTrigger: {
      trigger: ".vid__hero",
      start: "top 0%",
      end: "bottom 100%",
      endTrigger: ".vid__hero",
      scrub: true,
      pin: "#video__inicio",
      pinSpacing: false,
    },
  });

  gsap.to(".sello", {
    scrollTrigger: {
      trigger: "#section__hero",
      start: "top top",
      end: "bottom bottom",
      pin: ".sello",
      pinSpacing: true,
      scrub: true,
    },
  });

  gsap.to(".sello", {
    scale: 1,
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#section__hero .column__3",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".intro__slider1", {
    x: 0,
    scrollTrigger: {
      trigger: ".intro__slider1",
      start: "top 100%",
      end: "bottom 0%",
      scrub: true,
    },
  });
  gsap.to(".intro__slider2", {
    x: 0,
    scrollTrigger: {
      trigger: ".intro__slider2",
      start: "top 100%",
      end: "bottom 0%",
      scrub: true,
    },
  });
}
