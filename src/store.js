import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import appointmentReducer from "./features/appointmentSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer,
  },
});
