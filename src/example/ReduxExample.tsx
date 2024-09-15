import { useDispatch, useSelector } from 'react-redux';
import { bankruptMoney, bankSelectTotal, depositMoney, withdrawMoney } from '../state';

function App() {
    const dispatch = useDispatch();
    const state = useSelector(bankSelectTotal);
    const money: number = 100;

    console.log('re-render');

    return (
        <div className='App'>
            <h1>{state}</h1>
            <button type='button' onClick={() => dispatch(depositMoney(money))}>
                Deposit
            </button>

            <button type='button' onClick={() => dispatch(withdrawMoney(money))}>
                Withdraw
            </button>

            <button type='button' onClick={() => dispatch(bankruptMoney())}>
                Bankrupt
            </button>
        </div>
    );
}

export default App;
