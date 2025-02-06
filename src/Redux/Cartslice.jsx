import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                return state.filter(item => item.id !== action.payload.id);
            }
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
