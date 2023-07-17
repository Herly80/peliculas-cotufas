var btnAnterior, btnSiguiente, portadas, portada1, portada2, portada3, portada4,
    portada5, portada6, portada7, portada8, portada9, indicePelicula, contenedorNombrePelicula,
    ventanaVideo, videoContenedor, videoF, descripcionVideo, nombreVideo, contenedorNombreBar;

var animacionFondoVar;

var portadasCarrusel = [{
    id: "1",
    nombre: "Barbie",
    urlimg: "./img/barbie.jpg",
    urlFondo: "./img/barbieFondo.jpg",
    urlVideo: "./trailers/barbie.mp4",
    sinopsis: "Barbie es exiliada de Barbieland a causa de sus imperfecciones. Cuando su mundo natal" +
        " está en peligro."
}, {
    id: "2",
    nombre: "Shrek",
    urlimg: "./img/sherk.jpg",
    urlFondo: "./img/sherkFondo.jpg",
    urlVideo: "./trailers/shrek.mp4", 
    sinopsis: "Shrek ayudará a burro y los demás personajes de cuentos de hadas y lucharan" +
        "en contra del malvado rey que desea obtener el poder total desposando a la princesa."
}, {
    id: "3",
    nombre: "La vida de Pi",
    urlimg: "./img/vidaPi.jpg",
    urlFondo: "./img/vidaPiFondo.jpg",
    urlVideo: "./trailers/lavidadepi.mp4",       
        sinopsis: "Supongo que al final, toda la vida," +
        " se convierte en un acto de dejar ir, pero lo que " +
        "siempre duele no tomarse un momento para decir adiós"
}, {
    id: "4",
    nombre: "Oppenheimer",
    urlimg: "./img/bomba.jpg",
    urlFondo: "./img/bombaFondo.jpg",
    urlVideo: "./trailers/oppenheimer.mp4", 
    sinopsis: "El papel protagónico de Oppenheimer, el físico teórico al que se atribuye" +
        " ser el 'padre de la bomba atómica' por su papel en el Proyecto Manhattan, será" +
        " interpretado por Cillian Murphy."
}, {
    id: "5",
    nombre: "Mision Imposible",
    urlimg: "./img/mision_imposible.jpg",
    urlFondo: "./img/mision_imposibleFondo.jpg",
    urlVideo: "./trailers/mission-impossible.mp4",  
    sinopsis: "Ethan Hunt (Tom Cruise) y su equipo del FMI se embarcan " +
        "en su misión más peligrosa hasta la fecha:  " +
        "Localizar, antes de que caiga en las manos equivocadas, " +
        "una nueva y terrorífica arma que amenaza a toda la humanidad. "
}, {
    id: "6",
    nombre: "Resident Evil",
    urlimg: "./img/resident.jpg",
    urlFondo: "./img/residetFondo.jpg",
    urlVideo: "./trailers/resident.mp4",  
    sinopsis: "When a virus leaks from a top-secret facility, turning all resident researchers into ravenous" +
        " zombies and their lab animals into mutated hounds from hell, the government sends in an elite military " +
        "task force. "
}, {
    id: "7",
    nombre: "Ruby Aventuras",
    urlimg: "./img/ruby_aventuras.jpg",
    urlFondo: "./img/ruby_aventurasFondo.jpg",
    urlVideo: "./trailers/ruby.mp4",
    sinopsis: " Descubre la heroína que se esconde bajo la superficie. " +
        " Una tímida adolescente descubre que forma parte de la legendaria realeza de los míticos Kraken, " +
        "los señores del mar, y que su destino en las profundidades del océano " +
        " es mucho mayor de lo que jamás había soñado."
}, {
    id: "8",
    nombre: "Elemental",
    urlimg: "./img/elemental.jpg",
    urlFondo: "./img/elementalFondo.jpg",
    urlVideo: "./trailers/elemental.mp4",  
    sinopsis: "Candela, una joven fuerte, ingeniosa y con carácter,  " +
        "Nilo, cambia su perspectiva sobre el mundo en el que viven."
 
}, {
    id: "9",
    nombre: "El viaje de Chihiro",
    urlimg: "./img/chihiro.jpg",
    urlFondo: "./img/chihiroFondo.jpg",
    urlVideo: "./trailers/cars.mp4", 
    sinopsis: "Chihiro es una niña de diez años que viaja en coche con sus padres" +
        "Después de atravesar un túnel, llegan a un mundo fantástico, en el que no hay " +
        "lugar para los seres humanos, sólo para los dioses de primera y segunda clase. " +
        "Cuando descubre que sus padres han sido convertidos en cerdos, Chihiro se siente muy sola y asustada. "

}]
var imagenesFondo = [
    {
        indice: "1",
        url: "./imagePortada/p3.jpg",
    }, {
        indice: "2",
        url: "./imagePortada/p4.jpg",
    }, {
        indice: "3",
        url: "./imagePortada/p5.jpg",
    }, {
        indice: "4",
        url: "./imagePortada/p6.jpg",
    }, {
        indice: "5",
        url: "./imagePortada/p7.jpg",
    }]

