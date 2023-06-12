import React from 'react'
import { products } from '../db/products'
import { StyledNavProductsWrapper } from './StyledNavProductsWrapper.css'

const MobilePhonesPages = () => {
	return (
		<StyledNavProductsWrapper>
			{products
				.filter(p => p.type === 'mobile phone')
				.map(phone => (
					<>
						<p>{phone.title}</p>
						<p>{phone.desc}</p>
						<p>{phone.price}</p>
						<img src={phone.image} />
					</>
				))}
		</StyledNavProductsWrapper>
	)
}

export default MobilePhonesPages
