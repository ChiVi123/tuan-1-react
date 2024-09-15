import { UUID } from 'crypto';

export interface ITask {
    id: UUID;
    text?: string;
    done?: boolean;
}
export interface IAction {
    type: 'added' | 'changed' | 'deleted';
    payload: ITask;
}