var indiceImgFondo = 0;

function animacionFondo() {

    document.body.style.background = "#f3f3f3 url(" + imagenesFondo[indiceImgFondo].url + ") no-repeat right top";
    document.body.style.backgroundSize = "cover";

    if (indiceImgFondo < imagenesFondo.length - 1) {
        indiceImgFondo++;
    } else {
        indiceImgFondo = 0

    }

}


var indiceimg1 = 0;
var indiceimg2 = 1;
var indiceimg3 = 2;
var indiceimg4 = 3;
var indiceimg5 = 4;
var indiceimg6 = 5;
var indiceimg7 = 6;
var indiceimg8 = 7;
var indiceimg9 = 8;



function iniciar() {
    animacionFondoVar = setInterval(animacionFondo, 500);





    btnAnterior = document.getElementById("fAnterior");
    btnSiguiente = document.getElementById("fSiguiente");
    portadas = document.getElementsByClassName("portadas");
    portada1 = document.getElementById("portada1");
    portada2 = document.getElementById("portada2");
    portada3 = document.getElementById("portada3");
    portada4 = document.getElementById("portada4");
    portada5 = document.getElementById("portada5");
    portada6 = document.getElementById("portada6");
    portada7 = document.getElementById("portada7");
    portada8 = document.getElementById("portada8");
    portada9 = document.getElementById("portada9");
    indicePelicula = document.getElementById("indexMovie");
    contenedorNombrePelicula = document.getElementById("nombreBar");
    nombreVideo = document.getElementById("nombreVideo");
    ventanaVideo = document.getElementById("ventanaVideo");
    videoContenedor = document.getElementById("videoContenedor");
    videoF = document.getElementById("videoF");
    descripcionVideo = document.getElementById("descripcionVideo");
    contenedorNombreBar = document.getElementById("contenedorNombreBar");


    portada5.addEventListener("click", detallesVideo);


    btnAnterior.addEventListener("click", anterior);
    btnSiguiente.addEventListener("click", siguiente);
    for (var i = 0; i < portadas.length; i++) {
        portadas[i].src = portadasCarrusel[i].urlimg;

    }

    contenedorNombrePelicula.textContent = portadasCarrusel[indiceimg5].nombre;
    indicePelicula.textContent = portadasCarrusel[indiceimg5].id + " de " + portadasCarrusel.length;

}

function aumentarimg(e) {
    if (e.type == "mouseover") {
        e.currentTarget.style.transform = 'scale(1.5)';

    }

}


var fondoBool;
var animacionPortadaBool;

function detallesVideo() {
    var audioEfecto = new Audio("sonidoEfecto/sonido2.mp3");
    audioEfecto.play();
    clearInterval(animacionFondoVar);
    portada5.style.transform = "scale(1.6) translateX(-110%) rotateY(360deg)";
    document.body.style.background = "#f3f3f3 url(" + portadasCarrusel[indiceimg5].urlFondo + ") no-repeat right top";
    document.body.style.backgroundSize = "cover";
    portada3.style.transform = "translateX(-113%)";
    portada4.style.transform = "translateX(-242%)";
    portada6.style.transform = "translateX(243%)";
    portada7.style.transform = "translateX(115%)";
    ventanaVideo.style.visibility = "visible";
    videoContenedor.style.visibility = "visible";
    nombreVideo.textContent = portadasCarrusel[indiceimg5].nombre;
    videoF.src = portadasCarrusel[indiceimg5].urlVideo;
    descripcionVideo.textContent = portadasCarrusel[indiceimg5].sinopsis;
    indicePelicula.style.visibility = "hidden";
    contenedorNombreBar.style.visibility = "hidden";
    fondoBool = true;
    animacionPortadaBool = true;

}

