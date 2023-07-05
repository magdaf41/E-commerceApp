import React, { useEffect, useState } from "react";
import ReturnBtn from "../components/ReturnBtn";
import {
  StyledContainerProductsList,
  StyledProduct,
  StyledProductsList,
  StyledProductsListHeader,
} from "./ProductsList.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../store/cartSlice";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../store/cartSlice";
import { editProduct } from "../store/cartSlice";
import { StyledBtn } from "../components/_shared/Form.css";
import RemoveProductModal from "../components/Modals/RemoveProductModals";
import { openModal } from "../store/modalSlice";
import { changeRole } from "../store/authSlice";
import User from "../components/User";

const UsersListPage = () => {
  const dispatch = useDispatch();
  // const products = useSelector(state => state.cart.updateListOfProducts)

  // const changeUserRole = useSelector(state => state.cart.editProduct)
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);

  //   useEffect(() => {
  //     dispatch(changeRole({ editUser, newRole }));
  //   }, [newRole]);
  return (
    <StyledContainerProductsList>
      <ReturnBtn />
      <StyledProductsListHeader>
        <p>Lp.</p>
        <p>Id</p>
        <p>Name</p>
        <p>Email</p>
        <p>Password</p>
        <p>Role</p>
      </StyledProductsListHeader>

      <StyledProductsList>
        {/* {products.map((p) => ( */}
        {users.map((user, index) => (
          <StyledProduct key={user.id}>
            <User data={user} orderNo={index + 1} />
          </StyledProduct>
        ))}

        <StyledBtn onClick={() => navigate("/register")}>
          <span>Add new user</span>
        </StyledBtn>
      </StyledProductsList>
    </StyledContainerProductsList>
  );
};

export default UsersListPage;
