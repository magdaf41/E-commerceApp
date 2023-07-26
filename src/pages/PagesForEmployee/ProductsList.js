import React, { useEffect, useState } from 'react'
import ReturnBtn from '../../components/_shared/ReturnBtn'
import { StyledTable, StyledTableHeaders } from '../../components/_shared/Table.css'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import RemoveProductModal from '../../components/Modals/RemoveProductModals'
import Product from '../../components/Product'
import { StyledButton, StyledButtonsArea } from '../../components/_shared/Buttons.css'
import {
	StyledSearchAndSelectBox,
	StyledBoxSearchInput,
	StyledSearchInput,
	StyledSearchIcon,
} from '../../components/_shared/ProductsList.css'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import SelectInput from '../../components/_shared/SelectInput'

const ProductsList = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const products = useSelector(state => state.cart.products)
	const isOpen = useSelector(store => store.modal.isOpen)

	const params = new URLSearchParams(location.search)
	const sortParam = params.get('sort')
	const searchParam = params.get('search')

	const [searchPhrase, setSearchPhrase] = useState('')
	const [productToDeleteId, setProductToDeleteId] = useState('')
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
		<>
			{isOpen && <RemoveProductModal id={productToDeleteId} />}
			<ReturnBtn whiteColor />
			<StyledSearchAndSelectBox>
				{/* <SelectInput /> */}
				<div className='select-column'>
					<label for='column-name'>Sort by column </label>
					<select className='select' onChange={updateSortParam}>
						<option value=''>--Please choose an option--</option>
						<option value='title'>Title</option>
						<option value='price'>Price</option>
						<option value='category'>Category</option>
						<option value='type'>Type</option>
					</select>
				</div>
				{/* <Select>
					<option value='' hidden>
						Type
					</option>
					<option value='1'>Audi</option>
					<option value='2'>BMW</option>
					<option value='3'>Citroen</option>
					<option value='4'>Ford</option>
				</Select> */}
				{/* <Switch
				onColor='#136c94'
				offColor='white'
				height={20}
				onChange={setSortAscending}
				checked={sortAscending}
				checkedIcon='asc'
				uncheckedIcon='desc'></Switch> */}
				<StyledBoxSearchInput>
					<StyledSearchInput
						type='text'
						placeholder='Search by title, category and type'
						value={searchPhrase}
						onChange={event => {
							setSearchPhrase(event.target.value.toLowerCase())
							updateSearchParam(event.target.value.toLowerCase())
						}}></StyledSearchInput>
					<StyledSearchIcon>
						<BsSearch />
					</StyledSearchIcon>
				</StyledBoxSearchInput>
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
							setProductToDeleteId={setProductToDeleteId}
							sortParam={sortParam}
						/>
					))}
				</tbody>
			</StyledTable>
			<StyledButtonsArea>
				<StyledButton onClick={() => navigate('/products/addNewproduct')}>Add new product</StyledButton>
			</StyledButtonsArea>
		</>
	)
}

export default ProductsList
