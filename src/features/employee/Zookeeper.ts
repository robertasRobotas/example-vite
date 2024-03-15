import { Employee } from "./Employee"
import { AnimalSpeciesType } from "../animal/Animal.types"
import { Logger } from "../log/Logger"

export class Zookeeper extends Employee {
    enterZoo():void {
        if (this.isEmployeeAtZoo) {
            Logger.log(`Zookeeper already at the zoo`)
            return
        } else
        this.isEmployeeAtZoo = true
        Logger.log(`Zookeeper entered the zoo at ${new Date().getHours()}:${new Date().getMinutes()}`)
    }
    leaveZoo():void {
        if (!this.isEmployeeAtZoo) {
            console.log(`Zookeeper isn't currently at the zoo`)
            return
        } else
        this.isEmployeeAtZoo = false
        Logger.log(`Zookeeper left the zoo at ${new Date().getHours()}:${new Date().getMinutes()}`)
    }
    feedAnimal(animal:AnimalSpeciesType):void {
        Logger.log(`${animal} was fed at ${new Date().getHours()}:${new Date().getMinutes()}`)
    }
    whichEmployee() {
        return "Zookeeper"
    }
}