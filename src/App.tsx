import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { bankruptMoney, bankSelectTotal, depositMoney, withdrawMoney } from './state';

function App() {
    const dispatch = useDispatch();
    const state = useSelector(bankSelectTotal);
    return (
        <div className='App'>
            <h1>{state}</h1>
            <button type='button' onClick={() => dispatch(depositMoney(100))}>
                Deposit
            </button>

            <button type='button' onClick={() => dispatch(withdrawMoney(100))}>
                Withdraw
            </button>

            <button type='button' onClick={() => dispatch(bankruptMoney())}>
                Bankrupt
            </button>
        </div>
    );
}

export default App;
