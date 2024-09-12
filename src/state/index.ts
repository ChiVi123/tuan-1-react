import bankSlice from './features';

export * from './store';
export const { bankruptMoney, depositMoney, withdrawMoney } = bankSlice.actions;
export const { selectTotal: bankSelectTotal } = bankSlice.selectors;
