import styled from 'styled-components'

export const StyledFooterContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 150px;
	font-weight: 500;
	font-size: 10px;
	border-top: 1px solid #354147;
	background-color: #222222;
`
export const StyledFooterSection = styled.div`
	height: 80px;
	width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& h4 {
		border-bottom: 1px solid #354147;
	}
`
