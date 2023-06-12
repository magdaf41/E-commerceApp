import styled from 'styled-components'

export const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
