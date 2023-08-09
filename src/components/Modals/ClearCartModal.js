import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'
import { StyledButton, StyledButtonsArea, StyledSideButtons } from '../_shared/Buttons.css'

const ClearCartModal = ({ orderedProducts }) => {
	const dispatch = useDispatch()
	return (
		<StyledModalContainer>
			<div className='modal'>
				<h4>remove all items from your shopping cart?</h4>
				<StyledButtonsArea>
					<StyledSideButtons
						onClick={() => {
							dispatch(clearCart(orderedProducts))
							dispatch(closeModal())
						}}>
						confirm
					</StyledSideButtons>
					<StyledSideButtons
						onClick={() => {
							dispatch(closeModal())
						}}>
						cancel
					</StyledSideButtons>
				</StyledButtonsArea>
			</div>
		</StyledModalContainer>
	)
}
export default ClearCartModal
