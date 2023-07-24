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
	border-bottom: 1px solid #354147;
	color: #dadacb;
`

export const StyledNav = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	text-transform: uppercase;
	letter-spacing: 0.5px;
`

export const StyledTitle = styled.h3`
	color: #dadacb;
	font-weight: 700;
	font-size: 28px;
	text-transform: uppercase;
	letter-spacing: 2px;
	cursor: pointer;
	span {
		font-size: 30px;
		border-bottom: 1px solid #b9b5a8;
	}
`
export const StyledSingInBasket = styled.div`
	width: 200px;
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
`
export const StyledDivLogged = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
`
export const StyledLoggedUser = styled.div`
	min-width: 80px;
	display: flex;
	justify-content: space-between;
`
