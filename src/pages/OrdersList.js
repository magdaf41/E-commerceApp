import React from 'react'
import { useSelector } from 'react-redux'

const OrdersList = () => {
	const orders = useSelector(state => state.ordersList.orders)

	console.log(orders)
	orders.map(o => console.log(o.products))
	return (
		<div>
			<div>
				{orders.map(o => (
					<>
						<p>{o.id}</p>
						{/* <p>{o.user.name}</p> */}
						{o.products.map(p => (
							<p>{p.title}</p>
						))}
					</>
				))}
				<p>djjdjdj</p>
			</div>
		</div>
	)
}

export default OrdersList
