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
	StyledLogo,
	StyledCartIcon,
} from './Header.css'
import { logout } from '../store/authSlice'
import { openModal } from '../store/modalSlice'
import { clearCart } from '../store/cartSlice'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const loggedUser = useSelector(state => state.auth.loggedUser)

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
					<img src='https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/1/2/8/128f5fedfebb9989ba1e5dd6d95c4109a94e55a2.png'></img>
				</StyledLogo>
				<StyledTitle onClick={() => navigate('/')}>
					Prjkt <span>10</span>
				</StyledTitle>

				<StyledSingInBasket>
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
						<Link to='/products'>products list</Link>
						<Link to='/ordersList'>orders list</Link>
						{loggedUser !== null && loggedUser.role === 'admin' && <Link to='/usersList'>users list</Link>}
					</StyledNav>
				)}
			</StyledRowNav>
		</StyledHeader>
	)
}

export default Header
