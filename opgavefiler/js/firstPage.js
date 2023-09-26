/* Opgave 1*/


// din kode her
const workerName = 'Kjeld'
const workerYears = '15'

workerMessage = `Hej ${workerName} du har nu arbejdet i vores virksomhed i ${workerYears} år`

const message = document.getElementById('message');
message.innerHTML = workerMessage;

/* Opgave 2*/


// din kode her
const myProductList = document.getElementById('produktListe')
console.log(myProductList);

let myProducts = [
    {   
        name: 'Fjernsyn',
        description: 'Flot mægtigt TV',
        price : '40'},
    {
        name : 'Sofa',
        description: 'Flot mægtig sofa',
        price : '30'
    }
];



function BuildProduct(){
    myProducts.map((produkt) => {
        let myHtmlStructure = `<article class="produkt">
    <h2>${produkt.name}</h2>
    <p>${produkt.description}</p>
    <p>Pris: ${produkt.price} kr.</p>
    </article>`
        myProductList.innerHTML += myHtmlStructure

    });
}

BuildProduct();



/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

  // submit button event listner med arrow function
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const myFormFelter = myForm.querySelectorAll('input');

    /* push resultatet fra formen ind på myPersons.
    vi ved der er 2 elementer derfor direkte adressering ved hjælp af []
    */
    myPersons.push({
    navn: myFormFelter[0].value,
    alder: myFormFelter[1].value,
    });
    
    // Sorter listen efter alder og vis den på siden
    const sorteretMyPersons = sorterEfterAlder(myPersons);
    showList(sorteretMyPersons);
    });

    // view code
    function showList(sorteretMyPersons) {
    let html = '';
    sorteretMyPersons.map((person) => {
    // html template.
    html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
    });
    personList.innerHTML = html;
    }

    // Funktion til at sortere listen efter alder
    function sorterEfterAlder(myPersons) {
    return myPersons.sort((a, b) => a.alder - b.alder);
    }


