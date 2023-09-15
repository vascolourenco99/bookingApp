import { configureStore } from "@reduxjs/toolkit";
import SaveReducer from "./SaveReducer";

export default configureStore({
    reducer:{
        booking:SaveReducer
    }
})