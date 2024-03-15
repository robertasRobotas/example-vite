import { Zebra } from "./features/animal/specificAnimal/Zebra";
import { Elephant } from "./features/animal/specificAnimal/Elephant";
import { Tiger } from "./features/animal/specificAnimal/Tiger";
import { Zookeeper } from "./features/employee/Zookeeper";
import { printAnimalCards } from "./features/submit_and_display/printAnimalCards";
import { printZookeeperCards } from "./features/submit_and_display/printEmployeeCards";
import { submitFormByAnimal } from "./features/submit_and_display/submitAnimal";
import { submitFormByEmployee } from "./features/submit_and_display/submitEmployee";
import { animalFormSubmit } from "./features/submit_and_display/submitAnimal";
import { employeeFormSubmit } from "./features/submit_and_display/submitEmployee";

const zookeeperSubmitButton = document.getElementById('zookeeperSubmitButton') as HTMLButtonElement
const animalSubmitButton = document.getElementById('animalSubmitButton') as HTMLButtonElement
const zookeeperGenderSelect = document.getElementById('zookeeperGenderSelect') as HTMLSelectElement
const animalCards = document.getElementById('animalCards') as HTMLSpanElement
const zookeeperCards = document.getElementById('zookeeperCards') as HTMLSpanElement
const animalSelect = document.getElementById('animalSelect') as HTMLSelectElement


animalSelect.addEventListener("change", submitFormByAnimal)
zookeeperGenderSelect.addEventListener("change", submitFormByEmployee)
animalCards.addEventListener('click', printAnimalCards)
zookeeperCards.addEventListener('click', printZookeeperCards)
animalSubmitButton.addEventListener("click", animalFormSubmit)
zookeeperSubmitButton.addEventListener("click", employeeFormSubmit)







const zebra1 = new Zebra({name: "svajunas", age: 2, maxSpeed: 20, origin: "africa"})
const elephant1 = new Elephant({name: "Gytis", age: 25, weightKg: 3})
const tiger1 = new Tiger({name: "Viktoras", age: 32})
const zookeeper = new Zookeeper({name: "Gabija", gender: "Female"})
const employee1 = new Zookeeper({name: "Džionas", gender: "Male"})

