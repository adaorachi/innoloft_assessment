import React, { useState } from "react";
import { Section, Select, Button } from "components";
import { classNames } from "utils";
import { optionsCategories, optionsModels, optionsTrl } from "utils/constants";

export default function DetailsSection({
  productDetails,
  pageType,
  handleEditProduct,
  isSubmitting,
}) {
  const { businessModels, categories, trl } = productDetails || {};

  const [values, setValues] = useState({
    businessModels: businessModels || [],
    categories: categories || [],
    trl: trl || [],
  });

  return (
    <div className="rounded-lg shadow-sm p-4 bg-gray-100">
      <Section title="Details Section">
        <div className="flex flex-col gap-4">
          <Select
            options={optionsCategories}
            placeholder="Select categories"
            value={values?.categories}
            onChange={(values) =>
              setValues((prevS) => ({ ...prevS, categories: values }))
            }
            label="Categories"
            multiple
            disabled={pageType === "view"}
          />

          <Select
            options={optionsModels}
            placeholder="Select models"
            value={values?.businessModels}
            onChange={(values) =>
              setValues((prevS) => ({ ...prevS, businessModels: values }))
            }
            label="Business Models"
            multiple
            disabled={pageType === "view"}
          />

          <Select
            options={optionsTrl}
            placeholder="Select TRL"
            value={values?.trl}
            onChange={(values) =>
              setValues((prevS) => ({ ...prevS, trl: values }))
            }
            label="TRL"
            disabled={pageType === "view"}
          />
          <div
            className={classNames(
              "action-buttons flex gap-2 items-center justify-end",
              pageType ? "hidden" : ""
            )}
          >
            <Button label="Clear" className="!bg-gray-400" />
            <Button
              label="Save"
              isSubmitting={isSubmitting}
              onClick={() => handleEditProduct(values)}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
