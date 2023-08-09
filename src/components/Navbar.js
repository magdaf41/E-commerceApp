import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FaNodeJs, FaTimes } from 'react-icons/fa'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLink,
	CloseIcon,
	IconFaTimes,
} from './Navbar.css'

const Navbar = ({ isOpen, toggle }) => {
	return (
		<Nav>
			{/* <NavbarContainer> */}

			<MobileIcon onClick={toggle}>{isOpen ? <CloseIcon /> : <FaBars />}</MobileIcon>

			<NavMenu>
				<Link to='/mobile'>mobile phone</Link>
				<Link to='/headphone'>headphone</Link>
				<Link to='/smartwatch'>smartwatch</Link>
				<Link to='/laptop'>laptop</Link>
				<Link to='/thenewest'>the newest</Link>
				<Link to='/sale'>sale</Link>
			</NavMenu>
			{/* </NavbarContainer> */}
		</Nav>
	)
}

export default Navbar
