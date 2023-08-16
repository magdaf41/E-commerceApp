import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarContainer, SidebarMenu } from './Sidebar.css'
import { ListItem } from './_shared/ListItem.css'

const Sidebar = ({ isOpen, toggle, loggedUser }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<SidebarMenu>
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

				{loggedUser !== null && loggedUser.role !== 'client' && (
					<>
						<ListItem>
							<Link to='/products'>products list</Link>
						</ListItem>
						<ListItem>
							<Link to='/ordersList'>orders list</Link>
						</ListItem>
						{loggedUser !== null && loggedUser.role === 'admin' && (
							<ListItem>
								<Link to='/usersList'>users list</Link>
							</ListItem>
						)}
					</>
				)}
			</SidebarMenu>
		</SidebarContainer>
	)
}

export default Sidebar
