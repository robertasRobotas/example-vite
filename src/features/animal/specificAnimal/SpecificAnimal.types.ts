import { AddAnimalType } from "../Animal.types";
import { Elephant } from "./Elephant";
import { Zebra } from "./Zebra";


export type AddZebra = AddAnimalType & {
    maxSpeed: Zebra["maxSpeed"];
    origin: Zebra["origin"]
}

export type AddElephant = AddAnimalType & {
    weightKg: Elephant["weightKg"];
}

export type AddTiger = AddAnimalType
