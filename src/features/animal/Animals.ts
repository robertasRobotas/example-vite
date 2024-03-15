import { AnimalType } from "./Animal.types"

export class Animals {
    static animalList:AnimalType[]=[]
    static logAnimals() {
        console.log(this.animalList)
    }
}