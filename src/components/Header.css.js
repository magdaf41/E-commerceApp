import styled from 'styled-components'

export const StyledHeader = styled.div``

export const StyledRowTitle = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
	@media (max-width: 768px) {
		display:grid;
		grid-template-columns:30% 1fr;
		justify-items: center;
	}
`

export const StyledCartIcon = styled.div`
	display: flex;
	transition: transform 0.5s;
	& a:hover {
		transform: scale(1.5);
	}
	& a:focus {
		color: #068fff;
	}
`

export const StyledTitle = styled.h1`
	font-size: 35px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: #dadacb;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}
	@media (max-width: 992px) {
		font-size: 30px;
	}

	@media (max-width: 600px) {
		font-size: 20px;
		/* padding: 0 10px; */
	}

	span {
		font-size: 38px;
		border-bottom: 4px solid #b9b5a8;
		@media (max-width: 992px) {
			font-size: 32px;
		}
		@media (max-width: 600px) {
			font-size: 22px;
		}
	}
`

export const StyledLogo = styled.div`
	width: 50px;
	height: 100px;
	&& img {
		object-fit: contain;
		filter: grayscale(100%);
		transition: all 0.3s ease-in-out 0s;
	}
	&& img:hover {
		cursor: default;
		transform: rotate(360deg);
		transition: all 0.3s ease-in-out 0s;
	}
	@media (max-width: 992px) {
		width: 40px;
		height: 80px;
	}
`

export const StyledHeaderIcons = styled.div`
	min-width: 220px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #dadacb;
	@media (max-width: 768px) {
		width:auto ;
		grid-column:2/3;
		padding: 10px;
		justify-self: left;
	}
`
export const StyledPSignIn = styled.p`
	text-transform: uppercase;
	padding: 0 10px;
	border-right: 0.5px solid #b9b5a8;
	font-weight: 700;
	transition: transform 0.5s;
	&:hover {
		transform: scale(1.5);
	}
	& :focus {
		color: #068fff;
	}
`
export const StyledDivLogged = styled.div`
	display: flex;
	gap: 30px;
	& button {
		&:hover {
			transform: scale(1.5);
		}
	}
`
export const StyledLoggedUser = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
