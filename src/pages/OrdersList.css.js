import styled from 'styled-components'

export const StyledOrderListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	background: #ffffff;
`
export const StyledOrdersListHeader = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 50px 50px 1fr 2fr 1fr 1fr;
`

export const StyledOrderWrapper = styled.div`
	border-bottom: 1px solid black;
	width: 100%;
	display: grid;
	grid-template-columns: 50px 50px 1fr 2fr 1fr 1fr;
	padding: 20px 0;
	align-self: center;
	justify-self: center;
`

export const StyledOrdersList = styled.div`
	width: 100%;
	padding: 20px 0;
`

export const StyledOrderedProductList = styled.ul`
	display: flex;
	justify-content: column;
`

export const StyledProduct = styled.li`
	border-bottom: 1px solid grey;
	width: 100%;
	padding: 2px 0;
	text-align: center;
	list-style: square;
`

export const StyledProductQuantity = styled.li`
	width: 100%;
	padding: 2px 0;
	text-align: center;
`
