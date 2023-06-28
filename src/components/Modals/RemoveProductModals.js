import { useDispatc, useSelector } from 'react-redux'
import { removeProduct } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'

const RemoveProductModal = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	return (
		<StyledModalContainer>
			<div className='modal'>
				<h4>remove all items from your shopping cart?</h4>
				<div className='btn-container'>
					{products.map(p => {
						return (
							<button
								type='button'
								className='btn confirm-btn'
								onClick={() => {
									dispatch(removeProduct(p.id))
									dispatch(closeModal())
								}}>
								confirm
							</button>
						)
					})}

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
export default RemoveProductModal
