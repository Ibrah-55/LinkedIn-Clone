import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postReducer from "../components/PostReducer";
import useReducer from "../components/UseSlice";

export default configureStore({
  reducer: {
    user: useReducer,
    posts: postReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});