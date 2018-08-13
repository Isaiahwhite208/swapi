import SwapiService from "./swapi-service.js";
import Vehicle from "../models/Vehicle.js";

// Private

const swapiService = new SwapiService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML =
    `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getPeople()">
  Get People
  </button>
  <div id="people"></div>`;
  `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getPlanet()">
  Get Planets
  </button>
  <div id="planets"></div>`;
  `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getStarships()">
  Get Starships
  </button>
  <div id="starships"></div>`;
  `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getVehicle()">
  Get Vehicles
  </button>
  <div id="vehicles"></div>`
}

function drawPeople(data) {
  let peopleElem = document.getElementById('people')
  let template = ''
  data.results.forEach(people => {
    template += `<div>
    ${people.name}
    </div>`
  })

  peopleElem.innerHTML = template

}

function drawPlanets(data) {
  let planetsElem = document.getElementById('planets')
  let template = ''
  data.results.forEach(planet => {
    template += `<div>
    ${planet.name}
    </div>`
  })

  planetsElem.innerHTML = template

}

function drawVehicles(data) {
  let vehiclesElem = document.getElementById('vehicles')
  let template = ''
  data.results.forEach(vehicle => {
    template += `<div>
    ${vehicle.name}
    </div>`
  })

  vehiclesElem.innerHTML = template

}

function drawStarships(data) {
  let starshipsElem = document.getElementById('starships')
  let template = ''
  data.results.forEach(starship => {
    template += `<div>
    ${starship.name}
    </div>`
  })

  starshipsElem.innerHTML = template

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
    console.log("HELLO FROM CONTROLLER")
    swapiService.getPlanet(console.log, drawError)
  }
  getStarships() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getStarships(console.log, drawError)
  }
  getVehicle() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getVehicle(console.log, drawError)
  }


}