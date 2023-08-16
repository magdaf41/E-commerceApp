import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeProduct } from '../../store/cartSlice'
import { useLocation, useNavigate } from 'react-router-dom'

import ReturnBtn from '../../components/_shared/ReturnBtn'
import Product from '../../components/Product'
import { BsSearch } from 'react-icons/bs'
import Modal from '../../components/Modals/Modal'

import { StyledTable, StyledTableHeaders } from '../../components/_shared/Table.css'
import { StyledButton } from '../../components/_shared/Buttons.css'
import {
	StyledSearchAndSelectBox,
	StyledBoxSearchInput,
	StyledSearchInput,
	StyledSelect,
	StyledSelectArea,
} from '../../components/_shared/ProductsList.css'
import { StyledPage } from '../MainPages/HomePage.css'

const ProductsList = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const products = useSelector(state => state.cart.products)
	const isOpen = useSelector(store => store.modal.isOpen)
	const dispatch = useDispatch()

	const params = new URLSearchParams(location.search)
	const sortParam = params.get('sort')
	const searchParam = params.get('search')

	const [searchPhrase, setSearchPhrase] = useState('')
	const [productsToDelete, setProductToDelete] = useState('')
	const [productsToDisplay, setProductsToDisplay] = useState(products)

	useEffect(() => {
		let productsToShow = products

		if (searchParam) {
			productsToShow = products.filter(
				product =>
					product.title.toLowerCase().includes(searchParam) ||
					product.category.toLowerCase().includes(searchParam) ||
					product.type.toLowerCase().includes(searchParam)
			)
		}

		if (sortParam) {
			if (sortParam === 'title') {
				productsToShow = [...productsToShow].sort((a, b) => (a.title > b.title ? 1 : a.title === b.title ? 0 : -1))
			} else if (sortParam === 'price') {
				productsToShow = [...productsToShow].sort((a, b) => a.price - b.price)
			} else if (sortParam === 'category') {
				productsToShow = [...productsToShow].sort((a, b) =>
					a.category > b.category ? 1 : a.category === b.category ? 0 : -1
				)
			} else if (sortParam === 'type') {
				productsToShow = [...productsToShow].sort((a, b) => (a.type > b.type ? 1 : a.type === b.type ? 0 : -1))
			}
		}

		setProductsToDisplay(productsToShow)
	}, [products, sortParam, searchParam])

	const updateSortParam = event => {
		if (!event.target.value) {
			params.delete('sort')
		} else {
			params.set('sort', event.target.value)
		}
		navigate(`${location.pathname}?${params.toString()}`)
	}
	const updateSearchParam = value => {
		if (!value) {
			params.delete('search')
		} else {
			params.set('search', value)
		}
		navigate(`${location.pathname}?${params.toString()}`)
	}

	return (
		<StyledPage>
			{isOpen && (
				<Modal cancelText='Cancel' confirmAction={() => dispatch(removeProduct(productsToDelete))}>
					<h4>Are you sure to remove product from ProductList?</h4>
				</Modal>
			)}

			<ReturnBtn />
			<StyledSearchAndSelectBox>
				<StyledSelectArea>
					<label>Sort by column </label>
					<StyledSelect onChange={updateSortParam}>
						<option value=''>--Please choose an option--</option>
						<option value='title'>Title</option>
						<option value='price'>Price</option>
						<option value='category'>Category</option>
						<option value='type'>Type</option>
					</StyledSelect>
				</StyledSelectArea>
				<StyledBoxSearchInput>
					<StyledSearchInput
						type='text'
						placeholder='Search by title, category and type'
						value={searchPhrase}
						onChange={event => {
							setSearchPhrase(event.target.value.toLowerCase())
							updateSearchParam(event.target.value.toLowerCase())
						}}></StyledSearchInput>
					<BsSearch color='#222222' />
				</StyledBoxSearchInput>
				<StyledButton onClick={() => navigate('/products/addNewproduct')}>Add new product</StyledButton>
			</StyledSearchAndSelectBox>

			<StyledTable>
				<StyledTableHeaders>
					<tr>
						<th>Lp.</th>
						<th>Id</th>
						<th>Title</th>
						<th>Description</th>
						<th>Image</th>
						<th>Price</th>
						<th>Type</th>
						<th>Category</th>
						<th>Button</th>
					</tr>
				</StyledTableHeaders>

				<tbody>
					{productsToDisplay.map((product, index) => (
						<Product
							key={product.id}
							data={product}
							orderNo={index + 1}
							setProductToDelete={setProductToDelete}
							sortParam={sortParam}
						/>
					))}
				</tbody>
			</StyledTable>
		</StyledPage>
	)
}

export default ProductsList
