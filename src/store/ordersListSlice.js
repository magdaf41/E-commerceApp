import { createSlice } from '@reduxjs/toolkit'
import { ordersList } from '../db/ordersList'

const initialState = {
	orders: ordersList,
}

export const ordersListSlice = createSlice({
	name: 'ordersList',
	initialState,
	reducers: {
		addOrder: (state, action) => {
			state.orders = [...state.orders, action.payload]
		},
		removeOrder: (state, action) => {
			state.orders = state.orders.filter(order => order.id !== action.payload)
		},
	},
})

export const { addOrder, removeOrder } = ordersListSlice.actions

export default ordersListSlice.reducer
