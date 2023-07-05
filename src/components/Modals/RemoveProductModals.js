import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../../store/cartSlice'
import { closeModal } from '../../store/modalSlice'
import { StyledModalContainer } from './Modal.css'

const RemoveProductModal = ({ id }) => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.cart.products)
	console.log(id)

	return (
		<StyledModalContainer>
			{/* <div className='modal'> */}
			<h4>remove all items from your shopping cart?</h4>
			<div>
				{/* {products.map(p => ( */}

				<div>
					<button
						onClick={() => {
							dispatch(removeProduct(id))
							dispatch(closeModal())
						}}>
						Confirm
					</button>
				</div>
				{/* ))} */}
				<button
					type='button'
					className='btn clear-btn'
					onClick={() => {
						dispatch(closeModal())
					}}>
					cancel
				</button>
			</div>
			{/* </div> */}
		</StyledModalContainer>
	)
}
export default RemoveProductModal
