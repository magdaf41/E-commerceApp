import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'
import { StyledButtons } from '../_shared/Buttons.css'

const RemoveProductModal = ({ id }) => {
	const dispatch = useDispatch()
	// const products = useSelector(state => state.cart.products)

	return (
		<StyledModalContainer>
			{/* <div className='modal'> */}
			<h4>remove all items from your shopping cart?</h4>
			<div>
				{/* {products.map(p => ( */}

				<div>
					<StyledButtons
						onClick={() => {
							dispatch(removeProduct(id))
							dispatch(closeModal())
						}}>
						Confirm
					</StyledButtons>
				</div>
				{/* ))} */}
				<StyledButtons
					type='button'
					className='btn clear-btn'
					onClick={() => {
						dispatch(closeModal())
					}}>
					cancel
				</StyledButtons>
			</div>
			{/* </div> */}
		</StyledModalContainer>
	)
}
export default RemoveProductModal
