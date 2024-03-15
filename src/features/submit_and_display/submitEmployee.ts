const zookeeperGenderSelect = document.getElementById('zookeeperGenderSelect') as HTMLSelectElement
const zookeeperInput1 = document.getElementById('zookeeperInput1') as HTMLInputElement
const zookeeperSubmitButton = document.getElementById('zookeeperSubmitButton') as HTMLButtonElement

import { GenderType } from "../employee/Employee.types"
import { Zookeeper } from "../employee/Zookeeper"
import { Logger } from "../log/Logger"
import { printZookeeperCards } from "./printEmployeeCards"

export function employeeFormSubmit() {
    const newZookeeper = new Zookeeper({
        name: zookeeperInput1.value,
        gender: zookeeperGenderSelect.value as GenderType,
    })
    printZookeeperCards()
    Logger.log('employee added')
    return newZookeeper
}

export function submitFormByEmployee(){
    if (zookeeperGenderSelect.value==="Male") {
        zookeeperInput1.disabled = false
        zookeeperSubmitButton.disabled = false
    }
    else {
        zookeeperInput1.disabled = false
        zookeeperSubmitButton.disabled = false
    }
}