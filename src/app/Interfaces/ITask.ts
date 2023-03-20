import { PriorityEnum } from "../classes/PriorityEnum";


export interface ITask {
    idTask: number;
    dateBegin: Date;
    dateEnd: Date;
    info: string;
    priority: PriorityEnum;
}