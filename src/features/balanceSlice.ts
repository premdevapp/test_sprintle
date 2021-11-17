import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState : number = 0
export const balanceSlice = createSlice({
    name: "balance",
    initialState,
    reducers: {
        addBalance: (state, action: PayloadAction<number>) => {
            return state += action.payload
        },
        deduceBalance: (state, action: PayloadAction<number>) => {
            if(state-action.payload>0) return state -= action.payload
            return state
        }

    }

});

export const { addBalance, deduceBalance } = balanceSlice.actions;

export default balanceSlice.reducer;