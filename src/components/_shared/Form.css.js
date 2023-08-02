import styled from 'styled-components'

export const StyledContainerFormPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const StyledFormContainer = styled.div`
	min-width: 300px;
	min-height: 400px;
	border: 1px solid #64615a;
	padding: 20px;
	font-size: 12px;
`
export const StyledFormTitle = styled.h4`
	color: black;
	font-size: 14px;
	text-align: left;
	border-bottom: 1px solid black;
	font-weight: 500;
	width: 100%;
	margin-bottom: 20px;
`

export const StyledBoxForm = styled.form`
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
	width: 100%;
	padding: 2px;
	color: black;
	&& option {
		color: red;
	}
`

export const StyledPError = styled.p`
	font-size: 10px;
	color: red;
	font-weight: 700;
`

export const StyledPLogin = styled.p`
	a {
		font-weight: 700;
		color: red;
		padding: 0 5px;
		transition: transform 0.5s;
	}
	a:hover {
		transform: scale(1.5);
	}
	:focus {
		color: #068fff;
	}

	/* font-size: 12px; */
`

export const StyledRegisterDiv = styled.div`
	 
		color: green;
		transition: transform 0.5s;
	
	:hover {
		transform: scale(1.5);
	}
	:focus {
		color: #068fff;
	}

	/* font-size: 12px; */
`

export const StyledSpanLink = styled.span``
