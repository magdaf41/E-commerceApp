import React from 'react'
import {
	StyledProductsListContainer,
	StyledProduct,
	StyledProductImage,
	StyledProductHeader,
} from '../components/ProductsListTemplate.css'
import ReturnBtn from '../components/ReturnBtn'
import { StyledNextPage } from './HomePage.css'
import { useSelector } from 'react-redux'

const HeadphonesPages = () => {
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

							<button>Add to cart</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default HeadphonesPages
