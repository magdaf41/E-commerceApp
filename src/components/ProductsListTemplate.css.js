import styled from 'styled-components'

export const StyledProductsListContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 30px;
	background-color: white;
	padding: 30px 0;
`
export const StyledProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const StyledProductHeader = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	& h3 {
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
`

export const StyledProductImage = styled.div`
	width: 200px;
	height: 200px;
	border: 1px solid white;
	& img {
		object-fit: contain;
	}
`
