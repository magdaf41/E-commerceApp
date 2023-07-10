import styled from 'styled-components'

export const StyledTable = styled.table`
	border-collapse: collapse;
	margin: 25px 0;
	font-size: 14px;
	min-width: 800px;
	border: 1px solid #19a7ce;
	border-radius: 5px 5px 0 0;
	overflow: hidden;
	box-shadow: 0 0 3px #19a7ce;
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
// do usunięcia!
export const StyledProductsListHeader = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 50px 50px 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const StyledTableHeaders = styled.thead`
	& tr {
		/* background-color: #146c94; */
		color: #ffffff;
		text-align: left;
		font-weight: bold;
		font-size: 16px;
		text-align: center;
	}
	& th {
		padding: 12px 20px;
		width: auto;
		text-align: center;
	}
`

export const StyledProductsList = styled.div``

export const StyledProductsButtons = styled.div`
	display: flex;
	flex-direction: column;
`

export const StyledContentTableTbody = styled.tr`
	border-bottom: 1px solid #354147;
	/* &&:nth-of-type(even) {
		background-color: red;
	} */
	& td {
		padding: 12px 20px;
		width: auto;
		text-align: center;
		font-size: 10px;
		& img {
			width: 100px;
			height: auto;
			object-fit: cover;
		}
	}
`
