import styled from 'styled-components'

export const StyledTable = styled.table`
	width: 100%;
	font-size: 18px;
	box-shadow: 0 0 3px #222222;
	border-collapse: collapse;
	overflow: hidden;
	margin: 25px 0;
	color: #222222;
`

export const StyledTableHeaders = styled.thead`
	& tr {
		border-bottom: 0.5px solid #354147;
	}
	& th {
		padding: 10px;
		text-align: center;
	}
`

export const StyledContentTableTbody = styled.tr`
	border-bottom: 0.5px solid #354147;
	& td {
		padding: 10px;
		text-align: center;
		font-size: 14px;
		& img {
			width: 100px;
			height: auto;
			object-fit: cover;
		}
	}
`
