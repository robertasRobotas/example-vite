import { Zebra } from "../animal/specificAnimal/Zebra"
import { Tiger } from "../animal/specificAnimal/Tiger"
import { printAnimalCards } from "./printAnimalCards"
import { Elephant } from "../animal/specificAnimal/Elephant"
import { Logger } from "../log/Logger"

const animalSelect = document.getElementById('animalSelect') as HTMLSelectElement
const animalInput1 = document.getElementById('animalInput1') as HTMLInputElement
const animalInput2 = document.getElementById('animalInput2') as HTMLInputElement
const animalInput3 = document.getElementById('animalInput3') as HTMLInputElement
const animalInput4 = document.getElementById('animalInput4') as HTMLInputElement
const animalSubmitButton = document.getElementById('animalSubmitButton') as HTMLButtonElement



export function animalFormSubmit() {
    let newAnimal
    if (animalSelect.value==="Zebra") {
        newAnimal = new Zebra({
            name:animalInput1.value,
            age:Number(animalInput2.value),
            maxSpeed:Number(animalInput3.value),
            origin:animalInput4.value
        })
    }
    else if (animalSelect.value==="Tiger") {
        newAnimal = new Tiger({
            name:animalInput1.value,
            age:Number(animalInput2.value)
        })
    }
    else if (animalSelect.value==="Elephant") {
        newAnimal = new Elephant({
            name:animalInput1.value,
            age:Number(animalInput2.value),
            weightKg:Number(animalInput3.value)
        })
    }
    Logger.log('animal added')
    printAnimalCards()
    return newAnimal
}






export function submitFormByAnimal () {
    if (animalSelect.value==="Zebra") {
        animalInput1.disabled = false
        animalInput2.disabled = false
        animalInput3.disabled = false
        animalInput4.disabled = false

        animalInput3.value=""
        animalInput4.value=""

        animalInput3.placeholder="max speed"
        animalInput4.placeholder="orign"

        animalSubmitButton.disabled = false
    }
    else if (animalSelect.value==="Tiger") {
        animalInput1.disabled = false
        animalInput2.disabled = false
        animalInput3.disabled = true
        animalInput4.disabled = true

        animalInput3.value=""
        animalInput4.value=""

        animalInput3.placeholder=""
        animalInput4.placeholder=""

        animalSubmitButton.disabled = false
    }
    else if (animalSelect.value==="Elephant") {
        animalInput1.disabled = false
        animalInput2.disabled = false
        animalInput3.disabled = false
        animalInput4.disabled = true

        animalInput3.value=""
        animalInput4.value=""

        animalInput3.placeholder="weight in kg"
        animalInput4.placeholder=""

        animalSubmitButton.disabled = false
    }
}