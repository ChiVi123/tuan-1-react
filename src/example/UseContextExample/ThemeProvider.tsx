import { ReactNode, useState } from 'react';
import Context from './context';

interface IProps {
    children: ReactNode;
}
function ThemeProvider({ children }: IProps) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const handleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };
    return <Context.Provider value={{ theme, handleTheme }}>{children}</Context.Provider>;
}
export default ThemeProvider;
