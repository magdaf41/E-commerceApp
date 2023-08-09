import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {
	Nav,
	MobileIcon,
	NavMenu,
	CloseIcon,
} from './Navbar.css'

const Navbar = ({ isOpen, toggle, loggedUser }) => {
	return (
			<Nav>
				<MobileIcon onClick={toggle}>{isOpen ? <CloseIcon /> : <FaBars />}</MobileIcon>

				<NavMenu>
					<Link to='/mobile'>mobile phone</Link>
					<Link to='/headphone'>headphone</Link>
					<Link to='/smartwatch'>smartwatch</Link>
					<Link to='/laptop'>laptop</Link>
					<Link to='/thenewest'>the newest</Link>
					<Link to='/sale'>sale</Link>
					{loggedUser !== null && loggedUser.role !== 'client' && (
						<>
							<Link to='/products'>products list</Link>
							<Link to='/ordersList'>orders list</Link>
							{loggedUser !== null && loggedUser.role === 'admin' && <Link to='/usersList'>users list</Link>}
						</>
					)}
				</NavMenu>
			</Nav>
		
	)
}

export default Navbar
