import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'
import { StyledSideButtons, StyledButtonsArea } from '../_shared/Buttons.css'

const RemoveProductModal = ({ id }) => {
	const dispatch = useDispatch()
	// const products = useSelector(state => state.cart.products)

	return (
		<StyledModalContainer>
			{/* <div className='modal'> */}
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
					cancel
				</StyledSideButtons>
			</StyledButtonsArea>
			{/* </div> */}
		</StyledModalContainer>
	)
}
export default RemoveProductModal
