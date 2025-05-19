import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CityState {
  city: string; 
}

const initialState: CityState = {
  city: 'Trencin', 
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const {setCity} = citySlice.actions;
export default citySlice.reducer;