const Form = document.getElementById("Form");
const Film = document.getElementById("Film");
const Antall = document.getElementById("Antall");
const Fornavn = document.getElementById("Fornavn");
const Etternavn = document.getElementById("Etternavn");
const Telefonnr = document.getElementById("Telefonnr");
const Epost = document.getElementById("Epost");
const table = document.getElementById("billett-table-body")
let Liste = [];
let billett = ""
Form.addEventListener("submit", (e) => {
    e.preventDefault();
    o = 0;
    validateInputs();
    billett = ""
    if (o === 1) {

    } else{
        const Listen = {
            Filmval : Film.value ,
            Antallval : Antall.value ,
            Fornavnval : Fornavn.value ,
            Etternavnval : Etternavn.value,
            Telefonnrval : Telefonnr.value ,
            Epostval : Epost.value
        }
        Liste.push(Listen)
        Film.selectedIndex = 0;
        Antall.value = "";
        Fornavn.value = "";
        Etternavn.value = "";
        Telefonnr.value = "";
        Epost.value = "";
    }
    console.log(Liste)

    for (let i = 0; i < Liste.length ; i++) {
        billett += `
        <tr>
            <td>${Liste[i].Filmval}</td>
            <td>${Liste[i].Antallval}</td>
            <td>${Liste[i].Fornavnval}</td>
            <td>${Liste[i].Etternavnval}</td>
            <td>${Liste[i].Telefonnrval}</td>
            <td>${Liste[i].Epostval}</td>
        </tr>
        `
    }
    table.innerHTML = billett;
});

document.getElementById("button").onclick = function() {
    billett = ""
    Liste = []
    for (let i = 0; i < Liste.length ; i++) {
        billett += `
        <tr>
            <td>${Liste[i].Filmval}</td>
            <td>${Liste[i].Antallval}</td>
            <td>${Liste[i].Fornavnval}</td>
            <td>${Liste[i].Etternavnval}</td>
            <td>${Liste[i].Telefonnrval}</td>
            <td>${Liste[i].Epostval}</td>
        </tr>
        `
    }
    table.innerHTML = billett;
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};




const isValidEmail = (Epost) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Epost).toLowerCase());
};

const isValidTelefonnr = (Telefonnr) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(Telefonnr).toLowerCase());
};

const isValidFornavn = (Fornavn) => {
    const re = /^[a-zA-Z ]+$/;
    return re.test(String(Fornavn).toLowerCase());
};
const isValidEtternavn = (Etternavn) => {
    const re = /^[a-zA-Z ]+$/;
    return re.test(String(Etternavn).toLowerCase());
};
let o = 0;

const validateInputs = () => {

    const AntallValue = Antall.value.trim();
    const FornavnValue = Fornavn.value.trim();
    const EtternavnValue = Etternavn.value.trim();
    const TelefonnrValue = Telefonnr.value.trim();
    const EpostValue = Epost.value.trim();


    if (Film.value === "Velg film" ) {
        setError(Film, "Du må velge film");
        o = 1;
    } else {
        setSuccess(Film);
    }


    if (AntallValue === "") {
        setError(Antall, "Du må velge antall");
        o = 1;
    } else {
        setSuccess(Antall);
    }

    if (FornavnValue === "") {
        setError(Fornavn, "Du må skrive inn et fornavn");
        o = 1;
    } else if (!isValidFornavn(FornavnValue)) {
        o = 1
        setError(Fornavn, "Skriv inn et gyldig fornavn")
    }
    else {
        setSuccess(Fornavn);
    }

    if (EtternavnValue === "") {
        setError(Etternavn, "Du må skrive inn et etternavn");
        o = 1;
    } else if (!isValidEtternavn(EtternavnValue)) {
        setError(Etternavn, "Skriv inn et gyldig Etternavn")
        o = 1;
    }
    else {
        setSuccess(Etternavn);
    }

    if (TelefonnrValue === "") {
        setError(Telefonnr, "Skriv inn et telefonnr");
        o = 1;
    } else if (!isValidTelefonnr(TelefonnrValue)) {
        setError(Telefonnr, "Skriv inn et gyldig telefonnr +4790235323")
        o = 1;
    } else {
        setSuccess(Telefonnr);
    }

    if (EpostValue === "") {
        setError(Epost, "Epost er nødvendig");
        o = 1;
    } else if (!isValidEmail(EpostValue)) {
        setError(Epost, "Skriv inn en gyldig Epost adresse");
        o = 1;
    } else {
        setSuccess(Epost);
    }
};