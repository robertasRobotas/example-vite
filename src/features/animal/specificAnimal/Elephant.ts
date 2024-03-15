import { Animal } from "../Animal";
import { AddElephant } from "./SpecificAnimal.types";
import { AnimalSpeciesType } from "../Animal.types";
import { ILazyAnimal } from "../Animal.interfaces";

export class Elephant extends Animal implements ILazyAnimal {
    weightKg: number;

    constructor({name, age, weightKg}:AddElephant) {
        super({name, age})
        this.weightKg = weightKg
    }
    makeSound(): void {
        console.log("brrrr")
    }
    animalSpecies():AnimalSpeciesType {
        return "Elephant"
    }
    sleep() {
        console.log("why tap, go sleep")
    }
    walk() {
        console.log("tep tep")
    }
}