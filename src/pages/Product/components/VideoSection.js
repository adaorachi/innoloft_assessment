import React, { useState } from "react";
import { Button, Section, TextField } from "components";
import { classNames } from "utils";

export default function VideoSection({
  productDetails,
  pageType,
  handleEditProduct,
  isSubmitting,
}) {
  const { video } = productDetails || {};

  const [values, setValues] = useState({
    video: video || "",
  });

  return (
    <div className="rounded-lg shadow-sm p-4 bg-gray-100">
      <Section title="Video Section">
        <div className="flex flex-col gap-4">
          <TextField
            placeholder="Input video link"
            value={values?.video}
            onChange={(e) =>
              setValues((prevS) => ({ ...prevS, video: e.target.value }))
            }
            label="Video Link"
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
