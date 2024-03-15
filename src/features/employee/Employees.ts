import { EmployeeType } from "./Employee.types"


export class Employees {
    static employeeList:EmployeeType[]=[]
    static logEmployees() {
        console.log(this.employeeList)
    }
}