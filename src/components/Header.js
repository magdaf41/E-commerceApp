import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../store/authSlice'
import { openModal } from '../store/modalSlice'
import { clearCart } from '../store/cartSlice'

import { SlBag } from 'react-icons/sl'
import { BsPerson } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

import {
	StyledHeader,
	StyledTitle,
	StyledPSignIn,
	StyledRowTitle,
	StyledDivLogged,
	StyledLoggedUser,
	StyledLogo,
	StyledCartIcon,
	StyledHeaderIcons,
} from './Header.css'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const loggedUser = useSelector(state => state.auth.loggedUser)

	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	const logOutUser = values => {
		navigate('/')
		dispatch(logout(values))
		dispatch(openModal())
		dispatch(clearCart(orderedProducts))
	}
	const orderedProducts = useSelector(state => state.cart.orderedProducts)

	return (
		<StyledHeader>
			<StyledRowTitle>
				<StyledLogo>
					<img
						src='https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/1/2/8/128f5fedfebb9989ba1e5dd6d95c4109a94e55a2.png'
						alt='logo'></img>
				</StyledLogo>
				<StyledTitle onClick={() => navigate('/')}>
					Prjkt <span>10</span>
				</StyledTitle>

				<StyledHeaderIcons>
					{loggedUser === null ? (
						<StyledPSignIn>
							<Link to='/login'>Sign in</Link>
						</StyledPSignIn>
					) : (
						<StyledDivLogged>
							<StyledLoggedUser>
								<BsPerson />
								<h4>{loggedUser.name}</h4>
							</StyledLoggedUser>
							<button onClick={logOutUser}>
								<FiLogOut color='#dadacb' />
							</button>
						</StyledDivLogged>
					)}
					<StyledCartIcon>
						<Link to={'/order'}>
							<SlBag />
						</Link>
						<span>{orderedProducts.length}</span>
					</StyledCartIcon>
				</StyledHeaderIcons>
			</StyledRowTitle>
			<Navbar isOpen={isOpen} toggle={toggle} loggedUser={loggedUser} />
			<Sidebar isOpen={isOpen} toggle={toggle} loggedUser={loggedUser} />
		</StyledHeader>
	)
}

export default Header
