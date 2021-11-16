import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface customerState {
    value: customer[];
}

interface customer {
    id: string;
    name: string;
    foods: string[];
}

interface addFoodToCustomerPayload{
    id: string;
    food: string;
}

const initialState: customerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<customer>) => {
            state.value.push(action.payload);
        },
        addFoodToCustomer: (state, action: PayloadAction<addFoodToCustomerPayload>) => {
            const customer = state.value.find(c => c.id === action.payload.id);
            if (customer) {
                customer.foods.push(action.payload.food);
            }
        }
    }
})

export const {addCustomer, addFoodToCustomer } = customerSlice.actions;
export default customerSlice.reducer;