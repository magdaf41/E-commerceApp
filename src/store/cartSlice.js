import { createSlice } from '@reduxjs/toolkit'
import { productsList } from '../db/productsList'
import { v4 as uuid } from 'uuid'

const initialState = {
	products: productsList,
	orderedProducts: [],
	updateListOfProducts: productsList,
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action) => {
			const existingIndex = state.orderedProducts.findIndex(item => item.id === action.payload.id)
			if (existingIndex >= 0) {
				state.orderedProducts[existingIndex] = {
					...state.orderedProducts[existingIndex],
					cartQuantity: state.orderedProducts[existingIndex].cartQuantity + 1,
				}
				state.products = state.products.map(product => {
					if (product.id === state.orderedProducts[existingIndex].id) {
						return state.orderedProducts[existingIndex]
					} else {
						return product
					}
				})
			} else {
				let tempProductItem = { ...action.payload, cartQuantity: 1 }
				state.orderedProducts.push(tempProductItem)
			}
		},
		decreaseOrderedProducts(state, action) {
			const itemIndex = state.orderedProducts.findIndex(item => item.id === action.payload.id)

			if (state.orderedProducts[itemIndex].cartQuantity > 1) {
				state.orderedProducts[itemIndex].cartQuantity -= 1
			} else if (state.orderedProducts[itemIndex].cartQuantity === 1) {
				state.orderedProducts[itemIndex].cartQuantity = 1
			}
		},
		removeProductFromCart: (state, action) => {
			console.log(action)
			console.log(action.payload.id)
			state.orderedProducts.map(orderedProducts => {
				if (orderedProducts.id === action.payload.id) {
					const updateOrderedProducts = state.orderedProducts.filter(item => item.id !== orderedProducts.id)
					state.orderedProducts = updateOrderedProducts
				}
			})
		},
		getTotals(state, action) {
			let { total, quantity } = state.orderedProducts.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem
					const itemTotal = price * cartQuantity

					cartTotal.total += itemTotal
					cartTotal.quantity += cartQuantity

					return cartTotal
				},
				{
					total: 0,
					quantity: 0,
				}
			)
			total = parseFloat(total.toFixed(2))
			state.cartTotalQuantity = quantity
			state.cartTotalAmount = total
		},
		clearCart: state => {
			state.orderedProducts = []
		},
		addNewProduct: (state, action) => {
			const newProduct = {
				id: uuid(),
				...action.payload,
			}
			state.products = [...state.products, newProduct]
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(product => product.id !== action.payload)
		},
		editProduct: (state, action) => {
			state.products = state.products.map(product => {
				if (product.id === action.payload.id) {
					return action.payload
				} else {
					return product
				}
			})
		},
	},
})

export const {
	addProductToCart,
	decreaseOrderedProducts,
	clearCart,
	removeProductFromCart,
	getTotals,
	addNewProduct,
	removeProduct,
	editProduct,
} = cartSlice.actions

export default cartSlice.reducer
