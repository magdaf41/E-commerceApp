import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'
import { StyledSideButtons, StyledButtonsArea } from '../_shared/Buttons.css'

const RemoveProductModal = ({ id }) => {
	const dispatch = useDispatch()

	return (
		<StyledModalContainer>
			<h4>remove all items from your shopping cart?</h4>
			<StyledButtonsArea>
				<StyledSideButtons
					onClick={() => {
						dispatch(removeProduct(id))
						dispatch(closeModal())
					}}>
					Confirm
				</StyledSideButtons>

				<StyledSideButtons
					type='button'
					className='btn clear-btn'
					onClick={() => {
						dispatch(closeModal())
					}}>
					Cancel
				</StyledSideButtons>
			</StyledButtonsArea>
		</StyledModalContainer>
	)
}
export default RemoveProductModal
