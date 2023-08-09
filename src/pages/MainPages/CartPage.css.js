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
	& h2 {
		color: #42413c;
	}
`
export const StyledCart = styled.div`
	padding: 20px;
`

export const StyledOrderedQuantity = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	font-size: 20px;
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
	gap: 20px;
`
export const StyledProductColumn = styled.td`
	display: flex;
	justify-content: space-around;
	align-items: center;
	& h3 {
		font-size: 16px;
		margin-bottom: 15px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
	}
`
// export const StyledSumUpCart = styled.td`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-around;
// 	align-items: center;
// `
