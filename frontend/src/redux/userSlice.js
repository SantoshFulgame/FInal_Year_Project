import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  pincode: "",
  state: "",
  country: "",
  _id: "",
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
      state.addressLine1 = action.payload.data.addressLine1;
      state.addressLine2 = action.payload.data.addressLine2;
      state.city = action.payload.data.city;
      state.pincode = action.payload.data.pincode;
      state.state = action.payload.data.state;
      state.country = action.payload.data.country;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.addressLine1 = "";
      state.addressLine2 = "";
      state.city = "";
      state.pincode = "";
      state.state = "";
      state.country = "";
      state.image="";
    },
  },
});


export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
