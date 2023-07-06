import React, { useEffect, useState } from 'react'
import ReturnBtn from '../components/ReturnBtn'
import {
	StyledContainerProductsList,
	StyledProduct,
	StyledProductsList,
	StyledProductsListHeader,
	StyledProductsButtons,
} from './ProductsList.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../store/cartSlice'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { removeProduct } from '../store/cartSlice'
import { editProduct } from '../store/cartSlice'
import { StyledBtn } from '../components/_shared/Form.css'
import RemoveProductModal from '../components/Modals/RemoveProductModals'
import { openModal } from '../store/modalSlice'
import Product from '../components/Product'

const ProductsList = () => {
	const dispatch = useDispatch()
	// const products = useSelector(state => state.cart.updateListOfProducts)
	const editProductValue = useSelector(state => state.cart.editProduct)
	const navigate = useNavigate()
	const products = useSelector(state => state.cart.products)
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const isOpen = useSelector(store => store.modal.isOpen)
	// const [openModul, setOpenModul] = useState(false)

	const [searchProducts, setSearchProducts] = useState(products)
	const [searchPhrase, setSearchPhrase] = useState('')
	const [sortedProducts, setSortedProducts] = useState(searchProducts)

	const [productToDeleteId, setProductToDeleteId] = useState('')

	console.log(productToDeleteId)
	console.log(searchProducts)

	useEffect(() => {
		setSearchProducts(products)
	}, [products]) //dodałam useEffect po to aby obsłużyć zarówno searchProducts jak i produkt ale jak wyświetlać tylko wyszukane produkty jak sie usunie jeden z nich

	useEffect(() => {
		setSearchProducts(sortedProducts)
	}, [sortedProducts])

	const onSorterChange = e => {
		let selectedSorter = e.target.value
		const sortedListProducts = [...sortedProducts]
		if (selectedSorter === 'title') {
			sortedListProducts.sort((a, b) => (a.title > b.title ? 1 : a.title === b.title ? 0 : -1))
		} else if (selectedSorter === 'price') {
			sortedListProducts.sort((a, b) => a.price - b.price)
		} else if (selectedSorter === 'category') {
			sortedListProducts.sort((a, b) => a.category - b.category)
		}
		setSortedProducts(sortedListProducts)
		// if (!sortAscending) {
		// 	setSortAscending(true)
		// }
	}
	const search = event => {
		const matchedProducts = products.filter(
			product =>
				// (product.title || product.category || product.type).toLowerCase().includes(event.target.value.toLowerCase())
				product.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
				product.category.toLowerCase().includes(event.target.value.toLowerCase()) ||
				product.type.toLowerCase().includes(event.target.value.toLowerCase())
		)
		setSearchProducts(matchedProducts)
		setSearchPhrase(event.target.value)
	}

	console.log(searchProducts)
	return (
		<>
			{isOpen && <RemoveProductModal id={productToDeleteId} />}
			<StyledContainerProductsList>
				<ReturnBtn />
				<div className='select-column'>
					<label for='column-name'>Sort by column </label>
					<select className='select' onChange={onSorterChange}>
						<option value=''>--Please choose an option--</option>
						<option value='title'>Title</option>
						<option value='price'>Price</option>
						<option value='category'>Category</option>
					</select>
				</div>

				{/* <Switch
				onColor='#136c94'
				offColor='white'
				height={20}
				onChange={setSortAscending}
				checked={sortAscending}
				checkedIcon='asc'
				uncheckedIcon='desc'></Switch> */}

				<div>
					<input type='text' placeholder='Search by title, category and type' value={searchPhrase} onChange={search} />
				</div>
				<StyledProductsListHeader>
					<p>Lp.</p>
					<p>Id</p>
					<p>title</p>
					<p>description</p>
					<p>image</p>
					<p>price</p>
					<p>type</p>
					<p>category</p>
				</StyledProductsListHeader>

				<StyledProductsList>
					{/* {products.map((p) => ( */}
					{searchProducts.map((product, index) => (
						<Product key={product.id} data={product} orderNo={index + 1} setProductToDeleteId={setProductToDeleteId} />
					))}

					<StyledBtn onClick={() => navigate('/products/addNewproduct')}>
						<span>Add new product</span>
					</StyledBtn>
				</StyledProductsList>
			</StyledContainerProductsList>
		</>
	)
}

export default ProductsList
