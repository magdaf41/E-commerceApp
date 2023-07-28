import React from 'react'
import { useSelector } from 'react-redux'

import { StyledTable, StyledTableHeaders, StyledContentTableTbody } from '../../components/_shared/Table.css'
import ReturnBtn from '../../components/_shared/ReturnBtn'
import { StyledPage, StyledProductsPage } from '../MainPages/HomePage.css'
import { v4 as uuid } from 'uuid'

const OrdersList = () => {
	const orders = useSelector(state => state.ordersList.orders)

	return (
		<StyledPage>
			<ReturnBtn />
			<StyledTable>
				<StyledTableHeaders>
					<tr>
						<th>Lp.</th>
						<th>Id</th>
						<th>Date</th>
						<th>User Name</th>
						<th>Product List</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</StyledTableHeaders>
				<tbody>
					{orders.map(o => (
						<StyledContentTableTbody>
							<td>{orders.indexOf(o) + 1}</td>
							<td>{uuid()}</td>
							<td>
								{new Date()
									.toISOString()
									.split('T')
									.map((el, i) => (i === 1 ? el.slice(0, 5) : el.split('-').reverse().join('-')))
									.join(' ')}
							</td>
							{o.user !== null ? <td>{o.user.name}</td> : <td>null</td>}
							<td>
								{o.products.map(p => (
									<p>{p.title}</p>
								))}
							</td>
							<td>
								{o.products.map(p => (
									<div>
										<p>{p.cartQuantity}</p>
									</div>
								))}
							</td>
							<td>${o.products.reduce((prev, curr) => prev + curr.price * curr.cartQuantity, 0)}</td>
						</StyledContentTableTbody>
					))}
				</tbody>
			</StyledTable>
		</StyledPage>
	)
}

export default OrdersList
