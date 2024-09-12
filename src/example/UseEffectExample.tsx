import { useEffect } from 'react';

function UseEffectExample() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []);

    return <div className='App'></div>;
}

export default UseEffectExample;
