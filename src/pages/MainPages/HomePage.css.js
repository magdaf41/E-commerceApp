import styled from 'styled-components'

export const StyledContainerHomePage = styled.div`
	/* border: 3px solid red; */
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 30px 0;
	flex-grow: 1;
	/* min-height: 80vh; */
	width: 100%;
`
export const StyledPage = styled.div`
	padding: 30px;
	background: #ffffff;
	flex-grow: 1;
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
