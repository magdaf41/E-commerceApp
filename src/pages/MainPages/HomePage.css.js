import styled from 'styled-components'

export const StyledContainerHomePage = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 30px 0;
	flex-grow: 1;
	width: 100%;
	@media (max-width: 768px) {
			display:grid;
			grid-template-columns: 1fr 1fr;
			justify-items: center;
  			align-items: center;
			gap:20px;
		}

	@media (max-width: 576px) {
			grid-template-columns: 1fr;
		}
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
		object-fit: center;
		border-radius: 20px;
		opacity: 80%;
	}
`
