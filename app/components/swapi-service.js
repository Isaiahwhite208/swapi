import Person from "../models/Person.js";
import Planet from "../models/Planet.js";
import Starship from "../models/Starship.js";
import Vehicle from "../models/Vehicle.js";

let people = {}

export default class SwapiService {

  getPeople(draw, drawError) {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          let person = new Person(rawPerson)
          people[person.id] = person
          return person
        })
        draw(myPeople)
      })
      .catch(drawError)
  }
  getPeople2(draw, drawError) {
    fetch('https://swapi.co/api/people/?page=2')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          let person = new Person(rawPerson)
          people[person.id] = person
          return person
        })
        draw(myPeople)
      })
      .catch(drawError)
  }
  getPlanet(draw, drawError) {
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
  getStarships(draw, drawError) {
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
  getVehicle(draw, drawError) {
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
}