import styled from 'styled-components'

export const StyledPositionButtonAddNewUser = styled.div`
	width: 90vw;
	display: flex;
	align-items: center;
	justify-content: end;
`

export const StyledButtonsArea = styled.div`
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

export const StyledButton = styled.button`
	font-size: 10px;
	background-color: #222222;
	width: 120px;
	height: 35px;
	text-transform: uppercase;
	font-weight: 700;
	color: white;
	margin-bottom: 10px;

	&:hover {
		background-color: gray;
	}
`
export const StyledSideButtons = styled.button`
	font-size: 10px;
	background-color: #222222;
	border: 1px solid #dadacb;
	width: 80px;
	height: 20px;
	text-transform: uppercase;
	font-weight: 700;
	color: white;
	margin-bottom: 10px;

	&:hover {
		background-color: gray;
	}
`
export const StyledButtonReturnHomePage = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 12px;
	font-weight: 700;
	padding: 20px;
	transition: transform 0.5s;

	&:hover {
		transform: scale(1.2);
	}

	&:focus {
		color: #068fff;
	}
`

export const StyledPositionButton = styled.div`
	background-color: #ffffff;
	display: flex;
	justify-content: end;
`
