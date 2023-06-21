import styled from 'styled-components'

export const StyledContainerFormPage = styled.div`
	width: 100%;
	min-height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	background: #ffffff;
`
export const StyledCart = styled.div`
	width: 100%;
`
export const StyledOrderedProductsContainer = styled.div`
	width: 100%;
`
export const StyledOrderedTable = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr 1fr 1fr;
`
export const StyledOrderedHeaderRow = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr 1fr 1fr;
	padding: 10px;
	border-bottom: 1px solid #b9b5a8;
`

export const StyledOrderedHeader = styled.h4`
	color: #b9b5a8;
	font-weight: 500;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 2px;
`

export const StyledOrderedColumn = styled.div`
	height: 80px;
	display: flex;
	align-items: center;

	& img {
		width: 40px;
		height: 40px;
		object-fit: cover;
	}
`

export const StyledOrderedQuantity = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 20px;
	width: 50px;
	& button {
		text-align: center;
	}
`
export const StyledCartSumUp = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 20px;
`

export const StyledClearCart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`

export const StyledSubtotal = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`
