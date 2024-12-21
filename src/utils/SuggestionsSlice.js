import { createSlice } from "@reduxjs/toolkit";


const suggestionsSlice = createSlice({
    name:"suggestions",
    initialState:{},
    reducers:{
        cachedValues:(state,action)=>{
            state = Object.assign(state, action.payload)

        }
    }
})

export const { cachedValues } = suggestionsSlice.actions

export default suggestionsSlice.reducer