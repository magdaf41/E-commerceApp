import { useDispatch } from "react-redux";
import { StyledModalContainer, StyledModalBtn } from "./Modal.css";
import { useEffect } from "react";
import { closeModal } from "../../store/modalSlice";
import { StyledButton } from "../_shared/Buttons.css";

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

  return (
    <StyledModalContainer>
      {children}
      <StyledButton onClick={() => dispatch(closeModal())}>Ok</StyledButton>
    </StyledModalContainer>
  );
};
export default Modal;
