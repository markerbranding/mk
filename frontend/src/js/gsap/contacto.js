// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__intro", ease: "power4.out"});
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

}


// Mapa de Google:

async function initMap() {
    // Importa solo la biblioteca de mapas.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const originalMapCenter = new google.maps.LatLng(21.034083725368113, -89.58524727449985);
    const map = new Map(document.getElementById("map"), {
        zoom: 14,
        center: originalMapCenter,
        mapId: "8db6d703d3e235c6",
    });

    const infowindow = new google.maps.InfoWindow({
        content: `
            <a href='https://google.com' style="color: #222; font-size: 16px;">Oficinas EMEKÁ</a>
        `,
        position: originalMapCenter,
        pixelOffset: new google.maps.Size(0, -100) // Desplaza el InfoWindow 40 píxeles hacia arriba
    });

    infowindow.open(map);

    // Añade un marcador avanzado con una imagen personalizada
    const marker = new AdvancedMarkerElement({
        map: map,
        position: originalMapCenter,
        title: "Custom Marker",
        content: document.createElement("div")
    });

    // Configura el contenido HTML del marcador avanzado para usar la imagen
    marker.content.innerHTML = `
        <img src="/images/contacto_img.jpg" alt="Marker" style="width: 80px; height: 80px; background-color:#000; padding:10px;">
    `;

  }
  
  initMap();






  