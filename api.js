
const arme = document.getElementById("1")
const agent = document.getElementById("2")

let agents = [];
fetch('https://valorant-api.com/v1/agents')
    .then((response) => {
        response.json()
        .then((res) => {
            agents = res.data
            console.log(agents[4].displayName)

        })

    })
function roll() {
    const choix = Math.random() * 10
    const arrondi = Math.round(choix)
   const choixAgent = (agents[arrondi].displayName) 
    agent.innerHTML = choixAgent;


}
let weapons = []
fetch('https://valorant-api.com/v1/weapons')
    .then((response) => {
        response.json()
        .then((guns) => {
            weapons = guns.data
        })
    })
function rollArmes() {

    const choix = Math.random() * 5
    const arrondi = Math.round(choix)
    const choixArme = weapons[arrondi].displayName;
    arme.innerHTML = choixArme;

}
