import { useDispatch } from 'react-redux'

import { removeProductFromCart } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'

import { StyledModalContainer } from './Modal.css'
import { StyledSideButtons, StyledButtonsArea } from '../_shared/Buttons.css'

const RemoveProductFromCartModal = ({ product }) => {
	const dispatch = useDispatch()

	return (
		<StyledModalContainer>
			<h4>Are you shure to remove product from cart?</h4>
			<StyledButtonsArea>
				<StyledSideButtons
					onClick={() => {
						dispatch(removeProductFromCart(product))
						dispatch(closeModal())
					}}>
					Confirm
				</StyledSideButtons>

				<StyledSideButtons
					type='button'
					onClick={() => {
						dispatch(closeModal())
					}}>
					Cancel
				</StyledSideButtons>
			</StyledButtonsArea>
		</StyledModalContainer>
	)
}
export default RemoveProductFromCartModal
