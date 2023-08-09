import styled from 'styled-components'

export const SidebarContainer = styled.aside`
	display: none;
	width: 30%;
	height: 100vh;
	position: fixed;
	left: 0;
	background-color: #000;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0px' : '-100')};
	z-index: ${({ isOpen }) => (isOpen ? '999' : '-100')};
	color: #dadacb;
	padding: 40px 5px;

	@media (max-width: 768px) {
		display: block;
		width: 70%;
	}
`

export const SidebarMenu = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	height: 100%;
	padding: 20px;
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
