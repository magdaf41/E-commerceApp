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

const SmartwatchPages = () => {
	const products = useSelector(state => state.cart.products)
	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(p => p.type === 'smartwatch')
					.map(smartwatch => (
						<StyledProduct>
							<StyledProductImage>
								<img src={smartwatch.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{smartwatch.title}</h3>
								<p>{smartwatch.price}</p>
							</StyledProductHeader>

							<p>{smartwatch.desc}</p>

							<button>Add to cart</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default SmartwatchPages
