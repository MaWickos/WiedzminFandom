/* Skrypt obsługujący sklep*/

function dodajDoKoszyka(produkt) {
    /* Pobranie informacji */
    var item = {};

    switch (produkt) {
        case 'wms': item.nazwa = 'Wiedźmiński Srebrny Miecz'; break;
        case 'opt': item.nazwa = 'Olej przeciw trupojadom'; break;
        case 'opo': item.nazwa = 'Olej przeciw ornitoreptylom'; break;
        case 'ebm': item.nazwa = 'Biała Mewa'; break;
        default: item.nazwa = produkt;
    }

    item.cena = document.getElementById('cena_' + produkt).value;
    item.ilosc = document.getElementById('ilosc_' + produkt).value;

    /* Sprawdzenie poprawnej ilości */
    if (item.ilosc < 1) {
        alert("Niepoprawna ilość produktu!")
    } else {
        item.wartosc = parseInt(item.cena) * parseInt(item.ilosc);

        /* Sprawdzenie czy produkt jest już wkoszyku */
        var indeks = czyJuzDodany(item);

        /* Nie ma produktu o podanej nazwie*/
        if (indeks == -1) {

            /* Zapisanie w JSON */
            var listaZakupow = JSON.parse(sessionStorage.getItem('listaZakupow'));
            if (listaZakupow === null) {
                listaZakupow = [];
            }
            listaZakupow.push(item);
            sessionStorage.setItem('listaZakupow', JSON.stringify(listaZakupow));

            /* Istnieje już taki produkt */
        } else {
            inkrementuj(i);
        }
    }

}


function zaladujKoszyk() {
    var tresc = "";

    /* Odczytanie zakupów z SessionStorage */
    var listaZakupow = JSON.parse(sessionStorage.getItem('listaZakupow'));

    /* Pusty koszyk */
    if (listaZakupow === null || listaZakupow[0] == null) {
        tresc += '<p> Twój koszyk jest pusty! </p>';

        /* Coś jest w koszyku */
    } else {
        tresc += '<table id="koszykZakupy"> <tr> <th id="nr"> Nr </th> <th> Produkt </th> <th id="cena"> Cena </th> <th id="ilosc"> Ilość </th> <th id="wartosc"> Wartość </th> <th id="opcje"> Opcje </th> </tr>';
        for (i = 0; i < listaZakupow.length; i++) {
            tresc += '<tr> <td>' + (i + 1) + '</td> <td>' + listaZakupow[i].nazwa + '</td> <td>' + listaZakupow[i].cena + '$</td> <td>' + listaZakupow[i].ilosc + '</td> <td>' + listaZakupow[i].wartosc + '</td> <td>' + '<button onclick="dekrementuj(' + i + ')">-</button> <button onclick="inkrementuj(' + i + ')">+</button> <button onclick="usun(' + i + ')">Usuń</button></td > </tr>';
        }
        tresc += '</table>';
    }

    /* Dodanie zawartości do streony */
    document.getElementById('produkty').innerHTML = tresc;
}

function czyJuzDodany(item) {
    var listaZakupow = JSON.parse(sessionStorage.getItem('listaZakupow'));

    if (listaZakupow === null || listaZakupow[0] == null) {
        return -1;
    } else {
        for (i = 0; i < listaZakupow.length; i++) {
            if (listaZakupow[i].nazwa === item.nazwa) {
                return i;
            }
        }
    }

    return -1;
}

/* Przyciski w koszyku */
function dekrementuj(i) {

    /* Odczytanie zakupów z SessionStorage */
    var listaZakupow = JSON.parse(sessionStorage.getItem('listaZakupow'))

    /* Zmniejszenie liczby elementów */
    if (listaZakupow[i].ilosc == '1') {
        usun(i);
    } else {
        listaZakupow[i].ilosc = parseInt(listaZakupow[i].ilosc) - 1;
        listaZakupow[i].wartosc = parseInt(listaZakupow[i].ilosc) * parseInt(listaZakupow[i].cena);
        sessionStorage.setItem('listaZakupow', JSON.stringify(listaZakupow));
    }

    /* Aktualizacja koszyka */
    zaladujKoszyk();
    zaladujPodsumowanie();
}

