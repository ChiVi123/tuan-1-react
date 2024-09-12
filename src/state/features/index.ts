import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITotalState {
    total: number;
}

const initialState: ITotalState = {
    total: 0,
};

const bankSlice = createSlice({
    name: 'bank',
    initialState,
    reducers: (creator) => ({
        depositMoney: creator.reducer((state, { payload }: PayloadAction<number>) => {
            state.total = state.total + payload;
        }),
        withdrawMoney: creator.reducer((state, { payload }: PayloadAction<number>) => {
            state.total = state.total - payload;
        }),
        bankruptMoney: creator.reducer((state) => {
            state.total = 0;
        }),
    }),
    selectors: {
        selectTotal: (state) => state.total,
    },
});

export default bankSlice;
