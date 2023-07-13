import React, { useEffect, useState } from 'react'
import ReturnBtn from '../../components/ReturnBtn'
import { StyledTable, StyledTableHeaders } from '../../components/_shared/Table.css'
import { StyledBoxSearchInput, StyledSearchInput, StyledSearchIcon } from '../../components/Header.css'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RemoveProductModal from '../../components/Modals/RemoveProductModals'
import Product from '../../components/Product'
import { StyledButtons } from '../../components/_shared/Buttons.css'
import { StyledSearchAndSelectBox } from '../../components/_shared/ProductsList.css'
import Select from 'react-select'

const ProductsList = () => {
	const navigate = useNavigate()
	const products = useSelector(state => state.cart.products)
	const isOpen = useSelector(store => store.modal.isOpen)

	const [searchProducts, setSearchProducts] = useState(products)
	const [searchPhrase, setSearchPhrase] = useState('')
	const [sortedProducts, setSortedProducts] = useState(searchProducts)

	const [productToDeleteId, setProductToDeleteId] = useState('')

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
			sortedListProducts.sort((a, b) => (a.category > b.category ? 1 : a.category === b.category ? 0 : -1))
		}
		setSortedProducts(sortedListProducts)
		// if (!sortAscending) {
		// 	setSortAscending(true)
		// }
	}
	const search = event => {
		const matchedProducts = products.filter(
			product =>
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
			<ReturnBtn />
			<StyledSearchAndSelectBox>
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

				<StyledBoxSearchInput>
					<StyledSearchInput
						type='text'
						placeholder='Search by title, category and type'
						value={searchPhrase}
						onChange={search}></StyledSearchInput>
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
					</tr>
				</StyledTableHeaders>

				<tbody>
					{searchProducts.map((product, index) => (
						<Product key={product.id} data={product} orderNo={index + 1} setProductToDeleteId={setProductToDeleteId} />
					))}

					<StyledButtons onClick={() => navigate('/products/addNewproduct')}>
						<span>Add new product</span>
					</StyledButtons>
				</tbody>
			</StyledTable>
		</>
	)
}

export default ProductsList
