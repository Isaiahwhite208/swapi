import SwapiService from "./swapi-service.js";

// Private

const swapiService = new SwapiService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getPeople()">
  Get People
  </button>
  <button onclick="app.controllers.swapi.getPlanet()">
  Get Planets
  </button>
  <button onclick="app.controllers.swapi.getStarships()">
  Get Starships
  </button>
  <button onclick="app.controllers.swapi.getVehicle()">
  Get Vehicles
  <div id="people"></div>`
}

function drawPeople(people) {
  let peopleElem = document.getElementById('people')
  let template = ''
  people.results.forEach(people => {
    template += `<div>
    ${people.name}
    </div>`
  })
  peopleElem.innerHTML = template
}
function drawPlanets(planets) {
  let planetsElem = document.getElementById('planets')
  let template = ''
  planets.results.forEach(planet => {
    template += `<div>
    ${planet.name}
    </div>`
  })
  planetsElem.innerHTML = template
}
function drawStarships(starships) {
  let starshipsElem = document.getElementById('starships')
  let template = ''
  starships.results.forEach(starship => {
    template += `<div>
    ${starship.name}
    </div>`
  })
  starshipsElem.innerHTML = template
}
function drawVehicles(vehicles) {
  let vehiclesElem = document.getElementById('vehicles')
  let template = ''
  vehicles.results.forEach(vehicle => {
    template += `<div>
    ${vehicle.name}
    </div>`
  })
  vehiclesElem.innerHTML = template
}


function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}

// public

export default class SwapiController {
  constructor() {
    draw()
  }

  getPeople() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getPeople(console.log, drawError)
  }
  getPlanet() {
    swapiService.getPlanet(console.log, drawError)
  }
  getStarships() {
    swapiService.getStarships(console.log, drawError)
  }
  getVehicle() {
    swapiService.getVehicle(console.log, drawError)
  }


}