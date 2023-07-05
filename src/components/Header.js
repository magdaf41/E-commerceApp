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
							<p>
								<BsPerson />
								<h4>{loggedUser.name}</h4>
							</p>
							<button onClick={logOutUser}>
								<FiLogOut />
							</button>
						</StyledDivLogged>
					)}

					<p>
						<Link to={'/order'}>
							<SlBag />
							<span>{orderedProducts.length}</span>
						</Link>
					</p>
				</StyledSingInBasket>
			</StyledRowTitle>

			<StyledRowNav>
				<StyledNav>
					<Link to='/mobile'>
						<a>mobile phone</a>
					</Link>
					<Link to='/headphone'>
						<a>headphone</a>
					</Link>
					<Link to='/smartwatch'>
						<a>smartwatch</a>
					</Link>
					<Link to='/laptop'>
						<a>laptop</a>
					</Link>
					<Link to='/thenewest'>
						<a>the newest</a>
					</Link>
					<Link to='/sale'>
						<a>sale</a>
					</Link>
				</StyledNav>
			</StyledRowNav>
			<StyledRowNav>
				{loggedUser !== null && loggedUser.role !== 'client' && (
					<StyledNav>
						<StyledNavAdmin>
							<Link to='/products'>
								<a>products list</a>
							</Link>
							<Link to='/ordersList'>
								<a>orders list</a>
							</Link>
							{loggedUser !== null && loggedUser.role === 'admin' && (
								<Link to='/usersList'>
									<a>users list</a>
								</Link>
							)}
						</StyledNavAdmin>
					</StyledNav>
				)}
			</StyledRowNav>
		</StyledHeader>
	)
}

export default Header
