import React from 'react'
import { useSelector } from 'react-redux'
import {
	StyledOrderListContainer,
	StyledOrderWrapper,
	StyledOrdersListHeader,
	StyledOrdersList,
	StyledOrderedProductList,
	StyledProduct,
	StyledProductQuantity,
} from './OrdersList.css'

const OrdersList = () => {
	const orders = useSelector(state => state.ordersList.orders)
	const totalAmount = useSelector(state => state.cart.cartTotalAmount)

	console.log(orders)
	orders.map(o => console.log(o.products))
	return (
		<StyledOrderListContainer>
			<StyledOrdersListHeader>
				<p>Lp.</p>
				<p>Id</p>
				<p>User Name</p>
				<p>Product List</p>
				<p>Quantity</p>
				<p>Price</p>
			</StyledOrdersListHeader>
			<StyledOrdersList>
				{orders.map(o => (
					<StyledOrderWrapper>
						<p>{orders.indexOf(o) + 1}</p>
						<p>{o.id}</p>

						{o.user !== null ? <p>{o.user.name}</p> : <p>null</p>}

						<p>
							{o.products.map(p => (
								<StyledOrderedProductList>
									<StyledProduct>{p.title}</StyledProduct>
								</StyledOrderedProductList>
							))}
						</p>
						<p>
							{o.products.map(p => (
								<StyledOrderedProductList>
									<StyledProductQuantity>{p.cartQuantity}</StyledProductQuantity>
								</StyledOrderedProductList>
							))}
						</p>
						<span> ${totalAmount}</span>
					</StyledOrderWrapper>
				))}
			</StyledOrdersList>
		</StyledOrderListContainer>
	)
}

export default OrdersList
