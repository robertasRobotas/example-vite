import { Employees } from "../employee/Employees"

const zookeeperCards = document.getElementById('zookeeperCards') as HTMLSpanElement
const animalCards = document.getElementById('animalCards') as HTMLSpanElement
const cardWrapper = document.getElementById('cardWrapper') as HTMLDivElement



export function printZookeeperCards() {
    zookeeperCards.classList.add('active')
    animalCards.classList.remove('active')
    cardWrapper.innerHTML=""
    Employees.employeeList.forEach((employee)=>{
        const employeeCard = document.createElement('div')
        const employeeImg = document.createElement('img')
        const employeeName = document.createElement('p')
        const employeeGender = document.createElement('p')

        cardWrapper.append(employeeCard)
        employeeCard.append(employeeImg)
        employeeCard.append(employeeName)
        employeeCard.append(employeeGender)
        if (employee.gender==="Male") {
            employeeImg.src="./src/images/Male.png"
            setTimeout(function(){
                employeeImg.classList.add('fade')
            }, 2000)
        } 
        else if (employee.gender==="Female") {
            employeeImg.src="./src/images/Female.png"
        }

        employeeName.textContent=`name: ${employee.name}`
        employeeGender.textContent=`gender: ${employee.gender}`
        
        employeeCard.classList.add('card')
        employeeImg.classList.add('cardImage')
    })
}

