import styled from 'styled-components'

export const StyledTable = styled.table`
	width: 100%;
	box-shadow: 0 0 3px #222222;
	border-collapse: collapse;
	overflow: hidden;
	margin: 25px 0;
`

export const StyledTableHeaders = styled.thead`
	& tr {
		border-bottom: 0.5px solid #354147;
	}
	& th {
		padding: 10px;
		text-align: center;
		min-width: 150px;
		@media (max-width: 768px) {
		min-width: 0px;
	}
	}
`

export const StyledContentTableTbody = styled.tr`
	border-bottom: 0.5px solid #354147;
	& td {
		padding: 10px;
		text-align: center;
		font-size: 14px;
		
		& img {
			width: 120px;
			height: 120px;
			object-fit: contain;

			@media (max-width: 768px) {
			width: 80px;
			height: 80px;
			}
		}
		@media (max-width: 768px) {
			/* display:flex ; */
			
			}
	}
`