const elementPortadasAntetior = document.querySelectorAll("img");

const keyframesPortadasAnterior = [
    { transform: "translateX(0%)", offset: 0 },
    { transform: "translateX(128.5%)", offset: .50 },
    { transform: "translateX(128.5%)", offset: 1 },

];
const optionsPortadasAnterior = {
    duration: 1000,
    easing: "linear",
};

const elementPortadasSiguiente = document.querySelectorAll("img");

const keyframesPortadasSiguiente = [
    { transform: "translateX(0%)", offset: 0 },
    { transform: "translateX(-128.5%)", offset: 0.50 },
    { transform: "translateX(-128.5%)", offset: 1 },

];
const optionsPortadassiguiente = {
    duration: 1000,
    easing: "linear",
};

async function anterior() {
    var audioEfecto = new Audio("sonidoEfecto/sonido3.mp3");
    audioEfecto.play();

    portada5.style.transform = "scale(1.1) translateX(0%) rotateY(-360deg)";
    portada3.style.transform = "translateX(0%)";
    portada4.style.transform = "translateX(0%)";
    portada6.style.transform = "translateX(0%)";
    portada7.style.transform = "translateX(0%)";

    ventanaVideo.style.visibility = "hidden";
    videoContenedor.style.visibility = "hidden";
    indicePelicula.style.visibility = "visible";
    contenedorNombreBar.style.visibility = "visible";

    videoF.src = "";




    if (animacionPortadaBool == true) {
        setTimeout(() => {

            if (fondoBool == true) {
                animacionFondoVar = setInterval(animacionFondo, 500);
                fondoBool = false;

            }



            for (var i = 0; i < portadas.length; i++) {
                (elementPortadasAntetior[i].animate(keyframesPortadasAnterior, optionsPortadasAnterior));

            }


            setTimeout(() => {
                if (indiceimg1 == 0) {
                    indiceimg1 = portadasCarrusel.length - 1;

                } else {
                    indiceimg1--;
                }

                if (indiceimg2 == 0) {
                    indiceimg2 = portadasCarrusel.length - 1;
                } else {
                    indiceimg2--;
                }

                if (indiceimg3 == 0) {
                    indiceimg3 = portadasCarrusel.length - 1;
                } else {
                    indiceimg3--;
                }

                if (indiceimg4 == 0) {
                    indiceimg4 = portadasCarrusel.length - 1;
                } else {
                    indiceimg4--;
                }

                if (indiceimg5 == 0) {
                    indiceimg5 = portadasCarrusel.length - 1;
                } else {
                    indiceimg5--;
                }

                if (indiceimg6 == 0) {
                    indiceimg6 = portadasCarrusel.length - 1;
                } else {
                    indiceimg6--;
                }

                if (indiceimg7 == 0) {
                    indiceimg7 = portadasCarrusel.length - 1;
                } else {
                    indiceimg7--;
                }

                if (indiceimg8 == 0) {
                    indiceimg8 = portadasCarrusel.length - 1;
                } else {
                    indiceimg8--;
                }

                if (indiceimg9 == 0) {
                    indiceimg9 = portadasCarrusel.length - 1;
                } else {
                    indiceimg9--;
                }


                portada1.src = portadasCarrusel[indiceimg1].urlimg;
                portada2.src = portadasCarrusel[indiceimg2].urlimg;
                portada3.src = portadasCarrusel[indiceimg3].urlimg;
                portada4.src = portadasCarrusel[indiceimg4].urlimg;
                portada5.src = portadasCarrusel[indiceimg5].urlimg;
                portada6.src = portadasCarrusel[indiceimg6].urlimg;
                portada7.src = portadasCarrusel[indiceimg7].urlimg;
                portada8.src = portadasCarrusel[indiceimg8].urlimg;
                portada9.src = portadasCarrusel[indiceimg9].urlimg;
                contenedorNombrePelicula.textContent = portadasCarrusel[indiceimg5].nombre;
                indicePelicula.textContent = portadasCarrusel[indiceimg5].id + " de " + portadasCarrusel.length;



            }, 1000);


        }, 1550);
        animacionPortadaBool = false;
    } else {

        if (fondoBool == true) {
            animacionFondoVar = setInterval(animacionFondo, 500);
            fondoBool = false;

        }



        for (var i = 0; i < portadas.length; i++) {
            (elementPortadasAntetior[i].animate(keyframesPortadasAnterior, optionsPortadasAnterior));

        }


        setTimeout(() => {
            if (indiceimg1 == 0) {
                indiceimg1 = portadasCarrusel.length - 1;

            } else {
                indiceimg1--;
            }

            if (indiceimg2 == 0) {
                indiceimg2 = portadasCarrusel.length - 1;
            } else {
                indiceimg2--;
            }

            if (indiceimg3 == 0) {
                indiceimg3 = portadasCarrusel.length - 1;
            } else {
                indiceimg3--;
            }

            if (indiceimg4 == 0) {
                indiceimg4 = portadasCarrusel.length - 1;
            } else {
                indiceimg4--;
            }

            if (indiceimg5 == 0) {
                indiceimg5 = portadasCarrusel.length - 1;
            } else {
                indiceimg5--;
            }

            if (indiceimg6 == 0) {
                indiceimg6 = portadasCarrusel.length - 1;
            } else {
                indiceimg6--;
            }

            if (indiceimg7 == 0) {
                indiceimg7 = portadasCarrusel.length - 1;
            } else {
                indiceimg7--;
            }

            if (indiceimg8 == 0) {
                indiceimg8 = portadasCarrusel.length - 1;
            } else {
                indiceimg8--;
            }

            if (indiceimg9 == 0) {
                indiceimg9 = portadasCarrusel.length - 1;
            } else {
                indiceimg9--;
            }


            portada1.src = portadasCarrusel[indiceimg1].urlimg;
            portada2.src = portadasCarrusel[indiceimg2].urlimg;
            portada3.src = portadasCarrusel[indiceimg3].urlimg;
            portada4.src = portadasCarrusel[indiceimg4].urlimg;
            portada5.src = portadasCarrusel[indiceimg5].urlimg;
            portada6.src = portadasCarrusel[indiceimg6].urlimg;
            portada7.src = portadasCarrusel[indiceimg7].urlimg;
            portada8.src = portadasCarrusel[indiceimg8].urlimg;
            portada9.src = portadasCarrusel[indiceimg9].urlimg;
            contenedorNombrePelicula.textContent = portadasCarrusel[indiceimg5].nombre;
            indicePelicula.textContent = portadasCarrusel[indiceimg5].id + " de " + portadasCarrusel.length;




        }, 1000);

    }

}

