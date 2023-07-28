import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ReturnBtn from '../../components/_shared/ReturnBtn'
import User from '../../components/User'

import { StyledTable, StyledTableHeaders } from '../../components/_shared/Table.css'
import { StyledButton, StyledPositionButtonAddNewUser } from '../../components/_shared/Buttons.css'
import { StyledPage, StyledProductsPage } from '../MainPages/HomePage.css'

const UsersListPage = () => {
	const navigate = useNavigate()
	const users = useSelector(state => state.auth.users)

	return (
		<StyledPage>
			<ReturnBtn />
			<StyledPositionButtonAddNewUser>
				<StyledButton onClick={() => navigate('/register')}>Add new user</StyledButton>
			</StyledPositionButtonAddNewUser>
			<StyledTable>
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

				<tbody>
					{users.map((user, index) => (
						<User key={user.id} data={user} orderNo={index + 1} />
					))}
				</tbody>
			</StyledTable>
		</StyledPage>
	)
}

export default UsersListPage
