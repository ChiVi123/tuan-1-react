import { useState } from 'react';
import TextField from './components/TextField';

function UseStateExample() {
    const [value, setValue] = useState<string>('');

    return (
        <div className='App'>
            <TextField value={value} onValueChange={(text) => setValue(text)} />
        </div>
    );
}

export default UseStateExample;
