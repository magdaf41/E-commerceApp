import React from 'react'
import ReturnBtn from '../../components/_shared/ReturnBtn'
import { StyledTable, StyledTableHeaders } from '../../components/_shared/Table.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import User from '../../components/User'
import { StyledButton, StyledButtonSingleArea } from '../../components/_shared/Buttons.css'

const UsersListPage = () => {
	const navigate = useNavigate()
	const users = useSelector(state => state.auth.users)

	return (
		<>
			<ReturnBtn />
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
			<StyledButtonSingleArea>
				<StyledButton onClick={() => navigate('/register')}>Add new user</StyledButton>
			</StyledButtonSingleArea>
		</>
	)
}

export default UsersListPage
