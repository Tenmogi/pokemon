//This is new js, we need to fetch the data from the first js
//access the first html


let para = new URLSearchParams(window.location.search);
let pass = para.get("Pokemon");
// console.log(pass);
fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pass}`)
.then(response => response.json())
.then(static => {
    console.log(static.stats);
    document.querySelector("p[name='hp']").textContent += static.stats.HP;
    document.querySelector("p[name='attack']").textContent += static.stats.attack;
    document.querySelector("p[name='defense']").textContent += static.stats.defense;
    document.querySelector("p[name='speA']").textContent += static.stats.special_attack;
    document.querySelector("p[name='speD']").textContent += static.stats.special_defense;
    document.querySelector("p[name='speed']").textContent += static.stats.speed;
     })

