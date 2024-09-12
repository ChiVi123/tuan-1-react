import { memo } from 'react';

interface IProps {
    onIncrease: () => void;
}

function Content({ onIncrease }: IProps) {
    console.log('re-render');

    return (
        <>
            <h2>Counter</h2>
            <button type='button' onClick={onIncrease}>
                increase
            </button>
        </>
    );
}

export default memo(Content);
