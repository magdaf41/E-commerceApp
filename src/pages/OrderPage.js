import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
	removeProductFromOrder,
	addProductToOrder,
	decreaseOrderedProducts,
	clearOrderedProducts,
	getTotals,
} from '../store/orderSlice'
import {
	StyledContainerFormPage,
	StyledCart,
	StyledOrderedProductsContainer,
	StyledOrderedTable,
	StyledOrderedColumn,
	StyledOrderedHeader,
	StyledOrderedHeaderRow,
	StyledOrderedQuantity,
} from './OrderPages.css'

const OrderPage = () => {
	const dispatch = useDispatch()
	const orderedProducts = useSelector(state => state.order.orderedProducts)
	const totalAmount = useSelector(state => state.order.cartTotalAmount)

	useEffect(() => {
		dispatch(getTotals())
		console.log(orderedProducts)
	}, [orderedProducts, dispatch])

	const handleAddToCart = product => {
		dispatch(addProductToOrder(product))
	}

	const handleDecreaseCart = product => {
		dispatch(decreaseOrderedProducts(product))
	}

	return (
		<StyledContainerFormPage>
			<h2>Shopping Cart</h2>
			{orderedProducts.length === 0 ? (
				<p>Your cart is currently empty</p>
			) : (
				<StyledCart>
					<StyledOrderedProductsContainer>
						<StyledOrderedHeaderRow>
							<StyledOrderedHeader>product</StyledOrderedHeader>
							<StyledOrderedHeader>price</StyledOrderedHeader>
							<StyledOrderedHeader>quantity</StyledOrderedHeader>
							<StyledOrderedHeader>total</StyledOrderedHeader>
						</StyledOrderedHeaderRow>
						{orderedProducts.map(product => (
							<StyledOrderedTable>
								<StyledOrderedColumn key={product.id}>
									<img src={product.image}></img>
									<div>
										<p>{product.title}</p>
										<button
											onClick={() => {
												dispatch(removeProductFromOrder(product))
											}}>
											Remove
										</button>
									</div>
								</StyledOrderedColumn>

								<StyledOrderedColumn>
									<p>${product.price}</p>
								</StyledOrderedColumn>
								<StyledOrderedColumn>
									<div key={product.id}>
										<StyledOrderedQuantity>
											<button onClick={() => handleDecreaseCart(product)}>-</button>
											<div className='count'>{product.cartQuantity}</div>
											<button onClick={() => handleAddToCart(product)}>+</button>
										</StyledOrderedQuantity>
									</div>
								</StyledOrderedColumn>
								<StyledOrderedColumn>
									<p>${product.price * product.cartQuantity}</p>
								</StyledOrderedColumn>
							</StyledOrderedTable>
						))}
						{/* </div> */}
					</StyledOrderedProductsContainer>
					<div className='subtotal'>
						<span>Subtotal</span>
						<span className='amount'>${totalAmount}</span>
					</div>
					<button
						onClick={() => {
							dispatch(clearOrderedProducts(orderedProducts))
						}}>
						Clear Cart
					</button>
					<button>Check out</button>
					<div className='continue-shopping'>
						<Link to='/'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								fill='currentColor'
								className='bi bi-arrow-left'
								viewBox='0 0 16 16'>
								<path
									fillRule='evenodd'
									d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
								/>
							</svg>
							<span>Continue Shopping</span>
						</Link>
					</div>
				</StyledCart>
			)}
		</StyledContainerFormPage>
	)
}

export default OrderPage
