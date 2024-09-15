import { useRef } from 'react';

interface IProps {
    onAddTask(value: string): void;
}

function AddTask({ onAddTask }: IProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <input ref={inputRef} placeholder='Add task' />
            <button
                onClick={() => {
                    onAddTask(inputRef.current?.value || '');
                    inputRef.current && (inputRef.current.value = '');
                    inputRef.current?.focus();
                }}
            >
                Add
            </button>
        </>
    );
}

export default AddTask;
