import { IAction, ITask } from './types';

function taskReducer(state: ITask[], action: IAction): ITask[] {
    switch (action.type) {
        case 'added':
            const { id, text } = action.payload;
            return [...state, { id, text, done: false }];
        case 'changed':
            return state.map((item) => (item.id === action.payload.id ? action.payload : item));
        case 'deleted':
            return state.filter((item) => item.id !== action.payload.id);
        default:
            throw Error('Unknown action: ' + action.type);
    }
}

export default taskReducer;
