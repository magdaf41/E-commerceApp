import styled from 'styled-components'

export const StyledHeader = styled.div`
	font-size: 12px;
`
export const StyledRowTitle = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px;
`
export const StyledRowNav = styled.div`
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #354147;
	/* border-bottom: 1px solid #354147; */
	color: #dadacb;
`

export const StyledNav = styled.div`
	width: 100%;
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

	@media (max-width: 992px) {
		display: none;
	}
`

export const StyledBurgerMenu = styled.div`
	@media (max-width: 992px) {
		width: 120rem;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

export const StyledBurgerMenuIcon = styled.div`
	height: 8rem;
	padding: 2rem;
	display: flex;
	align-items: center;
	transition: border-bottom 0.1s;
	background-color: red;
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
	&&:hover {
		color: red;
	}
	span {
		font-size: 38px;
		border-bottom: 4px solid #b9b5a8;
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
`

export const StyledSingInBasket = styled.div`
	min-width: 220px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #dadacb;
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
	& a:focus {
		color: #068fff;
	}
`
export const StyledDivLogged = styled.div`
	display: flex;
	gap: 30px;
	& button {
	}
`
export const StyledLoggedUser = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
