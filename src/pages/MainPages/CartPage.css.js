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
	& button {
		text-align: center;
		font-size:22px ;
		width:22px;
		height: 22px;
		outline:1px solid black ;
		border-radius:50% ;
		display:flex ;
		justify-content:center ;
		align-items: center;
		gap: 2px;
		&:hover{
			background-color:#00B3EF;
			outline:none ;
			color: white;
		}
		@media (max-width: 768px) {
			font-size:16px ;
			width:16px;
			height: 16px;
		}
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
export const StyledCartActions = styled.div`
	display: flex;
	flex-direction: column;
	gap:15px;
`

export const StyledSubtotal = styled.div`
	display: flex;
	gap: 10px;
	font-weight: 700;
`

export const StyledProductColumn = styled.td`
	display: flex;
	justify-content: space-around;
	align-items: center;
	& h3 {
		font-size: 16px;
		margin-bottom: 15px;
		max-width: 150px;
		@media (max-width: 768px) {
			font-size: 10px;
			font-weight: 700;
		}
	}
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

export const StyledBtnContinueShopping = styled.button`
	font-weight: 700;
	transition: transform 0.5s;
	&:hover{
			color:#00B3EF;
		}
`
