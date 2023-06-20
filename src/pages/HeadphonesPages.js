import React from 'react'
import {
	StyledProductsListContainer,
	StyledProduct,
	StyledProductImage,
	StyledProductHeader,
} from '../components/ProductsListTemplate.css'
import ReturnBtn from '../components/ReturnBtn'
import { StyledNextPage } from './HomePage.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToOrder } from '../store/orderSlice'

const HeadphonesPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.order.products)

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(p => p.type === 'headphones')
					.map(headphone => (
						<StyledProduct>
							<StyledProductImage>
								<img src={headphone.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{headphone.title}</h3>
								<p>{headphone.price}</p>
							</StyledProductHeader>

							<p>{headphone.desc}</p>

							<button
								onClick={() => {
									dispatch(addProductToOrder(headphone))
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default HeadphonesPages
