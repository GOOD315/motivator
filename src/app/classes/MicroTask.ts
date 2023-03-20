import { PriorityEnum } from "src/app/classes/PriorityEnum";

export class MicroTask {
    id?: number;
    idMacroTask?: number;
    date?: Date;

    name?: string;
    description?: string;
    priority?: PriorityEnum;
    isActive?: boolean;
}