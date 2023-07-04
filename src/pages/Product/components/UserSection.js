import React, { useState } from "react";
import {
  Section,
  TextField,
  FileTextInput,
  Button,
  GoogleMap,
} from "components";
import { classNames } from "utils";

export default function UserSection({
  productDetails,
  pageType,
  handleEditProduct,
  isSubmitting,
}) {
  const { user, company } = productDetails || {};

  const { firstName, lastName, email, position, profilePicture } = user || {};

  const { name: companyName, address } = company || {};
  const { city, country, house, street, latitude, longitude } = address || {};

  const [userData, setUserData] = useState({
    ...user,
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    position: position || "",
  });

  const [companyData, setCompanyData] = useState({
    ...company,
    name: companyName || "",
  });
  const [userImageFile, setUserImageFile] = useState(null);
  const [getCompanyAddress, setCompanyAddress] = useState(
    `${house} ${street}, ${city?.name} ${country?.name}`
  );

  const handleUserImage = (e) => {
    setUserImageFile(e);
  };

  const setDataValue = (data, key, value) => {
    data((prevS) => ({
      ...prevS,
      [key]: value,
    }));
  };

  const username = `${userData.firstName} ${userData.lastName}`;
  const companyAddressDetails = {
    address: getCompanyAddress,
    lat: Number(latitude),
    lng: Number(longitude),
  };

  return (
    <div className="rounded-lg shadow-sm p-4 bg-gray-100">
      <Section title="User Info Section">
        <div className="flex flex-col gap-4">
          <FileTextInput
            onChange={handleUserImage}
            label="Image"
            defaultFileName={profilePicture}
            disabled={pageType === "view"}
          />

          <TextField
            placeholder="Input name"
            value={username}
            onChange={(e) => {
              const v = e.target.value;
              setUserData((prevS) => ({
                ...prevS,
                firstName: v.split(" ")[0],
                lastName: v.split(" ")[1],
              }));
            }}
            label="Name"
            disabled={pageType === "view"}
          />
          <TextField
            placeholder="Input email"
            value={userData?.email}
            onChange={(e) => {
              setDataValue(setUserData, "email", e.target.value);
            }}
            label="Email"
            disabled={pageType === "view"}
          />
          <TextField
            placeholder="Input position"
            value={userData?.position}
            onChange={(e) => {
              setDataValue(setUserData, "position", e.target.value);
            }}
            label="Position"
            disabled={pageType === "view"}
          />
          <TextField
            placeholder="Input company name"
            value={companyData?.name}
            onChange={(e) => {
              setDataValue(setCompanyData, "name", e.target.value);
            }}
            label="Company Name"
            disabled={pageType === "view"}
          />
          <TextField
            placeholder="Input company address"
            value={getCompanyAddress}
            onChange={(e) => {
              setCompanyAddress(e.target.value);
            }}
            label="Company Address"
            disabled={pageType === "view"}
          />

          {pageType === "view" && (
            <GoogleMap addressDetails={companyAddressDetails} />
          )}
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
              onClick={() =>
                handleEditProduct({
                  user: userData,
                  company: companyData,
                  userImage: userImageFile,
                })
              }
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
