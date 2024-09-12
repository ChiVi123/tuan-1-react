import { useCallback, useState } from 'react';
import Content from './components/content';

function UseCallbackExample() {
    const [counter, setCounter] = useState<number>(0);
    const handleIncrease = useCallback(() => setCounter((prev) => prev + 1), []);

    return (
        <div className='App'>
            <Content onIncrease={handleIncrease} />
            <h3>{counter}</h3>
        </div>
    );
}

export default UseCallbackExample;
