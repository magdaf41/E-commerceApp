import React from 'react'
import { Link } from 'react-router-dom'
import { SlBag } from 'react-icons/sl'
import { BsSearch, BsPerson } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
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
} from './Header.css'
import { logout } from '../store/authSlice'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const loggedUser = useSelector(state => state.auth.loggedUser)
	const logOutUser = values => {
		dispatch(logout(values))
	}

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
						<SlBag />
						<span>0</span>
					</p>
				</StyledSingInBasket>
			</StyledRowTitle>

			<StyledRowNav>
				<StyledNav>
					<Link to='/mobile'>
						<a>mobile phone</a>
					</Link>

					<a>headphone</a>
					<a>smartwatch</a>
					<a>laptop</a>
					<a>the newest</a>
					<a>sale</a>
				</StyledNav>
			</StyledRowNav>
		</StyledHeader>
	)
}

export default Header
