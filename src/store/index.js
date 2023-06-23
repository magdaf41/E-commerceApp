import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import cartReducer from './cartSlice'
import ordersListReducer from './ordersListSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		ordersList: ordersListReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
})
