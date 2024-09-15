import { UUID } from 'crypto';
import { useState } from 'react';
import { ITask } from './types';

interface IProps {
    task: ITask;
    onChange(value: ITask): void;
    onDelete(value: UUID): void;
}

function TaskItem({ task, onChange, onDelete }: IProps) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                type='checkbox'
                checked={task.done}
                onChange={(e) => {
                    onChange({
                        ...task,
                        done: e.target.checked,
                    });
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </label>
    );
}

export default TaskItem;
