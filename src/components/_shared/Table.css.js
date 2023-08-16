import styled from 'styled-components'

export const StyledTable = styled.table`
	width: 100%;
	box-shadow: 0 0 3px #222222;
	border-collapse: collapse;
	margin: 25px 0;
	table-layout: ${props => (props.cart ? 'fixed' : 'none')};
`

export const StyledTableHeaders = styled.thead`
	& tr {
		border-bottom: 0.5px solid #354147;
	}
	& th {
		padding: 10px;
		text-align: center;
		min-width: 90px;
	}
`

export const StyledContentTableTbody = styled.tr`
	border-bottom: 0.5px solid #354147;
	& td {
		padding: 10px;
		text-align: center;
		font-size: 14px;
	}
`
export const StyledImageContainer = styled.div`
	width: 80px;
	height: 80px;
	object-fit: cover;
`
