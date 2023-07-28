import styled from 'styled-components'

export const StyledHeader = styled.div`
	font-size: 12px;
`
export const StyledRowTitle = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 30px;
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
	color: transparent;
	-webkit-text-stroke: 0.5px #b9b5a8;
	font-weight: 700;
	font-size: 50px;
	text-transform: uppercase;
	letter-spacing: 2px;
	cursor: pointer;
	span {
		font-size: 55px;
		border-bottom: 4px solid #b9b5a8;
		/* color: #b9b5a8; */
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
