import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarContainer, SidebarMenu } from './Sidebar.css'

const Sidebar = ({ isOpen, toggle, loggedUser }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<SidebarMenu>
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
			</SidebarMenu>
		</SidebarContainer>
	)
}

export default Sidebar
