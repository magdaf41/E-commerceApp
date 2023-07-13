import { useDispatch } from "react-redux";
import { StyledModalContainer, StyledModalBtn } from "./Modal.css";
import { useEffect } from "react";
import { closeModal } from "../../store/modalSlice";

const Modal = ({ children, openTime }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutID;

    document.body.style.overflowY = "hidden";

    if (openTime) {
      timeoutID = setTimeout(() => {
        dispatch(closeModal());
      }, openTime);
    }

    return () => {
      clearInterval(timeoutID);
      document.body.style.overflowY = "scroll";
    };
  }, []);

  if (openTime) {
    return <StyledModalContainer>{children}</StyledModalContainer>;
  }

  console.log(openTime, "sprawdzenie");
  return (
    <StyledModalContainer>
      {children}
      <button onClick={() => dispatch(closeModal())}>Ok</button>
    </StyledModalContainer>
  );
};
export default Modal;

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
