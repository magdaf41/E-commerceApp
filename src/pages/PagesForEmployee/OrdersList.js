import React from 'react'
import { useSelector } from 'react-redux'
import { StyledOrderedProductList, StyledProduct, StyledProductQuantity } from './OrdersList.css'
import { StyledTable, StyledTableHeaders, StyledContentTableTbody } from '../../components/_shared/Table.css'
import ReturnBtn from '../../components/_shared/ReturnBtn'

const OrdersList = () => {
	const orders = useSelector(state => state.ordersList.orders)

	return (
		<>
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
							<td>{o.id}</td>
							<td>{new Date(8.64e15).toString()}</td>
							{o.user !== null ? <td>{o.user.name}</td> : <td>null</td>}
							<td>
								{o.products.map(p => (
									<StyledOrderedProductList>
										<StyledProduct>{p.title}</StyledProduct>
									</StyledOrderedProductList>
								))}
							</td>
							<td>
								{o.products.map(p => (
									<StyledOrderedProductList>
										<StyledProductQuantity>{p.cartQuantity}</StyledProductQuantity>
									</StyledOrderedProductList>
								))}
							</td>
							<td> ${o.products.reduce((prev, curr) => prev + curr.price * curr.cartQuantity, 0)}</td>
						</StyledContentTableTbody>
					))}
				</tbody>
			</StyledTable>
		</>
	)
}

export default OrdersList
