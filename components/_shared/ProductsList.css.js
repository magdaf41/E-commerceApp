import styled from 'styled-components'

export const StyledProductsListContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 30px;
	background-color: white;
	padding: 30px 0;
	text-align: center;
`
export const StyledProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid grey;
	padding: 20px;
`
export const StyledProductHeader = styled.h3`
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: #222222;
`

export const StyledProductImage = styled.div`
	width: 200px;
	height: 200px;
	border: 1px solid white;
	padding: 15px;
	& img {
		object-fit: contain;
	}
`

export const SyledBackgroundImage = styled.div`
	width: 100%;
	height: 250px;
	& img {
		object-fit: cover;
	}
`

export const StyledProductContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 10px;
`
export const StyledProductPrice = styled.p`
	font-weight: 700;
	color: #41413c;
`
export const StyledProductDesc = styled.p`
	font-size: 12px;
	color: #41413c;
`
export const StyledSearchAndSelectBox = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const StyledBoxSearchInput = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border: 1px solid #b9b5a8;
	padding: 5px;
	max-width: 400px;
`
export const StyledSearchInput = styled.input`
	background-color: transparent;
	outline: none;
	border: none;
	width: 300px;
`
export const StyledSearchIcon = styled.div`
	color: white;
	font-size: 13px;
	font-weight: 300;
`
