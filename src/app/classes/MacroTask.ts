import { PriorityEnum } from "src/app/classes/PriorityEnum";
import { MicroTask } from "./MicroTask";
import { User } from "./User";

export class MacroTask {
    id?: number;
    idUser?: number;
    user?: User;
    dateStart?: Date;
    dateFinish?: Date;

    name?: string;
    description?: string;
    priority?: PriorityEnum;
    isActive?: boolean;

    microTasks?: MicroTask[];
}