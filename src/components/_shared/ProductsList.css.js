import styled from 'styled-components'

export const StyledSearchAndSelectBox = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 10px;
	}
`
export const StyledBoxSearchInput = styled.div`
	display: flex;
	align-items: center;
	outline: 1px solid #b9b5a8;
	padding: 5px;
	max-width: 400px;
	height: 35px;
	&:hover {
		outline: 2px solid #068fff;
	}
`

export const StyledSelectArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 5px;

	& label {
		@media (max-width: 768px) {
			font-size: 12px;
		}
	}
`

export const StyledSelect = styled.select`
	outline: 1px solid #b9b5a8;
	padding: 5px;
	height: 35px;
	border: none;
	&:hover {
		outline: 2px solid #068fff;
	}
`

export const StyledSearchInput = styled.input`
	background-color: transparent;
	outline: none;
	border: none;
	width: 300px;
	color: #222222;
	@media (max-width: 768px) {
		width: 290px;
	}
`
export const StyledSearchIcon = styled.i``

export const StyledBackgroundImage = styled.div`
	background-image: url(${props => props.img});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 250px;
	color: white;
	& img {
		object-fit: cover;
	}
`
export const StyledProductsPageTitle = styled.p`
	font-size: 40px;
	line-height: 250px;
	text-shadow: 3px 3px 3px black;
	text-transform: uppercase;
	letter-spacing: 10px;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-content: center;
	color: black;
	-webkit-text-stroke: 1px #dadacb;

	@media (max-width: 576px) {
		font-size: 15px;
		-webkit-text-stroke: 0.5px #dadacb;
	}
`

export const StyledProductsListContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 30px;
	padding: 30px 0;
	text-align: center;

	@media (max-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`
export const StyledProduct = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid grey;
	padding: 20px;
	color: #41413c;
`

export const StyledProductHeader = styled.h3`
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 2px;
`

export const StyledProductImage = styled.div`
	width: 200px;
	height: 200px;
	padding: 15px;
	& img {
		object-fit: contain;
	}
`

export const StyledProductContent = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-bottom: 10px;
	font-size: 14px;
`
export const StyledProductPrice = styled.p`
	font-size: 17px;
	font-weight: 700;
`
export const StyledProductDesc = styled.p``

export const StyledSelectUser = styled.select`
	border: 1px solid #b9b5a8;
	width: 80px;
	height: 25px;
	outline: none;
	font-size: 10px;
	padding: 3px;
	&& option {
		font-size: 10px;
	}
	&:hover {
		border: 2px solid #068fff;
	}
`

export const StyledRoleArea = styled.div`
	width: 160px;
	height: 60px;
	font-size: 10px;
`
