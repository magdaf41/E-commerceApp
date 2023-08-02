import styled from 'styled-components'

export const StyledModalContainer = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 700px;
	height: 150px;
	background-color: #000000;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	color: #dadacb;
	z-index: 100;
	border: 1px solid #fff;
`

export const StyledModalBtn = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 20px;
	border: 1px solid white;
	color: red;
`
