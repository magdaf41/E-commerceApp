import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
	removeProductFromCart,
	addProductToCart,
	decreaseOrderedProducts,
	clearCart,
	getTotals,
} from '../../store/cartSlice'
import {
	StyledContainerFormPage,
	StyledCart,
	StyledOrderedProductsContainer,
	StyledOrderedQuantity,
	StyledCartSumUp,
	StyledClearCart,
	StyledSubtotal,
} from './CartPage.css'
import { StyledBtn } from '../../components/_shared/Form.css'
import { addOrder } from '../../store/ordersListSlice'
import { openModal } from '../../store/modalSlice'
import Modal from '../../components/Modals/ClearCartModal'
import ClearCartModal from '../../components/Modals/ClearCartModal'
import { StyledTable, StyledTableHeaders, StyledContentTableTbody } from '../../components/_shared/Table.css'

const CartPage = () => {
	const dispatch = useDispatch()
	const orderedProducts = useSelector(state => state.cart.orderedProducts)
	const loggeduser = useSelector(state => state.auth.loggedUser)
	const navigate = useNavigate()
	const orderValue = orderedProducts.reduce((prev, curr) => prev + curr.price * curr.cartQuantity, 0)
	console.log(orderedProducts)
	const isOpen = useSelector(store => store.modal.isOpen)

	useEffect(() => {
		dispatch(getTotals())
	}, [orderedProducts, dispatch])

	const handleAddToCart = product => {
		dispatch(addProductToCart(product))
	}

	const handleDecreaseCart = product => {
		dispatch(decreaseOrderedProducts(product))
	}

	const sendOrder = () => {
		dispatch(
			addOrder({
				id: 'test',
				date: new Date(),
				user: loggeduser,
				products: orderedProducts,
			})
		)
		dispatch(clearCart(orderedProducts))
		navigate('/ordersList')
	}

	return (
		<StyledContainerFormPage>
			<h2>Shopping Cart</h2>
			{orderedProducts.length === 0 ? (
				<p>Your cart is currently empty</p>
			) : (
				<StyledCart>
					<StyledTable>
						<StyledTableHeaders>
							<th>product</th>
							<th>price</th>
							<th>quantity</th>
							<th>total</th>
						</StyledTableHeaders>
						<tbody>
							{orderedProducts.map(product => (
								<StyledContentTableTbody>
									<td>
										<img src={product.image}></img>
										<div>
											<p>{product.title}</p>
											<StyledBtn
												onClick={() => {
													dispatch(removeProductFromCart(product))
												}}>
												Remove
											</StyledBtn>
										</div>
									</td>

									<td>
										<p>${product.price}</p>
									</td>
									<td>
										<div key={product.id}>
											<StyledOrderedQuantity>
												<button onClick={() => handleDecreaseCart(product)}>-</button>
												<div className='count'>{product.cartQuantity}</div>
												<button onClick={() => handleAddToCart(product)}>+</button>
											</StyledOrderedQuantity>
										</div>
									</td>
									<td>
										<p>${product.price * product.cartQuantity}</p>
									</td>
								</StyledContentTableTbody>
							))}
						</tbody>
					</StyledTable>

					<StyledCartSumUp>
						<StyledClearCart>
							<StyledBtn
								onClick={() => {
									dispatch(openModal())
								}}>
								Clear Cart
							</StyledBtn>
							{isOpen ? <ClearCartModal></ClearCartModal> : null}
						</StyledClearCart>
						<div>
							<StyledSubtotal>
								<div>Subtotal</div>
								<span> ${orderValue}</span>
							</StyledSubtotal>
							<div>
								<StyledBtn onClick={sendOrder}>Buy</StyledBtn>
							</div>

							<div className='continue-shopping'>
								<Link to='/'>
									<span>Continue Shopping</span>
								</Link>
							</div>
						</div>
					</StyledCartSumUp>
				</StyledCart>
			)}
		</StyledContainerFormPage>
	)
}

export default CartPage
