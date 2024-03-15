import { AddAnimalType } from "./Animal.types";
import { AnimalSpeciesType } from "./Animal.types";
import { Animals } from "./Animals";

export abstract class Animal {
    readonly id: number;
    name: string;
    age: number;
    constructor({name, age}:AddAnimalType) {
        this.name = name
        this.age = age
        this.id = Animals.animalList.length
        this.addAnimalToList()
    }
    abstract makeSound():void
    private addAnimalToList() {
        Animals.animalList.push(
            {   id: this.id,
                animal: this.animalSpecies(),
                name: this.name,
                age: this.age,
            }
        )
        console.log('animal added')
    }
    abstract animalSpecies():AnimalSpeciesType
}
