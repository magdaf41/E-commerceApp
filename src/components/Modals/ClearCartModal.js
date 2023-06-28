import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'

const ClearCartModal = () => {
	const dispatch = useDispatch()
	return (
		<StyledModalContainer>
			<div className='modal'>
				<h4>remove all items from your shopping cart?</h4>
				<div className='btn-container'>
					<button
						type='button'
						className='btn confirm-btn'
						onClick={() => {
							dispatch(clearCart())
							dispatch(closeModal())
						}}>
						confirm
					</button>
					<button
						type='button'
						className='btn clear-btn'
						onClick={() => {
							dispatch(closeModal())
						}}>
						cancel
					</button>
				</div>
			</div>
		</StyledModalContainer>
	)
}
export default ClearCartModal
