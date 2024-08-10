// script.js
const peliculas = [
    {
        titulo: "La Guerra de las Galaxias",
        imagen: "/assets/img/anillos.jpeg",
        descripcion: "La película que revolucionó el cine de ciencia ficción"
    },
    {
        titulo: "El Padrino",
        imagen: "/assets/img/padrino.jpeg",
        descripcion: "La película que redefinió el cine de mafia"
    },
    {
        titulo: "El Señor de los Anillos",
        imagen: "/assets/img/wars.jpeg",
        descripcion: "La película que llevó el cine de fantasía a un nuevo nivel"
    },
    {
        titulo: "Avatar",
        imagen: "/assets/img/avatar.jpeg",
        descripcion: "Una de las peliculas mas taquilleras de la historia"
    },
    {
        titulo: "Transfomers",
        imagen: "/assets/img/transformers.jpeg",
        descripcion: "Esta pelicula revoluciono la histroia de las peliculas de ciencia ficcion"
    },
    {
        titulo: "Armageddon",
        imagen: "/assets/img/armagedon.jpeg",
        descripcion: "En efecto es cine"
    },
    {
        titulo: "Interstelar",
        imagen: "/assets/img/interestelar.jpeg",
        descripcion: "En efecto es aun mas cine"
    },
    {
        titulo: "La vida misma",
        imagen: "/assets/img/mismavida.jpeg",
        descripcion: "En efecto es aun mas cine, si señor"
    },
    {
        titulo: "Avatar",
        imagen: "/assets/img/avatar.jpeg",
        descripcion: "Una de las peliculas mas taquilleras de la historia"
    },
    {
        titulo: "Transfomers",
        imagen: "/assets/img/transformers.jpeg",
        descripcion: "Esta pelicula revoluciono la histroia de las peliculas de ciencia ficcion"
    },
    {
        titulo: "Armageddon",
        imagen: "/assets/img/armagedon.jpeg",
        descripcion: "En efecto es cine"
    },
    {
        titulo: "Interstelar",
        imagen: "/assets/img/interestelar.jpeg",
        descripcion: "En efecto es aun mas cine"
    },
    {
        titulo: "La vida misma",
        imagen: "/assets/img/mismavida.jpeg",
        descripcion: "En efecto es aun mas cine, si señor"
    },
    {
        titulo: "Interstelar",
        imagen: "/assets/img/interestelar.jpeg",
        descripcion: "En efecto es aun mas cine"
    },
    {
        titulo: "La vida misma",
        imagen: "/assets/img/mismavida.jpeg",
        descripcion: "En efecto es aun mas cine, si señor"
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

    const descripcionPelicula = document.createElement("p");
    descripcionPelicula.textContent = pelicula.descripcion;
    descripcionPelicula.classList.add("descripcion");

    elementoPelicula.appendChild(imagenPelicula);
    elementoPelicula.appendChild(tituloPelicula);
    elementoPelicula.appendChild(descripcionPelicula);

    contenedorPeliculas.appendChild(elementoPelicula);
});