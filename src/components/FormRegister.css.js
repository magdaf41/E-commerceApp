import styled from 'styled-components'

export const StyledRegisterContainer = styled.div`
	width: 300px;
	height: 400px;
	border: 1px solid #64615a;
	padding: 20px;
	font-size: 12px;
	color: black;
`

// export const StyledRegisterHeader = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	margin-bottom: 20px;
// `

export const StyledRegisterTitle = styled.h4`
	color: black;
	font-size: 14px;
	text-align: left;
	border-bottom: 1px solid black;
	font-weight: 300;
	width: 100%;
	margin-bottom: 20px;
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
	color: black;
`

export const StyledInput = styled.input`
	border: 1px solid black;
	background-color: transparent;
	width: 100%;
`

export const StyledPError = styled.p`
	font-size: 12px;
	color: black;
`

export const StyledBtn = styled.button`
	font-size: 10px;
	background-color: #222222;
	width: 100px;
	height: 35px;
	text-transform: uppercase;
	color: white;

	&:hover {
		background-color: gray;
	}
`

export const StyledPLogin = styled.p`
	font-size: 12px;
	color: black;
`

export const StyledSpanLink = styled.span`
	font-weight: 700;
	color: black;
	padding: 0 5px;
`
