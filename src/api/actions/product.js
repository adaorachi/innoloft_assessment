import { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";

import { axiosCall } from "api/helpers";
import { getProductDetail } from "redux/reducers/productReducers";
import { notification } from "utils";

export const useGetProduct = (productId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getProductDetail(null));

      const getData = async () => {
        const resp = await axiosCall(`/product/${productId}/`, {});

        dispatch(getProductDetail(resp.data));
      };
      getData();
    } catch (error) {
      dispatch(getProductDetail(null));
    }
  }, [dispatch, productId]);
};

export const useEditProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const { productDetails } = useStore().getState()?.product;

  const editProduct = (productId, editData) => {
    const data = { ...productDetails, ...editData };
    try {
      setIsSubmitting(true);
      setIsSubmitted(false);

      const getData = async () => {
        await axiosCall(`/product/${productId}/`, { data }, "PUT");

        setIsSubmitting(false);
        setIsSubmitted(true);

        dispatch(getProductDetail(data));
        notification("success", "Product details has been successfully edited");
      };
      getData();
    } catch (error) {
      dispatch(getProductDetail(null));
    }
  };

  return [editProduct, isSubmitting, isSubmitted];
};
