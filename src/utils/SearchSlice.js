import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name:"search",
    initialState:[],
    reducers:{
        getVideos:(state,action)=>{
            return action.payload;

        }
    }
})

export const { getVideos } = SearchSlice.actions

export default SearchSlice.reducer