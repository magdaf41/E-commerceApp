import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './Sidebar.css'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<SidebarMenu>
				<Link to='/mobile'>mobile phone</Link>
				<Link to='/headphone'>headphone</Link>
				<Link to='/smartwatch'>smartwatch</Link>
				<Link to='/laptop'>laptop</Link>
				<Link to='/thenewest'>the newest</Link>
				<Link to='/sale'>sale</Link>
			</SidebarMenu>
		</SidebarContainer>
	)
}

export default Sidebar