function inkrementuj(i) {

    /* Odczytanie zakupów z SessionStrage */
    var listaZakupow = JSON.parse(sessionStorage.getItem('listaZakupow'));

    /* Zwiększenie liczby elementów */
    if (listaZakupow[i].ilosc > 100) {
        alert("Przykro nam, ale nie mamy już więcej sztuk tego produktu!");
    } else {
        listaZakupow[i].ilosc = parseInt(listaZakupow[i].ilosc) + 1;
        listaZakupow[i].wartosc = parseInt(listaZakupow[i].ilosc) * parseInt(listaZakupow[i].cena);
        sessionStorage.setItem('listaZakupow', JSON.stringify(listaZakupow));
    }

    /* Aktualizacja koszyka */
    zaladujKoszyk();
    zaladujPodsumowanie();
}

function usun(i) {
    /* Odczytanie zakupów z SessionStrage */
    var listaZakupow = JSON.parse(sessionStorage.getItem('listaZakupow'));

    /* Komunikat o usunięciu */
    if (confirm("Czy chcesz usunąć produkt z listy zakupów?")) {
        listaZakupow.splice(i, 1);
        sessionStorage.setItem('listaZakupow', JSON.stringify(listaZakupow));
    }

    /* Aktualizacja koszyka */
    zaladujKoszyk();
    zaladujPodsumowanie();
}



/* Podsumowanie */
function zaladujPodsumowanie() {
    var tresc;
    var listaZakupow = JSON.parse(sessionStorage.getItem('listaZakupow'));
    var wartoscKoszyka = 0, wartoscRabatu = 0, doZaplaty = 0;

    if (listaZakupow === null || listaZakupow[0] == null) {
        tresc = 'Dodaj coś do koszyka, aby zobaczyć podsumowanie.';
    } else {

        for (i = 0; i < listaZakupow.length; i++) {
            wartoscKoszyka = wartoscKoszyka + listaZakupow[i].wartosc;
        }

        if (parseInt(wartoscKoszyka) >= 1000) {
            wartoscRabatu = 15
        } else {
            wartoscRabatu = 1
        }

        doZaplaty = wartoscKoszyka - (wartoscKoszyka * wartoscRabatu / 100);

        tresc = '<table id="podsumowanieTabela"> <tr> <td class="odstep"> </td>  <td class="pierwsza"> Wartość koszyka </td> <td> ' + wartoscKoszyka + '$</td> </tr>' +
            '<tr> <td class="odstep"> </td> <td class="pierwsza"> Dostawa </td> <td>' + 'Odbiór własny w Kear Morhen.' + '</td> </tr>' +
            '<tr> <td class="odstep"> </td> <td class="pierwsza"> Rabat </td> <td> ' + wartoscRabatu + '%</td> </tr>' +
            '<tr> <td class="odstep"> </td> <td class="doZaplaty"> Do zapłaty </td> <td> ' + doZaplaty + '$</td>' +
            '<tr> <td class="odstep"> </td> <td>  </td> <td> <button id="zamawiam" onclick="zamawiam()"> Zamawiam </button> </td> </tr>' +
            '</table>';
    }

    document.getElementById('podsumowanie').innerHTML = tresc;
}

function zamawiam() {
    if (confirm("Zamawiam z obowiązkiem zapłaty.")) {
        sessionStorage.removeItem('listaZakupow');
        zaladujKoszyk();
        zaladujPodsumowanie();
    }
}

/****  Skrypt główny ****/
document.addEventListener('DOMContentLoaded', () => {
    zaladujKoszyk();
    zaladujPodsumowanie();
});