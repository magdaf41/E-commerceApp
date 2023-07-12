import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SlBag } from 'react-icons/sl'
import { BsSearch, BsPerson } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import {
	StyledHeader,
	StyledTitle,
	StyledBoxSearchInput,
	StyledSearchInput,
	StyledSearchIcon,
	StyledSingInBasket,
	StyledPSignIn,
	StyledRowTitle,
	StyledRowNav,
	StyledNav,
	StyledDivLogged,
	StyledNavAdmin,
	StyledLoggedUser,
} from './Header.css'
import { logout } from '../store/authSlice'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const logOutUser = values => {
		dispatch(logout(values))
		navigate('/')
	}
	const orderedProducts = useSelector(state => state.cart.orderedProducts)

	return (
		<StyledHeader>
			<StyledRowTitle>
				<StyledBoxSearchInput>
					<StyledSearchInput placeholder='search'></StyledSearchInput>
					<StyledSearchIcon>
						<BsSearch />
					</StyledSearchIcon>
				</StyledBoxSearchInput>

				<StyledTitle onClick={() => navigate('/')}>
					Prjkt <span>10</span>
				</StyledTitle>

				<StyledSingInBasket>
					{loggedUser === null ? (
						<Link to='/login'>
							<StyledPSignIn>Sign in</StyledPSignIn>
						</Link>
					) : (
						<StyledDivLogged>
							<StyledLoggedUser>
								<BsPerson />
								<h4>{loggedUser.name}</h4>
							</StyledLoggedUser>
							<button onClick={logOutUser}>
								<FiLogOut />
							</button>
						</StyledDivLogged>
					)}

					<div>
						<Link to={'/order'}>
							<SlBag />
						</Link>
						<span>{orderedProducts.length}</span>
					</div>
				</StyledSingInBasket>
			</StyledRowTitle>

			<StyledRowNav>
				<StyledNav>
					<Link to='/mobile'>mobile phone</Link>
					<Link to='/headphone'>headphone</Link>
					<Link to='/smartwatch'>smartwatch</Link>
					<Link to='/laptop'>laptop</Link>
					<Link to='/thenewest'>the newest</Link>
					<Link to='/sale'>sale</Link>
				</StyledNav>
			</StyledRowNav>
			<StyledRowNav>
				{loggedUser !== null && loggedUser.role !== 'client' && (
					<StyledNav>
						<StyledNavAdmin>
							<Link to='/products'>products list</Link>
							<Link to='/ordersList'>orders list</Link>
							{loggedUser !== null && loggedUser.role === 'admin' && <Link to='/usersList'>users list</Link>}
						</StyledNavAdmin>
					</StyledNav>
				)}
			</StyledRowNav>
		</StyledHeader>
	)
}

export default Header
