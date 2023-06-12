import styled from 'styled-components'

export const StyledRegisterContainer = styled.div`
	width: 300px;
	height: 400px;
	border: 1px solid #64615a;
	background-color: rgba(0, 0, 0, 0.6);
	padding: 20px;
	font-size: 16px;
`

export const StyledRegisterHeader = styled.div`
	display: flex;
	justify-content: space-between;
	height: 50px;
`

export const StyledRegisterTitle = styled.h1`
	/* margin-bottom: 20px; */
	color: white;
	font-size: 22px;
	text-transform: uppercase;
	text-align: center;
`

export const StyledFormRegister = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const StyledBoxInput = styled.div`
	height: 40px;
`

export const StyledLabel = styled.label`
	font-weight: 700;
`

export const StyledInput = styled.input`
	border: none;
	border-bottom: 1px solid #b9b5a8;
	background-color: transparent;
	width: 100%;
`

export const StyledPError = styled.p`
	font-size: 12px;
	font-weight: 700;
`

export const StyledBtn = styled.button`
	font-size: 20px;
	&:hover {
		border: 1px solid white;
	}
`

export const StyledPLogin = styled.p`
	font-size: 14px;
`

export const StyledSpanLink = styled.span`
	font-weight: 700;
	color: #b9b5a8;
`
