import styled from 'styled-components'

export const StyledContainerHomePage = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 30px 0;
`
export const StyledNextPage = styled.div`
	padding: 30px;
	background: #ffffff;
`

export const StyledContainerFormPage = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	background: #ffffff;
`

export const StyledButtonPreviousPage = styled.button`
	width: 100%;
	display: flex;
	justify-content: end;
	font-size: 10px;
	/* color:  ${(props) => (props.light ? "white" : "black")}; */
	font-weight: 500;
	padding: 20px;
`

export const StyledImage = styled.div`
	width: 200px;
	height: 300px;

	& img {
		object-fit: cover;
		border-radius: 20px;
		opacity: 80%;
	}
`
