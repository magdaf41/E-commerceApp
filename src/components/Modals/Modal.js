import { useDispatch } from 'react-redux'
import { StyledModalContainer, StyledModalBtn } from './Modal.css'
import { useEffect } from 'react'
import { closeModal } from '../../store/modalSlice'
import { StyledButtons } from '../_shared/Buttons.css'

const Modal = ({ children, openTime }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		let timeoutID

		document.body.style.overflowY = 'hidden'

		if (openTime) {
			timeoutID = setTimeout(() => {
				dispatch(closeModal())
			}, openTime)
		}

		return () => {
			clearInterval(timeoutID)
			document.body.style.overflowY = 'scroll'
		}
	}, [])

	if (openTime) {
		return <StyledModalContainer>{children}</StyledModalContainer>
	}

	return (
		<StyledModalContainer>
			{children}
			<StyledButtons onClick={() => dispatch(closeModal())}>Ok</StyledButtons>
		</StyledModalContainer>
	)
}
export default Modal

// const Modal = ({ message, children }) => {
//   const dispatch = useDispatch();
//   return (
//     <StyledModalContainer>
//       <h4>{message}</h4>
//       <StyledModalBtn
//         type="button"
//         className="btn confirm-btn"
//         onClick={() => {
//           dispatch(closeModal());
//         }}
//       >
//         Ok
//         {children}
//       </StyledModalBtn>
//     </StyledModalContainer>
//   );
// };
// export default Modal;
