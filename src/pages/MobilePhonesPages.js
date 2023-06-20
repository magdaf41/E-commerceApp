import React, { useEffect } from 'react'
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

const MobilePhonesPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.order.products)
	//   const orderedProducts = useSelector((state) => state.order.orderedProducts);

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(p => p.type === 'mobile phone')
					.map(phone => (
						<StyledProduct>
							<StyledProductImage>
								<img src={phone.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{phone.title}</h3>
								<p>{phone.price}</p>
							</StyledProductHeader>

							<p>{phone.desc}</p>

							<button
								onClick={() => {
									dispatch(addProductToOrder(phone))
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default MobilePhonesPages
