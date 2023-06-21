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

const LaptopPages = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.order.products)
	//   const orderedProducts = useSelector((state) => state.order.orderedProducts);

	return (
		<StyledNextPage>
			<ReturnBtn />
			<StyledProductsListContainer>
				{products
					.filter(l => l.type === 'laptop')
					.map(laptop => (
						<StyledProduct>
							<StyledProductImage>
								<img src={laptop.image} />
							</StyledProductImage>
							<StyledProductHeader>
								<h3>{laptop.title}</h3>
								<p>{laptop.price}</p>
							</StyledProductHeader>

							<p>{laptop.desc}</p>

							<button
								onClick={() => {
									dispatch(addProductToOrder(laptop))
								}}>
								Add to cart
							</button>
						</StyledProduct>
					))}
			</StyledProductsListContainer>
		</StyledNextPage>
	)
}

export default LaptopPages
