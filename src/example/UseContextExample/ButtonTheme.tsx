import { useContext } from 'react';
import Context from './context';

function ButtonTheme() {
    const { handleTheme } = useContext(Context);
    return (
        <button type='button' onClick={handleTheme}>
            Toggle theme
        </button>
    );
}
export default ButtonTheme;
