function showPetInfo(petId) {
    // open whatever element on the html will exist, and then put the info in
    console.log("clicked on ", petId);
    divElem = document.getElementById("pet_info");

    fetch(`info/${petId}`)
    .then(response => response.json())
    .then(pet => {
        pet = pet.pet
        divElem.innerHTML= `
            <div>
                <h4>${pet.name}</h4>
                <div>
                    <p>Species: ${pet.species}</p>
                    <p>Age: ${pet.age + pet.age_unit}</p>
                    <p>Gender: ${pet.gender}</p>
                </div>
                <div>
                    <p>${pet.description}<p>

                </div>
            </div>
        `;
        console.log(divElem.innerHTML)
    })
    .catch(error => console.log(error));
}

function loadPets() {
    console.log("loading pets");
    availablePetsHtml = document.getElementById("available_card_div");
    // get the available pets
    fetch("available")
    .then(response => response.json())
    .then(pets => {
        pets = pets.pets

        pets.forEach(pet => {
            // create our divs etc
            const card = document.createElement("div");
            card.classList.add("card");

            // set the html the user will see
            // Sneak peek: this is gross! React will make it nicer :)
            card.innerHTML = 
            `<div class="card-body">
                <h5 class="card-title">${pet.name}</h5>
                <p class="card-text">${pet.species}, ${pet.age}${pet.age_unit}</p>
            </div>`

            // set the data-ETC property so we can leverage it in the UI
            card.dataset.petId = pet.id;

            // add an event listener
            // note that arrow functions do not have their own 'this' context. If you want to use an arrow function, 
            // pass in e which will be an object representing the event
            card.addEventListener("click", function() {
                // unhighlight any other element
                document.querySelectorAll(".card").forEach(item => {
                    if (item !== this) {
                        item.style.backgroundColor = "";
                    }
                });
                
                const highlightColor = "lightblue";

                // toggle highlight on this clicked-on element
                if (this.style.backgroundColor === highlightColor) {
                    this.style.backgroundColor = "";
                }
                else {
                    this.style.backgroundColor = highlightColor;
                }

                showPetInfo(this.dataset.petId);
            });

            availablePetsHtml.append(card);
        });
    })
    .catch(error => console.log(error));
}

document.addEventListener("DOMContentLoaded", () => {

    loadPets();
    
});