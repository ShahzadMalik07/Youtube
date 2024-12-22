import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name:"search",
    initialState:[],
    reducers:{
        getVideos:(state,action)=>{
            state = state.push(action.payload)

        }
    }
})

export const { getVideos } = SearchSlice.actions

export default SearchSlice.reducer