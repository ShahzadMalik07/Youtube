import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import suggestionsSlice from "./SuggestionsSlice";
import SearchSlice from "./SearchSlice"

const store = configureStore({
    reducer: {
        app: appSlice,
        suggestions: suggestionsSlice,
        search: SearchSlice
    }

})

export default store