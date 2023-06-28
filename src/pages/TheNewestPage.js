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

const TheNewesPage = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	//   const orderedProducts = useSelector((state) => state.order.orderedProducts);

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(p => p.category === 'newest')
					.map(newProduct => (
						<StyledProduct>
							<StyledProductImage>
								<img src={newProduct.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{newProduct.title}</h3>
								<p>{newProduct.price}</p>
							</StyledProductHeader>

							<p>{newProduct.desc}</p>

							<button
								onClick={() => {
									dispatch(addProductToCart(newProduct))
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default TheNewesPage
