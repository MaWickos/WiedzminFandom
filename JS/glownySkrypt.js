/* Skrypt zawierający główne funkcje
* Zawartość:
*   - Menu boczne
*   - Baner
*   - Stopka
*   - Menu nawigacyjne
*/

/* Skrypt główny */
document.addEventListener('DOMContentLoaded', () => {
    zaladujHeader();
    zaladujAside();
    zaladujFooter();
});

/* Funkcje */
function zaladujHeader() {
    var trescHeader = '<div id="banerSlider" class="carousel slide" data-ride="carousel">' +
        '<div class="carousel-inner">' +
        '<div class="carousel-item active"> <img class="baner" src="../images/main/banerSlider/slider0.jpg" alt="Baner #1"> </div>' +
        '<div class="carousel-item"> <img class="baner" src="../images/main/banerSlider/slider5.jpg" alt="Baner #2"> </div>' +
        '<div class="carousel-item"> <img class="baner" src="../images/main/banerSlider/slider6.jpg" alt="Baner #3"> </div>' +
        '<div class="carousel-item"> <img class="baner" src="../images/main/banerSlider/slider8.jpg" alt="Baner #3"> </div>' +
        '</div>' +
        '<nav>' +
        '<ul class="main">' +
        '<li> <a href="../pages/index.html"> Home </a> </li>' +
        '<li> <a href="#"> Książki </a>' +
        '<ul class="inside">' +
        '<li> <a href="../pages/books_story.html"> Opowiadania </a> </li>' +
        '<li> <a href="../pages/books_saga.html"> Saga </a> </li>' +
        '</ul>' +
        '</li>' +
        '<li> <a href="#"> Filmy </a>' +
        '<ul class="inside">' +
        '<li> <a href="../pages/movies_netflix.html"> Serial Netflixa </a> </li>' +
        '<li> <a href="../pages/movies_tvp.html"> Serial TVP </a> </li>' +
        '</ul>' +
        '</li>' +
        '<li> <a href="../pages/games.html"> Gry </a> </li>' +
        '<li> <a href="../pages/gallery.html"> Galeria </a> </li>' +
        '<li> <a href="../pages/contact.html"> Kontakt </a> </li>' +
        '</ul>'
    '</nav>';

    document.getElementById('header').innerHTML = trescHeader;
}

function zaladujAside() {
    var trescAside = '<h3 class="myclass"> Wpadnij tutaj! </h3>' +
        '<div id="social_media">' +
        '<a href="https://twitter.com/witchernetflix"> <img class="social_media" src="../images/main/icon/twitter.png" alt="/witchernetflix"> </a>' +
        '<a href="https://www.facebook.com/WiedzminNetflix/"> <img class="social_media" src="../images/main/icon/facebook.png" alt="/WiedzminNetflix"> </a>' +
        '<a href="https://www.youtube.com/user/NewOnNetflix"> <img class="social_media" src="../images/main/icon/youtube.png" alt="/NetflixYouTube"> </a>' +
        '<a href="https://www.netflix.com/pl/title/80189685"> <img class="social_media" src="../images/main/icon/netflix.png" alt="/NetflixWitcher"> </a>' +
        '</div>' +
        '<h3 class="myclass"> Zapraszamy do sklepu! </h3>' +
        '<p class="myclass"> Sklep u Vesemira zaprasza na zakupy! Olej na Skolopendromorfa? A może Argentia na przebudzenie ducha srebrnego ostrza? Znajdziesz tu wszystko, czego potrzebuje wiedźmin! </p>' +
        '<a href="../dodatki/SKLEP/pages/index.html"> <img class="shop" src="../images/main/icon/koszyk.svg" alt="Niezbędnik wiedźmina"> </a>' +
        '<h3 class="myclass"> Cytat na dzisiaj!</h3>' +
        '<div id="cytatDnia">';
    trescAside += losujCytat() +
        '</div>' +
        '<h3 class="myclass"> Zajrzyj do galerii </h3>' +
        '<div id="gallery">' + losujGalerie() +
        '</div>';

    document.getElementById('aside').innerHTML = trescAside;

}

