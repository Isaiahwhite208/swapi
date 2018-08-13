import Person from "../models/Person.js";
import Planet from "../models/Planet";
import Vehicle from "../models/Vehicle";
import Starship from "../models/Starship";


export default class SwapiService {

  getPeople(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          return new Person(rawPerson)
        })
        draw(myPeople)
      })
      .catch(drawError)
  }

  getPlanet(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/planets')
      .then(res => res.json())
      .then(res => {
        let myPlanet = res.results.map(rawPlanet => {
          return new Planet(rawPlanet)
        })
        draw(myPlanet)
      })
      .catch(drawError)
  }

  getVehicle(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/vehicles')
      .then(res => res.json())
      .then(res => {
        let myVehicle = res.results.map(rawVehicle => {
          return new Vehicle(rawVehicle)
        })
        draw(myVehicle)
      })
      .catch(drawError)
  }


  getStarships(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/starships')
      .then(res => res.json())
      .then(res => {
        let myStarship = res.results.map(rawStarship => {
          return new Starship(rawStarship)
        })
        draw(myStarship)
      })
      .catch(drawError)
  }
}