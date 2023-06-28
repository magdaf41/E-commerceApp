import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import ordersListReducer from './ordersListSlice'
import modalReducer from './modalSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		ordersList: ordersListReducer,
		modal: modalReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
})
