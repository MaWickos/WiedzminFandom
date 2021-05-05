/* Skrypt odpowiedzialny za wyświetlanie zawartości strony */

/* Skrypt główny */
document.addEventListener('DOMContentLoaded', () => {

    podstawowaZawartoscStrony();

});

/* Funkcje do wyświetlania odpowiednich stron */
function podstawowaZawartoscStrony() {
    var tresc = '<article class="myclass"> <h1 class="myclass"> Gry </h1>' +
        '<div class="flexbox" id="logo">' +
        '<img src="../images/pages/games/cdpr.jpg" alt="Logo CD Project Red">' +
        '<p class="myclass"> Seria gier komputerowych i mobilnych składa się z trzech gier głównych, kilku spin-offów oraz komiksów.' +
        'Chociaż Sapkowski chwalił scenarzystów i napisaną przez nich fabułę gier, stwierdził, że są niezależnymi utworami' +
        'zrealizowanymi na podstawie jego twórczości, przedstawione w nich wydarzenia są niekanoniczne i nie' +
        'stanowią ciągu dalszego jego pięcioksięgu, a w przypadku ewentualnej kontynuacji sagi nie będzie brał ich pod uwagę. </p>' +
        '</div> </article>';

    tresc += '<article class="myclass"> <br> <h1 class="myclass"> Seria gier </h1>' +
        '<p class="myclass"> Jeżeli chcesz poczytać więcej o konkretnych odsłonach gier, kliknij na zdjęcie. </p>' +
        '<div class="flexbox">' +
        '<img src="../images/pages/games/okladki/w.jpg" alt="Wiedźmin: Edycja Rozszerzona" class="okladki" onclick="stronaW1()">' +
        '<img src="../images/pages/games/okladki/w2.jpg" alt="Wiedźmin 2: Zabójcy Królów" class="okladki" onclick="stronaW2()">' +
        '<img src="../images/pages/games/okladki/w3.jpg" alt="Wiedźmin 3: Dziki Gon" class="okladki" onclick="stronaW3()">' +
        '</div> </article>';

    document.getElementById('trescStrony').innerHTML = tresc;
}

function stronaW1() {
    var tresc = '<article class="myclass"> <h2 class="myclass"> Wiedźmin </h2>' +
        '<p class="myclass">Akcja gry rozpoczyna się w kilka lat po wydarzeniach opisanych w sadze przez Andrzeja Sapkowskiego.' +
        'Tajemniczy osobnik ucieka w deszczu przez las, a następnie pada z wycieńczenia. ' +
        'Krótko potem zostaje odnaleziony przez grupę wiedźminów, którzy rozpoznają w nim rzekomo zmarłego Geralta z Rivii.' +
        'Geralt zostaje zabrany do Kaer Morhen. Tam spotyka swoich starych znajomych. ' +
        'Bohater jednak cierpi na amnezję i nie pamięta żadnych wydarzeń ze swojej przeszłości. </p>' +
        '<div class="flexbox gallery"> <figure>' +
        '<a href="../images/pages/games/witcher_1.jpg" data-lightbox="W1" data-title="Fotos z Wiedźmin: Edycja Rozszerzona"> <img src="../images/pages/games/witcher_1.jpg" alt="Pierwsza część trylogii - Wiedźmin" > </a>' +
        '<a href="../images/pages/games/witcher_2.jpg" data-lightbox="W1" data-title="Fotos z Wiedźmin: Edycja Rozszerzona"><img src="../images/pages/games/witcher_2.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<figcaption> Materiał promujący pierwszą częśc gry stworzonej przez CDPR.</figcaption>' +
        '</figure> </div> <p class="myclass">' +
        'Radość ze spotkania przerywa niespodziewany atak na Kaer Morhen, kierowany przez potężnego maga i jego tajemniczego wspólnika, zwanego Magistrem.' +
        'Szybko okazuje się, iż bandyci zaatakowali wiedźmińskie siedliszcze tylko po to, aby zdobyć ich mutagenne eliksiry. Po odpartym ataku, zabójcy' +
        'potworów i czarodziejka Triss rozdzielają się i ruszają do Temerii, by odnaleźć człowieka stojącego za atakiem.' +
        'Geralt trafia na przedmieścia stolicy tego kraju – Wyzimy. Tam stara się dostać do odciętego przez kwarantannę miasta oraz odzyskać utracone wspomnienia.' +
        '</p> <div class="flexbox gallery"> <figure>' +
        '<a href="../images/pages/games/witcher_3.jpg" data-lightbox="W1" data-title="Fotos z Wiedźmin: Edycja Rozszerzona"><img src="../images/pages/games/witcher_3.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<a href="../images/pages/games/witcher_4.jpg" data-lightbox="W1" data-title="Fotos z Wiedźmin: Edycja Rozszerzona"><img src="../images/pages/games/witcher_4.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<figcaption> Materiał promujący pierwszą częśc gry stworzonej przez CDPR.</figcaption>' +
        '</figure> </div> <p> Powrót <img class="social_media" id="powrot" src="../images/pages/games/cdpr.jpg" alt="Powrót" onclick="podstawowaZawartoscStrony()"> </article>';

    document.getElementById('trescStrony').innerHTML = tresc;
}


