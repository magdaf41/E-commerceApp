import styled from 'styled-components'

export const StyledContainerProductsList = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	background: #ffffff;
`
export const StyledProduct = styled.div`
	display: grid;
	grid-template-columns: 50px 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	font-size: 10px;
	& img {
		width: 50px;
		height: 50px;
		object-fit: cover;
	}
`
export const StyledProductsListHeader = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 50px 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const StyledProductsList = styled.div``
