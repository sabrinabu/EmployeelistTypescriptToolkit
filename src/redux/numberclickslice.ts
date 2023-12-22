import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Number={
    number:number;
}

const initialState: Number = {
    number: 0,
  };

  const numberClickSlice = createSlice({
    name: "givenindex",
    initialState,
    reducers: {
        addClickNum:(state, action:PayloadAction<number>)=>{
          state.number=action.payload;
        }
    }});

    export const { addClickNum } = numberClickSlice.actions;
export default numberClickSlice.reducer;