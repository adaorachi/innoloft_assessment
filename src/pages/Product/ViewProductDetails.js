import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MainSection,
  DetailsSection,
  VideoSection,
  UserSection,
} from "./components";

import { useGetProduct } from "api";
import { Button, Loader } from "components";
import { classNames } from "utils";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { productDetails } = useSelector((state) => state.product || {});
  const { appDetails } = useSelector((state) => state.util);

  const { hasUserSection } = appDetails || {};
  const productId = params?.productId;

  useGetProduct(productId);

  return (
    <div className="m-2 md:m-4">
      {productDetails ? (
        <div>
          <div className="text-right my-4">
            <Button
              label="Edit product"
              onClick={() => navigate(`/product/edit/${productDetails.id}`)}
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                  <div className="col-span-1 lg:col-span-3">
                    <MainSection
                      productDetails={productDetails}
                      pageType="view"
                    />
                  </div>

                  <div
                    className={classNames(
                      "col-span-1 lg:col-span-2",
                      !hasUserSection ? "hidden" : ""
                    )}
                  >
                    <UserSection
                      productDetails={productDetails}
                      pageType="view"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                  <div className="col-span-1 lg:col-span-3">
                    <DetailsSection
                      productDetails={productDetails}
                      pageType="view"
                    />
                  </div>
                  <div className="col-span-1 lg:col-span-3">
                    <VideoSection
                      productDetails={productDetails}
                      pageType="view"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
