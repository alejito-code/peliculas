// script.js
const peliculas = [
    {
        titulo: "La Guerra de las Galaxias",
        imagen: "/assets/img/anillos.jpeg",
        descripcion: "La película que revolucionó el cine de ciencia ficción",
        puntuacion: "7/10"
    },
    {
        titulo: "El Padrino",
        imagen: "/assets/img/padrino.jpeg",
        descripcion: "La película que redefinió el cine de mafia",
        puntuacion: "7/10"
    },
    {
        titulo: "El Señor de los Anillos",
        imagen: "/assets/img/wars.jpeg",
        descripcion: "La película que llevó el cine de fantasía a un nuevo nivel",
        puntuacion: "7/10"       
    },
    {
        titulo: "Avatar",
        imagen: "/assets/img/avatar.jpeg",
        descripcion: "Una de las peliculas mas taquilleras de la historia",
        puntuacion: "7/10"
    },
    {
        titulo: "Transfomers",
        imagen: "/assets/img/transformers.jpeg",
        descripcion: "Esta pelicula revoluciono la histroia de las peliculas de ciencia ficcion",
        puntuacion: "7/10"
    },
    {
        titulo: "Armageddon",
        imagen: "/assets/img/armagedon.jpeg",
        descripcion: "En efecto es cine",
        puntuacion: "7/10"
    },
    {
        titulo: "Interstelar",
        imagen: "/assets/img/interestelar.jpeg",
        descripcion: "En efecto es aun mas cine",
        puntuacion: "7/10"
    },
    {
        titulo: "La vida misma",
        imagen: "/assets/img/mismavida.jpeg",
        descripcion: "En efecto es aun mas cine, si señor",
        puntuacion: "7/10"
    },
    {
        titulo: "Avatar",
        imagen: "/assets/img/avatar.jpeg",
        descripcion: "Una de las peliculas mas taquilleras de la historia",
        puntuacion: "7/10"
    },
    {
        titulo: "Transfomers",
        imagen: "/assets/img/transformers.jpeg",
        descripcion: "Esta pelicula revoluciono la histroia de las peliculas de ciencia ficcion",
        puntuacion: "7/10"
    },
    {
        titulo: "Armageddon",
        imagen: "/assets/img/armagedon.jpeg",
        descripcion: "En efecto es cine",
        puntuacion: "7/10"
    },
    {
        titulo: "Interstelar",
        imagen: "/assets/img/interestelar.jpeg",
        descripcion: "En efecto es aun mas cine",
        puntuacion: "7/10"
    },
    {
        titulo: "La vida misma",
        imagen: "/assets/img/mismavida.jpeg",
        descripcion: "En efecto es aun mas cine, si señor",
        puntuacion: "7/10"
    },
    {
        titulo: "Interstelar",
        imagen: "/assets/img/interestelar.jpeg",
        descripcion: "'Interstellar' narra la historia de Joseph Cooper, un granjero que trabajó como astronauta de la NASA, quien debe volver a colocarse su traje de viajero espacial para ir en un viaje casi sin retorno con el fin de salvar a la humanidad de la degradación ambiental que aqueja a la tierra.",
        puntuacion: "7/10"    
    },
    {
        titulo: "La vida misma",
        imagen: "/assets/img/mismavida.jpeg",
        descripcion: "En efecto es aun mas cine, si señor",
        puntuacion: "7/10"
    }
];

const contenedorPeliculas = document.getElementById("peliculas");

peliculas.forEach((pelicula) => {
    const elementoPelicula = document.createElement("div");
    elementoPelicula.classList.add("pelicula");

    const imagenPelicula = document.createElement("img");
    imagenPelicula.src = pelicula.imagen;
    imagenPelicula.alt = pelicula.titulo;

    const tituloPelicula = document.createElement("h2");
    tituloPelicula.textContent = pelicula.titulo;

    const puntPelicula = document.createElement("h3");
    puntPelicula.textContent = pelicula.puntuacion;

    const descripcionPelicula = document.createElement("p");
    descripcionPelicula.textContent = pelicula.descripcion;
    descripcionPelicula.classList.add("descripcion");

    const infoPelicula = document.createElement("div");
    infoPelicula.classList.add("info-pelicula");
    infoPelicula.appendChild(puntPelicula);
    infoPelicula.appendChild(tituloPelicula);
    infoPelicula.appendChild(descripcionPelicula);

    elementoPelicula.appendChild(imagenPelicula);
    elementoPelicula.appendChild(tituloPelicula);
    elementoPelicula.appendChild(infoPelicula);
    

    contenedorPeliculas.appendChild(elementoPelicula); 
});

