import styled from 'styled-components'
// import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
	width: 35%;
	height: 100vh;
	display: fixed;
	position: absolute;
	left: 0;
	top: 60px;
	background-color: #000;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0px' : '-100')};
	z-index: ${({ isOpen }) => (isOpen ? '999' : '-100')};
	color: #dadacb;
	padding: 20px;

	@media (min-width: 768px) {
		display: none;
	}
`

export const SidebarMenu = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	height: 100%;
	padding: 20px;
	font-size: 22px;
	font-weight: 700;
	text-transform: uppercase;
	& a {
		transition: transform 0.5s;
	}

	& a:hover {
		transform: scale(1.5);
	}

	& a:focus {
		color: #068fff;
	}
`

export const SidebarLink = styled.a`
	display: flex;
	width: 250px;
	transition: 0.2s ease-in-out;
	padding: 5px;
	cursor: pointer;
	transition: transform 0.5s;

	&:hover {
		/* transform: scale(1.5); */
		border-bottom: 2px solid #001aff;
		transition: 0.2s ease-in-out;
	}

	& a:focus {
		color: #068fff;
	}
`
