import styled from 'styled-components'

export const StyledButtonSingleArea = styled.div`
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
	width: 100px;
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
	width: 180px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 10px;
	color: ${props => (props.whiteColor ? 'red' : '#000000')};
	font-weight: 500;
	padding: 20px;
`

export const StyledPositionButton = styled.div`
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	color: ${props => (props.whiteColor ? '#dadacb' : '#000000')};
`
