function showPetInfo(petId) {
    // open whatever element on the html will exist, and then put the info in
    console.log("clicked on ", petId);
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
            // <div class="card">
            //     <div class="card-body">
            //         <h5 class="card-title">Koda</h5>
            //         <p class="card-text">Dog, 5 yr old</p>
            //     </div>
            // </div>
            
            // create our divs etc
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = 
            `<div class="card-body">
                <h5 class="card-title">${pet.name}</h5>
                <p class="card-text">${pet.species}, ${pet.age}${pet.age_unit}</p>
            </div>`

            card.dataset.petId = pet.id;

            // const li = document.createElement("li");
            
            // li.id = pet.id;
            // // set the html the user will see
            // li.innerHTML = `${pet.name} (${pet.species}, ${pet.age}${pet.age_unit})`
            
            // // set the data-ETC property so we can leverage it in the UI
            // li.dataset.petId = pet.id

            // add an event listener
            // note that arrow functions do not have their own 'this' context. If you want to use an arrow function, 
            // pass in e which will be an object representing the event
            card.addEventListener("click", function() {
                // unhighlight any other element
                document.querySelectorAll(".card").forEach(item => {
                    if (item !== this) {
                        item.style.backgroundColor = ""
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
    });
}

document.addEventListener("DOMContentLoaded", () => {

    loadPets();
    
});