function stronaW2() {
    var tresc = '<article class="myclass"> <h2 class="myclass"> Wiedźmin 2 - Zabójcy Królów </h2>' +
        '<p class="myclass">Po stłumieniu rebelii Wielkiego Mistrza Zakonu Płonącej Róży i ocaleniu króla Foltesta wiedźmin' +
        'Geralt wyrasta na jedną z centralnych postaci temerskiego dworu. W tych niespokojnych czasach' +
        'Foltest próbuje przywrócić ład w swoim królestwie, i składa wiedźminowi propozycję nie do odrzucenia' +
        '– Geralt staje się osobistym ochroniarzem monarchy, gwarantując mu bardzo korzystną zapłatę za' +
        'pomoc, obiecując Geraltowi że stanie się najbogatszym wiedźminem świata.. </p>' +
        '<div class="flexbox gallery"> <figure>' +
        '<a href="../images/pages/games/witcher2_1.jpg" data-lightbox="W2" data-title="Fotos z Wiedźmin 2: Zabójcy Królów"> <img src="../images/pages/games/witcher2_1.jpg" alt="Pierwsza część trylogii - Wiedźmin" > </a>' +
        '<a href="../images/pages/games/witcher2_2.jpg" data-lightbox="W2" data-title="Fotos z Wiedźmin 2: Zabójcy Królów"><img src="../images/pages/games/witcher2_2.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<figcaption> Fragmenty przedstawiające rozgrywkę</figcaption>' +
        '</figure> </div> <p class="myclass">' +
        'W Wiedźminie 2 postawiono na rozbudowany system wyborów moralnych, który prowadzi do wielu różnych kombinacji zakończenia gry (łącznie 16). Sam Geralt wielokrotnie wyraża wątpliwości odnośnie swojego fachu, czyli tropienia i polowania na potwory. ' +
        'Ważne jest to, że na fabułę i świat Wiedźmina 2 wpływ mają nie tylko nasze decyzje, ale chociażby to, kto jest naszym kompanem. Oprócz walki Wiedźmin ceni sobie również inne rozrywki, jak chociażby flirtowanie z kobietami.' +
        'W tej odsłonie nie otrzymujemy kart z obrazkami za „podboje”, ale nadal mamy możliwość doprowadzenia do „sytuacji łóżkowej” z niektórymi przedstawicielkami płci pięknej.' +
        '</p> <div class="flexbox gallery"> <figure>' +
        '<a href="../images/pages/games/witcher2_3.jpg" data-lightbox="W2" data-title="Fotos z Wiedźmin 2: Zabójcy Królów"><img src="../images/pages/games/witcher2_3.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<a href="../images/pages/games/witcher2_4.jpg" data-lightbox="W2" data-title="Fotos z Wiedźmin 2: Zabójcy Królów"><img src="../images/pages/games/witcher2_4.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<figcaption> Fragmenty przedstawiające rozgrywkę</figcaption>' +
        '</figure> </div> <p> Powrót <img class="social_media" id="powrot" src="../images/pages/games/cdpr.jpg" alt="Powrót" onclick="podstawowaZawartoscStrony()"> </article>';

    document.getElementById('trescStrony').innerHTML = tresc;
}

