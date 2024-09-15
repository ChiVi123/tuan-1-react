import { createContext } from 'react';

interface IContext {
    theme: 'light' | 'dark';
    handleTheme: () => void;
}

const defaultValue: IContext = { theme: 'light', handleTheme: () => {} };
const Context = createContext<IContext>(defaultValue);

export default Context;
