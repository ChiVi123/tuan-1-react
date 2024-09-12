import { useRef } from 'react';

function UseRefExample() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = () => {
        console.log(inputRef.current?.value);
    };
    return (
        <div className='App'>
            <input ref={inputRef} type='text' name='name' id='name-input' />
            <button type='button' onClick={handleSubmit}>
                submit
            </button>
        </div>
    );
}

export default UseRefExample;
