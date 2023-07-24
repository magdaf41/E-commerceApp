import styled from 'styled-components'

export const StyledContainerHomePage = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 30px 0;
	min-height: 80vh;
	width: 100%;
`
export const StyledProductsPage = styled.div`
	padding: 30px;
	background: #ffffff;
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
