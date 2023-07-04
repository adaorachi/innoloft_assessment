import React, { useState } from "react";
import {
  Section,
  ImageUpload,
  Select,
  TextField,
  WYSIWYGEditor,
  Button,
} from "components";
import { classNames } from "utils";
import { optionsType } from "utils/constants";

export default function MainSection({
  productDetails,
  pageType,
  handleEditProduct,
  isSubmitting,
}) {
  const { description, name, picture, type } = productDetails || {};

  const [values, setValues] = useState({
    name: name || "",
    description: description || "",
    type: type || null,
  });

  const [images, setImages] = useState([]);

  const handleImageChange = (imageList) => {
    setImages(imageList);
  };

  return (
    <div className="rounded-lg shadow-sm p-4 bg-gray-100">
      <Section title="Main Section">
        <div className="flex flex-col gap-4">
          {pageType === "view" ? (
            <div className="w-full h-[230px] p-3 rounded border">
              <img
                src={picture}
                className="w-full h-full object-cover"
                alt="product_image"
              />
            </div>
          ) : (
            <ImageUpload
              {...{
                defaultImage: picture,
                images,
                handleChange: handleImageChange,
                TextComponent: (
                  <div className="flex items-center flex-col justify-center gap-1">
                    <div className="text-gray-400">
                      Click to select a file or drop it here
                    </div>
                    <Button label="Click to Upload" onClick={() => {}} />
                  </div>
                ),
              }}
            />
          )}

          <TextField
            placeholder="Input title"
            value={values?.name}
            onChange={(e) =>
              setValues((prevS) => ({ ...prevS, name: e.target.value }))
            }
            label="Title"
            disabled={pageType === "view"}
          />

          <WYSIWYGEditor
            placeholder="Input Description"
            label="Description"
            initialContent={values?.description}
            onChange={(desc) =>
              setValues((prevS) => ({ ...prevS, description: desc }))
            }
            disabled={pageType === "view"}
          />

          <Select
            options={optionsType}
            placeholder="Select Type"
            value={values?.type}
            onChange={(value) =>
              setValues((prevS) => ({ ...prevS, type: value }))
            }
            label="Type"
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
              isSubmitting={isSubmitting}
              label="Save"
              onClick={() => handleEditProduct(values)}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
