export default class Starship {
  constructor(reqData) {
    this.name = reqData.name
    this.model = reqData.model
    this.manufacturer = reqData.manufacturer
    this.costInCredits = reqData.cost_in_credits
    this.length = reqData.length
    this.maxAtmospheringSpeed = reqData.max_atmosphering_speed
    this.crew = reqData.crew
    this.passengers = reqData.passengers
    this.cargoCapacity = reqData.cargo_capacity
    this.consumables = reqData.consumables
    this.hyperdriveRating = reqData.hyperdrive_rating
    this.mglt = reqData.MGLT
    this.starshipClass = reqData.starship_class
    this.pilots = reqData.pilots
    this.films = reqData.films
    this.url = reqData.url
  }

  // get filmsData() {

  // }

}