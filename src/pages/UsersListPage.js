import React, { useEffect, useState } from 'react'
import ReturnBtn from '../components/ReturnBtn'
import {
	StyledContainerProductsList,
	StyledProduct,
	StyledProductsList,
	StyledProductsListHeader,
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
import { changeRole } from '../store/authSlice'

const UsersListPage = () => {
	const dispatch = useDispatch()
	// const products = useSelector(state => state.cart.updateListOfProducts)

	// const changeUserRole = useSelector(state => state.cart.editProduct)
	const navigate = useNavigate()
	const users = useSelector(state => state.auth.users)
	const [userRole, setUserRole] = useState(false)
	const [newRole, setNewRole] = useState('')
	const [editUser, setEditUser] = useState('')

	useEffect(() => {
		setEditUser()
	}, [])

	useEffect(() => {
		dispatch(changeRole({ editUser, newRole }))
	}, [newRole])

	const changeUserRole = id => {
		setEditUser(id)
	}
	console.log(editUser)
	return (
		<StyledContainerProductsList>
			<ReturnBtn />
			<StyledProductsListHeader>
				<p>Lp.</p>
				<p>Id</p>
				<p>Name</p>
				<p>Email</p>
				<p>Password</p>
				<p>Role</p>
			</StyledProductsListHeader>

			<StyledProductsList>
				{/* {products.map((p) => ( */}
				{users.map(user => (
					<StyledProduct>
						<p>{users.indexOf(user) + 1}</p>
						<p>{user.id}</p>
						<p>{user.name}</p>
						<p>{user.email}</p>
						<p>{user.password}</p>
						<div>
							<p>{user.role}</p>
							{userRole ? (
								<div>
									<select onChange={e => setNewRole(e.target.value)}>
										<option value='admin'>Admin</option>
										<option value='Employee'>Employee</option>
										<option value='Client'>Client</option>
									</select>
								</div>
							) : (
								<button
									onClick={() => {
										setUserRole(true)
										setEditUser(user.id)
									}}>
									Edit
								</button>
							)}
						</div>
					</StyledProduct>
				))}

				<StyledBtn onClick={() => navigate('/register')}>
					<span>Add new user</span>
				</StyledBtn>
			</StyledProductsList>
		</StyledContainerProductsList>
	)
}

export default UsersListPage
