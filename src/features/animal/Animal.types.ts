import { Animal } from "./Animal"


export type AddAnimalType = {
    name: Animal["name"];
    age: Animal["age"]
}
export type AnimalType= {
    name: Animal["name"];
    id: Animal["id"];
    age: Animal["age"];
    animal: AnimalSpeciesType;
}

export type AnimalSpeciesType = "Zebra" | "Tiger" | "Elephant"