function zaladujFooter() {
    trescFooter = ' Wszelkie prawa zastrzeżone. &copy; Maciej Wicha';
    document.getElementById('footer').innerHTML = trescFooter;
}

function losujCytat() {
    var max = 6;   //nr ostatniego cytatu
    var min = 1;
    var tresc = '<blockquote title="Cytat dnia">';

    var cytat = Math.floor(Math.random() * (max - min)) + min;

    switch (cytat) {
        case 1: {
            tresc += '"Czy rozumiesz teraz czym jest neutralność(...)? Być neutralnym to nie znaczy być obojętnym i nieczułym. Nie trzeba zabijać w sobie uczuć. Wystarczy zabić w sobie nienawiść."' +
                '<span> - Geralt z Rivii</span>';
            break;
        }

        case 2: {
            tresc += '"Nietolerancja i zabobon zawsze były własnością głupich między pospólstwem i nigdy, jak mniemam, z gruntu wykorzenione nie będą, bo równie wieczne są jak sama głupota."' +
                'Tam, gdzie dziś piętrzą się góry, będą kiedyś morza, będą kiedyś pustynie. A głupota pozostanie głupotą."' +
                '<span> - Mędrzec </span>'
            break;
        }

        case 3: {
            tresc += '"O miłości wiemy niewiele. Z miłością jest jak z gruszką. O tej zaś wiadomo, że jest słodka i ma kształt. Spróbujcie zdefiniować kształt gruszki."' +
                '<span> - Geralt z Rivii </span>';
            break;
        }

        case 4: {
            tresc += '"Pomyliłeś niebo z gwiazdami odbitymi nocą na powierzchni stawu."' +
                '<span> - Vilgefortz </span>';
            break;
        }

        case 5: {
            tresc += '"Ten, lub ci, którzy nas stworzyli dla siebie, powinni zadbać o coś więcej. Samo przeznaczenie nie wystarczy, to zbyt mało. Trzeba czegoś wiecej."' +
                '<span> - Yennefer </span>';
            break;
        }

        case 6: {
            tresc += '"Koniec jednego to początek drugiego, nie ma granic możliwości, przynajmniej natura nie zna takich."' +
                '<span> - Miecz przeznaczenia </span>';
            break;
        }
    }

    return tresc + '</blockquote>';
}

function losujGalerie() {
    var zdjecia = [];
    var dostepneZdjecia = [1, 2, 3, 4, 5, 6, 7];

    for (i = 0; i < 4; i++) {
        var random = (Math.floor(Math.random() * (dostepneZdjecia.length)));
        zdjecia[i] = dostepneZdjecia[random];
        dostepneZdjecia.splice(random, 1)

    }

    /* Dodanie zdjeć*/
    var tresc = '<a href="../images/main/little_gallery/gallery' + zdjecia[0] + '.jpg" data-lightbox="obraz" data-title="Losowe zdjecie na dzisiaj!" alwaysShowNavOnTouchDevices>' +
        '<img class="aside_gallery" src="../images/main/little_gallery/gallery' + zdjecia[0] + '.jpg" alt="Galeria"> </a>' +
        '<a href="../images/main/little_gallery/gallery' + zdjecia[1] + '.jpg" data-lightbox="obraz" data-title="Losowe zdjecie na dzisiaj!">' +
        '<img class="aside_gallery" src="../images/main/little_gallery/gallery' + zdjecia[1] + '.jpg" alt="Galeria"> </a>' +
        '<a href="../images/main/little_gallery/gallery' + zdjecia[2] + '.jpg" data-lightbox="obraz" data-title="Losowe zdjecie na dzisiaj!">' +
        '<img class="aside_gallery" src="../images/main/little_gallery/gallery' + zdjecia[2] + '.jpg" alt="Galeria"> </a>' +
        '<a href="../images/main/little_gallery/gallery' + zdjecia[3] + '.jpg" data-lightbox="obraz" data-title="Losowe zdjecie na dzisiaj!">' +
        '<img class="aside_gallery" src="../images/main/little_gallery/gallery' + zdjecia[3] + '.jpg" alt="Galeria"> </a>';

    return tresc;

}
