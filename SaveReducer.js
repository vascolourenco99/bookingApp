import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({
    name: "Booking",
    initialState:{
        booking: [],
    },
    reducers:{
        savedPlaces:(state, action) => {
            state.booking.push({...action.payload})
        }
    }
});

export const { savedPlaces } = SavedSlice.actions;
export default SavedSlice.reducer;