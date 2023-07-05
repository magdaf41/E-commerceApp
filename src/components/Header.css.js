import styled from 'styled-components'

export const StyledHeader = styled.div`
	width: 100%;
	font-size: 12px;
`

export const StyledRowTitle = styled.div`
	width: 100%;
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
	border-bottom: 1px solid #354147;
`

export const StyledNav = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	text-transform: uppercase;
`

export const StyledNavAdmin = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	text-transform: uppercase;
`

export const StyledTitle = styled.h3`
	color: white;
	font-weight: 700;
	font-size: 25px;
	text-transform: uppercase;
	letter-spacing: 2px;
	cursor: pointer;
	span {
		font-size: 27px;
		border-bottom: 1px solid #b9b5a8;
	}
`

export const StyledBoxSearchInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #b9b5a8;
	padding: 5px;
`
export const StyledSearchInput = styled.input`
	background-color: transparent;
	outline: none;
	border: none;
`
export const StyledSearchIcon = styled.div`
	color: white;
	font-size: 13px;
	font-weight: 300;
`
export const StyledSingInBasket = styled.div`
	width: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
`
export const StyledPSignIn = styled.p`
	text-transform: uppercase;
	padding: 0 10px;
	border-right: 0.5px solid #b9b5a8;
	font-weight: 700;
`
export const StyledDivLogged = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 150px;
	& p {
		display: flex;
		text-align: center;
		justify-content: center;
		& h4 {
			align-items: center;
		}
	}
`
