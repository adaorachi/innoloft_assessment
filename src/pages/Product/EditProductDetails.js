import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MainSection,
  DetailsSection,
  VideoSection,
  UserSection,
} from "./components";
import { useEditProduct, useGetProduct } from "api";
import { Loader } from "components";

export default function ProductDetails() {
  const params = useParams();
  const { productDetails } = useSelector((state) => state.product || {});

  const productId = params?.productId;
  useGetProduct(productId);

  const [editProduct, isSubmitting] = useEditProduct();

  const handleEditProduct = (values) => {
    editProduct(productId, values);
  };

  const propsObj = {
    productDetails,
    handleEditProduct,
    isSubmitting,
  };

  return (
    <div className="m-2 md:m-4">
      {productDetails ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-6">
              <MainSection {...propsObj} />
              <DetailsSection {...propsObj} />
              <VideoSection {...propsObj} />
              <UserSection {...propsObj} />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
