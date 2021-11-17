import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "../features/balanceSlice";
import transactionsReducer from "../features/transactionSlice";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
