import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
	height: 80px;
	display: flex;
	flex-direction: column;
	color: white;

	@media (max-width: 768px) {
		transition: 0.8s all ease;
	}
`

export const MobileIcon = styled.div`
	display: none;
	padding: 0 30px;

	@media screen and (max-width: 768px) {
		display: block;
	}
`

export const BurgerIcon = styled(FaBars)`
	font-size: 25px;
`

export const CloseIcon = styled(FaTimes)`
	position: absolute;
	top: 5%;
	left: 58%;
	font-size: 25px;
	z-index: 1000;
`

export const NavMenu = styled.ul`
	height: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	font-weight: 700;
	border-top: 1px solid #354147;
	border-bottom: 1px solid #354147;

	@media (max-width: 768px) {
		display: none;
	}
`
