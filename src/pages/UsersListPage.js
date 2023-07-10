import React, { useEffect, useState } from 'react'
import ReturnBtn from '../components/ReturnBtn'
import // StyledContainerProductsList,
// StyledProduct,
// StyledProductsList,
// StyledProductsListHeader,
'./ProductsList.css'
import {
	StyledTable,
	StyledTableHeaders,
	StyledProduct,
	StyledProductsList,
	StyledProductsListHeader,
	StyledProductsButtons,
} from '../components/_shared/Table.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StyledBtn } from '../components/_shared/Form.css'
import User from '../components/User'

const UsersListPage = () => {
	// const dispatch = useDispatch()
	const navigate = useNavigate()
	const users = useSelector(state => state.auth.users)

	return (
		<>
			<ReturnBtn />
			<StyledTable>
				{/* <thead> */}
				<StyledTableHeaders>
					<tr>
						<th>Lp.</th>
						<th>Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Password</th>
						<th>Role</th>
					</tr>
				</StyledTableHeaders>
				{/* </thead> */}

				<tbody>
					{/* {products.map((p) => ( */}
					{users.map((user, index) => (
						// <StyledProduct key={user.id}>
						<User key={user.id} data={user} orderNo={index + 1} />
						// </StyledProduct>
					))}

					<StyledBtn onClick={() => navigate('/register')}>
						<span>Add new user</span>
					</StyledBtn>
				</tbody>
			</StyledTable>
		</>
	)
}

export default UsersListPage
