import { Employees } from "./Employees";
import { GenderType, AddEmployeeType } from "./Employee.types";
import { Logger } from "../log/Logger";

export abstract class Employee {
    readonly id: number;
    name: string;
    gender: GenderType;
    isEmployeeAtZoo: boolean=true;
    safetyTrainingCompletionDate: string = "Not yet completed"

    constructor ({name, gender}:AddEmployeeType) {
        this.id = Employees.employeeList.length
        this.name = name
        this.gender = gender
        this.addEmployeeToList()
    }

    abstract enterZoo():void
    abstract leaveZoo():void
    takeSafetyTrainings() {
        if (this.safetyTrainingCompletionDate==="Not yet completed") {
            this.safetyTrainingCompletionDate=`${new Date().getHours()}:${new Date().getMinutes()}`
            Employees.employeeList[this.id].safetyTrainingCompletionDate=`${new Date().getHours()}:${new Date().getMinutes()}`
        } else {
           Logger.log(`safety training already completed in ${this.safetyTrainingCompletionDate}`)
        }
    }
    private addEmployeeToList() {
        Employees.employeeList.push(
            {   id: this.id,
                employee: this.whichEmployee(),
                name: this.name,
                gender: this.gender,
                isEmployeeAtZoo: this.isEmployeeAtZoo,
                safetyTrainingCompletionDate: this.safetyTrainingCompletionDate,
            }
        )
        console.log('zookeeper added')
    }
    abstract whichEmployee():string
}