import React from 'react'
import { products } from '../db/products'
import {
	StyledProductsListContainer,
	StyledProduct,
	StyledProductImage,
	StyledProductHeader,
} from '../components/ProductsListTemplate.css'
import ReturnBtn from '../components/ReturnBtn'
import { StyledNextPage } from './HomePage.css'

const MobilePhonesPages = () => {
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

							<button>Add to cart</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default MobilePhonesPages
