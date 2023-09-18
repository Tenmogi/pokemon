console.log("script chargé !");

//select the form
function getValues(event) {
    event.preventDefault();
    const Pokemonselect = this.querySelector('select').value;
    console.log(Pokemonselect);
    // console.log("Pokemon selected : ", Pokemonselect);
    
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${Pokemonselect}`)
    .then(response => response.json())
    .then(onePokemon => {
        console.log(onePokemon);
         //return the element whose if property matches the specified string
        const paraElement = document.getElementById("elementid");
        const paraEvolue = document.getElementById("evolueid");

        //create an array to retrive the apitypes and apievolutions datas
        let array=[];
        onePokemon.apiTypes.forEach(type =>
        {
        array.push(type.name);
        });

        //concate incase if we have more than 2 names by /"
        let lestypes = array.join("/");
        paraElement.textContent = `Element : ${lestypes}`;
        let array1=[];
        onePokemon.apiEvolutions.forEach(type =>
        {
        array1.push(type.name);
        });
        let lesevolutions = array1.join("/");
        paraEvolue.textContent = `Evolue en : ${lesevolutions}`;
        document.querySelector("h2").textContent = "Voici les informations de " + Pokemonselect;
        
        //we can not display the button until it is necessary or to hide
        document.querySelector("#resultcontainer").style.display = "block";
        document.querySelector("#detailcontainer").style.display = "block";

        //display an image whenever un pokemon was choosen    
        const pokemonImage = document.querySelector("img");
        pokemonImage.setAttribute("src", onePokemon.image);

        
        
        //this is for the 'details' button

        const btn = document.getElementById("open-link");
        btn.addEventListener("click", () => {

            //create a url to open a new html page (para=parameters)
            let para = new URLSearchParams();
            para.append("Pokemon", onePokemon.name);
            
            location.href = "http://localhost/Pokemon/details.html?" + para.toString();
                 })
       }
    )
}

//function to select the pokemon in a dropdown menu
    function getPokemons() {
        fetch(`https://pokebuildapi.fr/api/v1/pokemon`)
        .then(response => response.json())
        .then(allPokemon => {
            const PokemonSelection = document.querySelector("#pokemondropdown");
            allPokemon.forEach(unPokemon => {
                let option = document.createElement("option");
                option.setAttribute('value', unPokemon.name);
                option.textContent = unPokemon.name;
                PokemonSelection.appendChild(option);
            });
        }
        )
    }


    //function to open a form to get the access
    getPokemons();
    let monFormulaire = document.forms["pokemon"];
    monFormulaire.addEventListener("submit", getValues)

    
    


