import axios from "axios";

import {
  setProducts,
  setLoading,
  setError,
  setProduct,
  productReviewed,
  resetError,
} from "../slices/products";

export const getProducts = (page, favoriteToggle) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");

    const { products } = data;

    dispatch(setProducts(products));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};
