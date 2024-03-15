import { Animals } from "../animal/Animals"

const zookeeperCards = document.getElementById('zookeeperCards') as HTMLSpanElement
const animalCards = document.getElementById('animalCards') as HTMLSpanElement
const cardWrapper = document.getElementById('cardWrapper') as HTMLDivElement



export function printAnimalCards () {
    animalCards.classList.add('active')
    zookeeperCards.classList.remove('active')
    cardWrapper.innerHTML=""
    Animals.animalList.forEach((animal)=>{
        const animalCard = document.createElement('div')
        const animalImg = document.createElement('img')
        const animalName = document.createElement('p')
        const animalAge = document.createElement('p')

        cardWrapper.append(animalCard)
        animalCard.append(animalImg)
        animalCard.append(animalName)
        animalCard.append(animalAge)

        if (animal.animal==="Elephant") {
            animalImg.src="./src/images/elephant.png"
        } 
        else if (animal.animal==="Tiger") {
            animalImg.src="./src/images/Tiger.png"
        }
        else if (animal.animal==="Zebra") {
            animalImg.src="./src/images/Zebra.png"
        }

        animalName.textContent=`name: ${animal.name}`
        animalAge.textContent=`age: ${animal.age.toString()}`
        
        animalCard.classList.add('card')
        animalImg.classList.add('cardImage')
    })
}