function stronaW3() {
    var tresc = '<article class="myclass"> <h2 class="myclass"> Wiedźmin 3 - Dziki Gon </h2>' +
        '<p class="myclass">Po stłumieniu rebelii Wielkiego Mistrza Zakonu Płonącej Róży i ocaleniu króla Foltesta wiedźmin' +
        'Geralt wyrasta na jedną z centralnych postaci temerskiego dworu. W tych niespokojnych czasach' +
        'Foltest próbuje przywrócić ład w swoim królestwie, i składa wiedźminowi propozycję nie do odrzucenia' +
        '– Geralt staje się osobistym ochroniarzem monarchy, gwarantując mu bardzo korzystną zapłatę za' +
        'pomoc, obiecując Geraltowi że stanie się najbogatszym wiedźminem świata.. </p>' +
        '<div class="flexbox gallery"> <figure>' +
        '<a href="../images/pages/games/witcher3_1.jpg" data-lightbox="W2" data-title="Fotos z Wiedźmin 3: Dziki Gon"> <img src="../images/pages/games/witcher3_1.jpg" alt="Pierwsza część trylogii - Wiedźmin" > </a>' +
        '<a href="../images/pages/games/witcher3_2.jpg" data-lightbox="W2" data-title="Fotos z Wiedźmin 3: Dziki Gon"><img src="../images/pages/games/witcher3_2.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<figcaption> Fragmenty przedstawiające rozgrywkę</figcaption>' +
        '</figure> </div> <p class="myclass">' +
        'W Wiedźminie 2 postawiono na rozbudowany system wyborów moralnych, który prowadzi do wielu różnych kombinacji zakończenia gry (łącznie 16). Sam Geralt wielokrotnie wyraża wątpliwości odnośnie swojego fachu, czyli tropienia i polowania na potwory. ' +
        'Ważne jest to, że na fabułę i świat Wiedźmina 2 wpływ mają nie tylko nasze decyzje, ale chociażby to, kto jest naszym kompanem. Oprócz walki Wiedźmin ceni sobie również inne rozrywki, jak chociażby flirtowanie z kobietami.' +
        'W tej odsłonie nie otrzymujemy kart z obrazkami za „podboje”, ale nadal mamy możliwość doprowadzenia do „sytuacji łóżkowej” z niektórymi przedstawicielkami płci pięknej.' +
        '</p> <div class="flexbox gallery"> <figure>' +
        '<a href="../images/pages/games/witcher3_3.jpg" data-lightbox="W2" data-title="Fotos z Wiedźmin 3: Dziki Gon"><img src="../images/pages/games/witcher3_3.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<a href="../images/pages/games/witcher3_4.jpg" data-lightbox="W2" data-title="FFotos z Wiedźmin 3: Dziki Gon"><img src="../images/pages/games/witcher3_4.jpg" alt="Pierwsza część trylogii - Wiedźmin"> </a>' +
        '<figcaption> Fragmenty przedstawiające rozgrywkę</figcaption>' +
        '</figure> </div> <p> Powrót <img class="social_media" id="powrot" src="../images/pages/games/cdpr.jpg" alt="Powrót" onclick="podstawowaZawartoscStrony()"> </article>';

    document.getElementById('trescStrony').innerHTML = tresc;
}

