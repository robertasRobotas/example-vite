import { Employee } from "./Employee";

export type EmployeeType = {
    id: number;
    employee: string;
    isEmployeeAtZoo: Employee["isEmployeeAtZoo"];
    safetyTrainingCompletionDate: Employee["safetyTrainingCompletionDate"];
    name: Employee["name"];
    gender: Employee["gender"]
}
export type GenderType = "Male" | "Female"
export type AddEmployeeType = {
    name:Employee["name"];
     gender:Employee["gender"]
}