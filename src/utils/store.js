import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import suggestionsSlice from "./SuggestionsSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        suggestions: suggestionsSlice
    }

})

export default store