function siguiente() {
    var audioEfecto = new Audio("sonidoEfecto/sonido3.mp3");
    audioEfecto.play();

    portada5.style.transform = "scale(1.1) translateX(0%) rotateY(-360deg)";
    portada3.style.transform = "translateX(0%)";
    portada4.style.transform = "translateX(0%)";
    portada6.style.transform = "translateX(0%)";
    portada7.style.transform = "translateX(0%)";

    ventanaVideo.style.visibility = "hidden";
    videoContenedor.style.visibility = "hidden";
    indicePelicula.style.visibility = "visible";
    contenedorNombreBar.style.visibility = "visible";

    videoF.src = "";



    if (animacionPortadaBool == true) {
        setTimeout(() => {
            if (fondoBool == true) {
                animacionFondoVar = setInterval(animacionFondo, 500);
                fondoBool = false;

            }


            for (var i = 0; i < portadas.length; i++) {
                elementPortadasSiguiente[i].animate(keyframesPortadasSiguiente, optionsPortadassiguiente);


            }

            setTimeout(() => {


                if (indiceimg1 == portadasCarrusel.length - 1) {
                    indiceimg1 = 0;

                } else {
                    indiceimg1++;
                }

                if (indiceimg2 == portadasCarrusel.length - 1) {
                    indiceimg2 = 0;
                } else {
                    indiceimg2++;
                }

                if (indiceimg3 == portadasCarrusel.length - 1) {
                    indiceimg3 = 0;
                } else {
                    indiceimg3++;
                }

                if (indiceimg4 == portadasCarrusel.length - 1) {
                    indiceimg4 = 0;
                } else {
                    indiceimg4++;
                }

                if (indiceimg5 == portadasCarrusel.length - 1) {
                    indiceimg5 = 0;
                } else {
                    indiceimg5++;
                }

                if (indiceimg6 == portadasCarrusel.length - 1) {
                    indiceimg6 = 0;
                } else {
                    indiceimg6++;
                }

                if (indiceimg7 == portadasCarrusel.length - 1) {
                    indiceimg7 = 0;
                } else {
                    indiceimg7++;
                }

                if (indiceimg8 == portadasCarrusel.length - 1) {
                    indiceimg8 = 0;
                } else {
                    indiceimg8++;
                }

                if (indiceimg9 == portadasCarrusel.length - 1) {
                    indiceimg9 = 0;
                } else {
                    indiceimg9++;
                }

                portada1.src = portadasCarrusel[indiceimg1].urlimg;
                portada2.src = portadasCarrusel[indiceimg2].urlimg;
                portada3.src = portadasCarrusel[indiceimg3].urlimg;
                portada4.src = portadasCarrusel[indiceimg4].urlimg;
                portada5.src = portadasCarrusel[indiceimg5].urlimg;
                portada6.src = portadasCarrusel[indiceimg6].urlimg;
                portada7.src = portadasCarrusel[indiceimg7].urlimg;
                portada8.src = portadasCarrusel[indiceimg8].urlimg;
                portada9.src = portadasCarrusel[indiceimg9].urlimg;

                contenedorNombrePelicula.textContent = portadasCarrusel[indiceimg5].nombre;
                indicePelicula.textContent = portadasCarrusel[indiceimg5].id + " de " + portadasCarrusel.length;




            }, 1000);
        }, 1550);
        animacionPortadaBool = false;


    } else {
        if (fondoBool == true) {
            animacionFondoVar = setInterval(animacionFondo, 500);
            fondoBool = false;

        }


        for (var i = 0; i < portadas.length; i++) {
            elementPortadasSiguiente[i].animate(keyframesPortadasSiguiente, optionsPortadassiguiente);


        }

        setTimeout(() => {


            if (indiceimg1 == portadasCarrusel.length - 1) {
                indiceimg1 = 0;

            } else {
                indiceimg1++;
            }

            if (indiceimg2 == portadasCarrusel.length - 1) {
                indiceimg2 = 0;
            } else {
                indiceimg2++;
            }

            if (indiceimg3 == portadasCarrusel.length - 1) {
                indiceimg3 = 0;
            } else {
                indiceimg3++;
            }

            if (indiceimg4 == portadasCarrusel.length - 1) {
                indiceimg4 = 0;
            } else {
                indiceimg4++;
            }

            if (indiceimg5 == portadasCarrusel.length - 1) {
                indiceimg5 = 0;
            } else {
                indiceimg5++;
            }

            if (indiceimg6 == portadasCarrusel.length - 1) {
                indiceimg6 = 0;
            } else {
                indiceimg6++;
            }

            if (indiceimg7 == portadasCarrusel.length - 1) {
                indiceimg7 = 0;
            } else {
                indiceimg7++;
            }

            if (indiceimg8 == portadasCarrusel.length - 1) {
                indiceimg8 = 0;
            } else {
                indiceimg8++;
            }

            if (indiceimg9 == portadasCarrusel.length - 1) {
                indiceimg9 = 0;
            } else {
                indiceimg9++;
            }

            portada1.src = portadasCarrusel[indiceimg1].urlimg;
            portada2.src = portadasCarrusel[indiceimg2].urlimg;
            portada3.src = portadasCarrusel[indiceimg3].urlimg;
            portada4.src = portadasCarrusel[indiceimg4].urlimg;
            portada5.src = portadasCarrusel[indiceimg5].urlimg;
            portada6.src = portadasCarrusel[indiceimg6].urlimg;
            portada7.src = portadasCarrusel[indiceimg7].urlimg;
            portada8.src = portadasCarrusel[indiceimg8].urlimg;
            portada9.src = portadasCarrusel[indiceimg9].urlimg;

            contenedorNombrePelicula.textContent = portadasCarrusel[indiceimg5].nombre;
            indicePelicula.textContent = portadasCarrusel[indiceimg5].id + " de " + portadasCarrusel.length;


        }, 1000);
    }




}

window.addEventListener("load", iniciar, false)