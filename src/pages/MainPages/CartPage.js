import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  removeProductFromCart,
  addProductToCart,
  decreaseOrderedProducts,
  clearCart,
  getTotals,
} from "../../store/cartSlice";
import {
  StyledContainerFormPage,
  StyledCart,
  StyledOrderedQuantity,
  StyledCartSumUp,
  StyledClearCart,
  StyledSubtotal,
  StyledProductColumn,
} from "./CartPage.css";
import { addOrder } from "../../store/ordersListSlice";
import { openModal } from "../../store/modalSlice";


import {
  StyledTable,
  StyledTableHeaders,
  StyledContentTableTbody,
} from "../../components/_shared/Table.css";
import {
  StyledButton,
  StyledSideButtons,
} from "../../components/_shared/Buttons.css";
import ReturnBtn from "../../components/_shared/ReturnBtn";
import Modal from "../../components/Modals/Modal";
import RemoveProductModal from "../../components/Modals/RemoveProductModals";
import RemoveProductFromCartModal from "../../components/Modals/RemoveProductFromCartModal";

const CartPage = () => {
  const dispatch = useDispatch();
  const orderedProducts = useSelector((state) => state.cart.orderedProducts);
  const loggeduser = useSelector((state) => state.auth.loggedUser);
  const navigate = useNavigate();
  const orderValue = orderedProducts.reduce(
    (prev, curr) => prev + curr.price * curr.cartQuantity,
    0
  );
  const isOpen = useSelector((store) => store.modal.isOpen);
  const [isSingleRemove, setIsSingleRemove] = useState(false);
  const [removeProduct, setRemoveProduct] = useState(null);
  useEffect(() => {
    dispatch(getTotals());
  }, [orderedProducts, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseOrderedProducts(product));
  };

  const sendOrder = () => {
    dispatch(
      addOrder({
        id: "test",
        date: new Date(),
        user: loggeduser,
        products: orderedProducts,
      })
    );
    dispatch(clearCart(orderedProducts));
    navigate("/ordersList");
  };

  console.log(orderedProducts);
  return (
    <StyledContainerFormPage>
      <h2>Shopping Cart</h2>
      {orderedProducts.length === 0 ? (
        <p>Your cart is currently empty</p>
      ) : (
        <StyledCart>
          <StyledTable>
            <StyledTableHeaders>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </StyledTableHeaders>
            <tbody>
              {orderedProducts.map((product) => (
                <StyledContentTableTbody>
                  {isOpen && (
                    <Modal
                      cancelText="Cancel"
                      confirmAction={
                        isSingleRemove && removeProduct
                          ? () => dispatch(removeProductFromCart(removeProduct))
                          : () => dispatch(clearCart(orderedProducts))
                      }
                    >
                      {isSingleRemove && removeProduct ? (
                        <h4>Are you sure to remove product from cart?</h4>
                      ) : (
                        <h4>remove all items from your shopping cart?</h4>
                      )}
                    </Modal>
                  )}

                  <StyledProductColumn key={product.id}>
                    <img src={product.image} alt={product.title}></img>
                    <div>
                      <h3>{product.title}</h3>
                      <StyledSideButtons
                        onClick={() => {
                          dispatch(openModal());
                          setIsSingleRemove(true);
                          setRemoveProduct(product);
                        }}
                      >
                        Remove
                      </StyledSideButtons>
                    </div>
                  </StyledProductColumn>

                  <td>${product.price}</td>
                  <td>
                    <StyledOrderedQuantity key={product.id}>
                      <button onClick={() => handleDecreaseCart(product)}>
                        -
                      </button>
                      <div className="count">{product.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(product)}>
                        +
                      </button>
                    </StyledOrderedQuantity>
                  </td>
                  <td>${product.price * product.cartQuantity}</td>
                </StyledContentTableTbody>
              ))}
            </tbody>
          </StyledTable>

          <StyledCartSumUp>
            <StyledClearCart>
              <StyledButton
                onClick={() => {
                  dispatch(openModal());
                  setIsSingleRemove(false);
                  setRemoveProduct(null);
                }}
              >
                Clear Cart
              </StyledButton>
            </StyledClearCart>
            <div>
              <StyledSubtotal>
                <div>Subtotal</div>
                <span> ${orderValue}</span>
              </StyledSubtotal>
              <div>
                <StyledButton onClick={sendOrder}>Buy</StyledButton>
              </div>

              <div>
                <Link to="/">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </StyledCartSumUp>
        </StyledCart>
      )}
    </StyledContainerFormPage>
  );
};

export default CartPage;
