/* Skrypt do wyświetlania okienka po wypełnieniu formularza*/

/* Funkcje */
function wyslijFormularz() {

    /* Pobranie danych z formularza */
    var dane = {};
    dane.powodKontaktu = document.getElementById('powodKontaktu').value;
    dane.jakWazne = document.getElementById('jakWazne').value;
    dane.opis = document.getElementById('opis').value;
    dane.imie = document.getElementById('imie').value;
    dane.nick = document.getElementById('nick').value;
    dane.email = document.getElementById('email').value;
    dane.nrTelefonu = document.getElementById('nrTelefonu').value;

    for (var i = 0; i < document.getElementsByName('piorytet').length; i++) {
        if (document.getElementsByName('piorytet')[i].checked) {
            dane.czyToWazne = document.getElementsByName('piorytet')[i].value;
        }
    }

    /* Dodatkowe dane bez walidacji */
    dane.postac = document.getElementById('postac').value;
    for (var i = 0; i < document.getElementsByName('share').length; i++) {
        if (document.getElementsByName('share')[i].checked) {
            dane.share = document.getElementsByName('share')[i].value;
        }
    }

    dane.like ="";
    for (var i = 0; i < document.getElementsByName('like').length; i++) {
        if (document.getElementsByName('like')[i].checked) {
            dane.like += document.getElementsByName('like')[i].value +", ";
        }
    }


    /* Sprawdzenie poprawności*/
    var poprawne = false;
    var patternImieNickPostac = /^([A-ZĆŁŃŚŹŻ][a-ząćęłńóśźż]{1,25})/;
    var patternEmail = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9\.]+$/;
    var patternTel = /[0-9]{9}/;

    if (patternImieNickPostac.test(dane.imie) && patternEmail.test(dane.email) && patternTel.test(dane.nrTelefonu) && dane.jakWazne != "" && dane.nrTelefonu != "" && dane.jakWazne <= 10 && dane.jakWazne > 0) {
        poprawne = true;

    } else {
        poprawne = false;
    }


    /* Wyświetlenie stosownego komunikatu */
    if (poprawne) {
        /* KOMUNIKAT - POPRAWNE */
        var tresc = 'Sprawdź poprawność swoich danych:' + '\n' +
            'Powód kontaktu: ' + dane.powodKontaktu + '\n' +
            'Czy to ważne? ' + dane.czyToWazne + '\n' +
            'Jak ważne? ' + dane.jakWazne + '\n' +
            'Opis problemu: ' + dane.opis + '\n' +
            'Imię: ' + dane.imie + '\n' +
            'Nick: ' + dane.nick + '\n' +
            'E-mail: ' + dane.email + '\n' +
            'Nr telefonu: ' + dane.nrTelefonu + '\n' +
            'Czy polecisz stronę? ' + dane.share + '\n' +
            'Lubię: ' + dane.like + '\n' +
            'Ulubiona postać: ' + dane.postac + '\n\n' +
            'Czy chcesz wysłać formularz? (Nie będzie można ich później zmienić!)';

        /* Decyzja użytkownika - zapisać czy poprawić dane*/
        /* Wyczyszczenie lub zostawienie zawartości pól */
        if (confirm(tresc)) {
            /* Zapisanie do sesionStorage */
            var kontakt = JSON.parse(sessionStorage.getItem('kontakt'));
            if (kontakt === null) {
                kontakt = [];
            }
            kontakt.push(dane);
            sessionStorage.setItem('kontakt', JSON.stringify(kontakt));
            document.forms[0].reset();
            return true;
        } else {
            alert("Wprowadź poprawki i wyślij formularz ponownie.");
            return false;
        }

    } else {
        alert("Wprowadź poprawne dane!");
        return false;
    }

    return false;

}

function wyswietlKomunikaty() {
    var patternImieNickPostac = /^([A-ZĆŁŃŚŹŻ][a-ząćęłńóśźż]{1,25})/;
    var patternEmail = /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9\.]+$/;
    var patternTel = /[0-9]{9}/;


    /* Komunikaty o błędach w formularzu*/
    if (!patternImieNickPostac.test(document.getElementById('imie').value)) {
        document.getElementById('imie').setCustomValidity("");
        document.getElementById('imie').reportValidity();
    } else {
        document.getElementById('imie').setCustomValidity("");
        document.getElementById('imie').reportValidity();
    }

    if (!patternEmail.test(document.getElementById('email').value)) {
        document.getElementById('email').setCustomValidity("");
        document.getElementById('email').reportValidity();
    } else {
        document.getElementById('email').setCustomValidity("");
        document.getElementById('email').reportValidity();
    }

    if (!patternTel.test(document.getElementById('nrTelefonu').value)) {
        document.getElementById('nrTelefonu').setCustomValidity("");
        document.getElementById('nrTelefonu').reportValidity();
    } else {
        document.getElementById('nrTelefonu').setCustomValidity("");
        document.getElementById('nrTelefonu').reportValidity();
    }

    if (document.getElementById('jakWazne').value == "" || document.getElementById('jakWazne').value < 0 || document.getElementById('jakWazne').value > 11) {
        document.getElementById('jakWazne').setCustomValidity("");
        document.getElementById('jakWazne').reportValidity();
    } else {
        document.getElementById('jakWazne').setCustomValidity("");
        document.getElementById('jakWazne').reportValidity();
    }
}
function wyczyscFormularz() {

    if (confirm("Hej! Jesteś pewien, że chcesz usunąć zawartość formularza?")) {
        document.forms[0].reset();
    }
}

/* Skrypt główny */
document.addEventListener('DOMContentLoaded', () => {

    var przyciskWyczysc = document.getElementById('wyczysc');
    var przyciskWyslij = document.getElementById('wyslij');
    var polaObowiazkowe = document.getElementsByClassName('obowiazkowe');

    /* Obsługa przycisku wyślij */
    przyciskWyslij.addEventListener('click', function (e) {
        /* Zablokowanie wysyłania formularza */
        e.preventDefault();

        /* Czy wysłano formularz? */
        if (wyslijFormularz()) {
            alert("Twój formularz został wysłany.")
        } else {
            wyswietlKomunikaty();
        }
    });

    przyciskWyczysc.addEventListener('click', function (e) {
        /* Zablokowanie funkcji czysczenia */
        e.preventDefault();

        /* Nowa funkcja */
        wyczyscFormularz();
    });

});