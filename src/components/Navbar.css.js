import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const Nav = styled.nav`
	height: 60px;

	@media (max-width: 768px) {
		transition: 0.8s all ease;
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
	height: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	font-weight: 700;
	color: #dadacb;
	border-top: 1px solid #354147;
	border-bottom: 1px solid #354147;

	& a {
		transition: transform 0.5s;
		@media (max-width: 992px) {
			font-size: 13px;
			padding: 0 20px;
		}
	}

	& a:hover {
		transform: scale(1.5);
		@media (max-width: 992px) {
			transform: scale(1.2);
		}
	}

	& a:focus {
		color: #068fff;
	}

	@media (max-width: 992px) {
		height: 60px;
		flex-wrap: wrap;
		gap: 10px;
	}

	@media (max-width: 768px) {
		display: none;
	}
`
