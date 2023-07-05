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
import { addProductToCart } from '../store/cartSlice'

const SalePage = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)

	const loggedUser = useSelector(state => state.auth.loggedUser)

	const addProductToCart = saleProduct => {
		{
			loggedUser ? dispatch(addProductToCart(saleProduct)) : console.log('Musisz być zalogowany')
		}
	}

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(p => p.category === 'sale')
					.map(saleProduct => (
						<StyledProduct>
							<StyledProductImage>
								<img src={saleProduct.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{saleProduct.title}</h3>
								<p>${saleProduct.price}</p>
							</StyledProductHeader>

							<p>{saleProduct.desc}</p>

							<button
								onClick={() => {
									addProductToCart(saleProduct)
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default SalePage
