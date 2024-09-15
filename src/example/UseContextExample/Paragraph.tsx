import { useContext } from 'react';
import Context from './context';

function Paragraph() {
    const { theme } = useContext(Context);
    return (
        <p className={theme}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque laboriosam corrupti, tempora odit aliquid
            officiis asperiores explicabo nesciunt unde facere, et velit quaerat optio, enim quos delectus accusantium
            nulla sed.
        </p>
    );
}
export default Paragraph;
