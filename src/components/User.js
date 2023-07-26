import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeRole } from '../store/authSlice'
import { StyledContentTableTbody } from './_shared/Table.css'
import { StyledButton, StyledSideButtons } from './_shared/Buttons.css'

const User = ({ data, orderNo }) => {
	const [userRole, setUserRole] = useState(false)
	const [role, setRole] = useState(data.role)
	const [newRole, setNewRole] = useState('')
	const [editUser, setEditUser] = useState('')

	const dispatch = useDispatch()

	//KOD DO ZAMKNIĘCIA SELECTA NA KLIKNIĘCIE POZA SELECTA
	//   const ref = useRef()
	//   useEffect(() => {
	//     const checkIfClickedOutside = e => {
	//       if (ref.current && !ref.current.contains(e.target)) {
	//         onClose()
	//       }
	//     }
	//     document.addEventListener("click", checkIfClickedOutside)
	//     return () => {
	//       document.removeEventListener("click", checkIfClickedOutside)
	//     }
	//   }, [onClose])

	useEffect(() => {
		dispatch(changeRole({ editUser, newRole }))
	}, [newRole])

	console.log(role)
	return (
		<StyledContentTableTbody key={data.id}>
			<td order>{orderNo}</td>
			<td>{data.id}</td>
			<td>{data.name}</td>
			<td>{data.email}</td>
			<td>{data.password}</td>
			<td>
				<StyledUserRoleWrapper>
					<p>{data.role}</p>
					{userRole ? (
						<select value={role} onChange={e => setNewRole(e.target.value)} onBlur={() => setUserRole(false)}>
							<option value='admin'>Admin</option>
							<option value='employee'>Employee</option>
							<option value='client'>Client</option>
						</select>
					) : (
						<StyledSideButtons
							onClick={() => {
								setUserRole(true)
								setEditUser(data.id)
							}}>
							Edit
						</StyledSideButtons>
					)}
				</StyledUserRoleWrapper>
			</td>
		</StyledContentTableTbody>
	)
}

export default User
