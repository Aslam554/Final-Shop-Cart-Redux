import {createSlice} from "@reduxjs/toolkit"

export const STATUSES =Object.freeze(
    {
       SUCCESS:'SUCCESS',
       ERROR:'error',
       Loading :'LOADING'
    }
)

const productSlice =createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.SUCCESS,
    },
    reducers:{
        setproducts(state,action){
       state.data= action.payload;
        },
        setStatus(state,action){
            state.status=action.payload;
        }
    }
})


export const {setproducts,setStatus} =productSlice.actions;
export default productSlice.reducer;

// middleware

export function fetchproducts(){
    return async function fetchproductThunk(dispatch){
        dispatch(setStatus(STATUSES.Loading));
        try {

            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setproducts(data));
            dispatch(setStatus(STATUSES.SUCCESS));
            
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}