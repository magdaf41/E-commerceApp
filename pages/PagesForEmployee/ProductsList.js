import React, { useEffect, useState } from "react";
import ReturnBtn from "../../components/_shared/ReturnBtn";
import {
  StyledTable,
  StyledTableHeaders,
} from "../../components/_shared/Table.css";
// import { StyledBoxSearchInput, StyledSearchInput, StyledSearchIcon } from '../../components/Header.css'
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import RemoveProductModal from "../../components/Modals/RemoveProductModals";
import Product from "../../components/Product";
import {
  StyledButton,
  StyledButtonsArea,
} from "../../components/_shared/Buttons.css";
import {
  StyledSearchAndSelectBox,
  StyledBoxSearchInput,
  StyledSearchInput,
  StyledSearchIcon,
} from "../../components/_shared/ProductsList.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import SelectInput from "../../components/_shared/SelectInput";

const ProductsList = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.products);
  const isOpen = useSelector((store) => store.modal.isOpen);

  const [searchProducts, setSearchProducts] = useState(products);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [sortedProducts, setSortedProducts] = useState(searchProducts);

  const [productToDeleteId, setProductToDeleteId] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location);

  useEffect(() => {
    setSearchProducts(products);
  }, [products]); //dodałam useEffect po to aby obsłużyć zarówno searchProducts jak i produkt ale jak wyświetlać tylko wyszukane produkty jak sie usunie jeden z nich

  useEffect(() => {
    setSearchProducts(sortedProducts);
  }, [sortedProducts]);

  const onSorterChange = (e) => {
    let selectedSorter = e.target.value;
    const sortedListProducts = [...sortedProducts];
    if (selectedSorter === "title") {
      sortedListProducts.sort((a, b) =>
        a.title > b.title ? 1 : a.title === b.title ? 0 : -1
      );
    } else if (selectedSorter === "price") {
      sortedListProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSorter === "category") {
      sortedListProducts.sort((a, b) =>
        a.category > b.category ? 1 : a.category === b.category ? 0 : -1
      );
    }
    setSortedProducts(sortedListProducts);
    // if (!sortAscending) {
    // 	setSortAscending(true)
    // }
  };
  const search = (event) => {
    params.set("search", event.target.value);
    const matchedProducts = products.filter(
      (product) =>
        product.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        product.type.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchProducts(matchedProducts);
    setSearchPhrase(event.target.value);
  };

  return (
    <>
      {isOpen && <RemoveProductModal id={productToDeleteId} />}
      <ReturnBtn whiteColor />
      <StyledSearchAndSelectBox>
        {/* <SelectInput /> */}
        <div className="select-column">
          <label for="column-name">Sort by column </label>
          <select className="select" onChange={onSorterChange}>
            <option value="">--Please choose an option--</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
          </select>
        </div>
        {/* <Select>
					<option value='' hidden>
						Type
					</option>
					<option value='1'>Audi</option>
					<option value='2'>BMW</option>
					<option value='3'>Citroen</option>
					<option value='4'>Ford</option>
				</Select> */}
        {/* <Switch
				onColor='#136c94'
				offColor='white'
				height={20}
				onChange={setSortAscending}
				checked={sortAscending}
				checkedIcon='asc'
				uncheckedIcon='desc'></Switch> */}
        <StyledBoxSearchInput>
          <StyledSearchInput
            type="text"
            placeholder="Search by title, category and type"
            value={searchPhrase}
            onChange={search}
          ></StyledSearchInput>
          <StyledSearchIcon>
            <BsSearch />
          </StyledSearchIcon>
        </StyledBoxSearchInput>
      </StyledSearchAndSelectBox>

      <StyledTable>
        <StyledTableHeaders>
          <tr>
            <th>Lp.</th>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
            <th>Type</th>
            <th>Category</th>
            <th>Button</th>
          </tr>
        </StyledTableHeaders>

        <tbody>
          {searchProducts.map((product, index) => (
            <Product
              key={product.id}
              data={product}
              orderNo={index + 1}
              setProductToDeleteId={setProductToDeleteId}
            />
          ))}
        </tbody>
      </StyledTable>
      <StyledButtonsArea>
        <StyledButton onClick={() => navigate("/products/addNewproduct")}>
          Add new product
        </StyledButton>
      </StyledButtonsArea>
    </>
  );
};

export default ProductsList;
