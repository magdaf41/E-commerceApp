import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'
import { StyledButton, StyledButtonsArea } from '../_shared/Buttons.css'

const ClearCartModal = () => {
	const dispatch = useDispatch()
	return (
		<StyledModalContainer>
			<div className='modal'>
				<h4>remove all items from your shopping cart?</h4>
				<StyledButtonsArea>
					<StyledButton
						type='button'
						className='btn confirm-btn'
						onClick={() => {
							dispatch(clearCart())
							dispatch(closeModal())
						}}>
						confirm
					</StyledButton>
					<StyledButton
						type='button'
						className='btn clear-btn'
						onClick={() => {
							dispatch(closeModal())
						}}>
						cancel
					</StyledButton>
				</StyledButtonsArea>
			</div>
		</StyledModalContainer>
	)
}
export default ClearCartModal
