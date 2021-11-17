import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface transaction {
    id: string;
    balance: string;
    state: string;
}

interface transactionState {
    value: transaction[];
}



const initialState: transactionState = {
    value: []
}

export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<transaction>) => {
            state.value.push(action.payload);
        }
    }
})

export const {addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;