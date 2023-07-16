import styled from 'styled-components'

export const StyledTable = styled.table`
	width: 100%;
	font-size: 16px;
	color: #dadacb;
	box-shadow: 0 0 3px #dadacb;
	border-collapse: collapse;
	overflow: hidden;
	margin: 25px 0;
`

export const StyledTableHeaders = styled.thead`
	& tr {
		border-bottom: 0.5px solid #354147;
	}
	& th {
		padding: 15px;
		width: auto;
		text-align: center;
		/* border-bottom: 1px solid #dadacb; */
	}
`

export const StyledContentTableTbody = styled.tr`
	border-bottom: 0.5px solid #354147;
	& td {
		padding: 12px 20px;
		text-align: center;
		font-size: 12px;
		& img {
			width: 100px;
			height: auto;
			object-fit: cover;
		}
	}
`
