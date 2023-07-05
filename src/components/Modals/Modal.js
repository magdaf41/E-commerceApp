import { useDispatch } from 'react-redux'
import { clearCart } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer, StyledModalBtn } from './Modal.css'

const Modal = ({ message }) => {
	const dispatch = useDispatch()
	return (
		<StyledModalContainer>
			<h4>{message}</h4>
			<StyledModalBtn
				type='button'
				className='btn confirm-btn'
				onClick={() => {
					dispatch(closeModal())
				}}>
				Ok
			</StyledModalBtn>
		</StyledModalContainer>
	)
}
export default Modal
