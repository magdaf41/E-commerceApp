import styled from 'styled-components'

export const StyledContainerHomePage = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 30px 0;
`
export const StyledNextPage = styled.div`
	background: #ffffff;
`

export const StyledContainerRegisterPage = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px 0;
	background: #ffffff;
`

export const StyledButtonPreviousPage = styled.button`
	width: 80%;
	color: black;
	font-size: 10px;
	text-align: right;
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
