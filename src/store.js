import { configureStore, createSlice } from "@reduxjs/toolkit";

// Import reducer yang akan digunakan
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

// Konfigurasi store dengan reducers yang diimpor

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    // Tambahkan reducers lain di sini jika diperlukan
  },
});

export default store;
