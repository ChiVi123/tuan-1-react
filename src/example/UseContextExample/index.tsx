import Content from './Content';
import ThemeProvider from './ThemeProvider';

function UseContextExample() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    );
}
export default UseContextExample;
