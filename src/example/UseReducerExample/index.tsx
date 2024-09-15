import { randomUUID, UUID } from 'crypto';
import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskItem from './TaskItem';
import taskReducer from './taskReducer';
import { ITask } from './types';

function UseReducerExample() {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    const handleAdd = (text: string) => {
        dispatch({ type: 'added', payload: { id: randomUUID(), text } });
    };
    const handleChange = (task: ITask) => {
        dispatch({ type: 'changed', payload: task });
    };
    const handleDelete = (id: UUID) => {
        dispatch({ type: 'deleted', payload: { id } });
    };

    return (
        <>
            <AddTask onAddTask={handleAdd} />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task} onChange={handleChange} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default UseReducerExample;
