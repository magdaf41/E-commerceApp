import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, MobileIcon, NavMenu, CloseIcon, BurgerIcon } from './Navbar.css'
import { ListItem } from './_shared/ListItem.css'

const Navbar = ({ isOpen, toggle, loggedUser }) => {
	return (
		<Nav>
			<MobileIcon onClick={toggle}>{isOpen ? <CloseIcon /> : <BurgerIcon />}</MobileIcon>
			<NavMenu>
				<ListItem>
					<Link to='/mobile'>mobile phone</Link>
				</ListItem>
				<ListItem>
					<Link to='/headphone'>headphone</Link>
				</ListItem>
				<ListItem>
					<Link to='/smartwatch'>smartwatch</Link>
				</ListItem>
				<ListItem>
					<Link to='/laptop'>laptop</Link>
				</ListItem>
				<ListItem>
					<Link to='/thenewest'>the newest</Link>
				</ListItem>
				<ListItem>
					<Link to='/sale'>sale</Link>
				</ListItem>
			</NavMenu>
			{loggedUser !== null && loggedUser.role !== 'client' && (
				<NavMenu>
					<ListItem>
						<Link to='/products'>product list</Link>
					</ListItem>
					<ListItem>
						<Link to='/ordersList'>ordero list</Link>
					</ListItem>
					{loggedUser !== null && loggedUser.role === 'admin' && (
						<ListItem>
							<Link to='/usersList'>user list</Link>
						</ListItem>
					)}
				</NavMenu>
			)}
		</Nav>
	)
}

export default Navbar
