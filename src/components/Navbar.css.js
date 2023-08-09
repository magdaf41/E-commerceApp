import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { FaNodeJs, FaTimes } from 'react-icons/fa'

export const Nav = styled.nav`
	/* background: #fff; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
	font-size: 18px;
	height: 60px;
	padding: 30px;

	@media (max-width: 960px) {
		transition: 0.8s all ease;
	}
`

export const NavLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	color: white;
	font-weight: 700;
	&:hover {
		color: #ff7b00;
	}
`

export const MobileIcon = styled.div`
	font-size: 25px;
	display: none;
	color: white;
	padding: 20px;

	@media screen and (max-width: 768px) {
		display: block;
	}
`
export const CloseIcon = styled(FaTimes)`
	position: absolute;
	top: 20%;
	left: 35%;
	font-size: 30px;
	padding: 5px;
	border: 1px solid #dadacb;
	border-radius: 50%;
`

export const NavMenu = styled.ul`
	width: 100%;
	color: wheat;
	display: flex;
	justify-content: space-around;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	& a {
		transition: transform 0.5s;
	}

	& a:hover {
		transform: scale(1.5);
	}

	& a:focus {
		color: #068fff;
	}

	@media (max-width: 768px) {
		display: none;
	}
`

export const NavItem = styled.li`
	height: 80px;
`
export const NavLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-decoration: none;
	padding: 0 10px;
	/* height: 100%; */
	cursor: pointer;

	&:hover {
		/* transform: scale(1.5); */
		border-bottom: 2px solid #001aff;
		transition: 0.2s ease-in-out;
	}

	& a:focus {
		color: #068fff;
	}
`
