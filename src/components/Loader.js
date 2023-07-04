import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { classNames } from "utils";

export default function Loader({ fullPage }) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center w-full loader-wrapper",
        fullPage ? "h-screen" : "h-[200px] rounded bg-gray-100"
      )}
    >
      {fullPage ? (
        <ThreeDots height="100" width="100" radius="9" color="#4fa94d" />
      ) : (
        <ThreeDots height="80" width="80" radius="9" color="#4fa94d" />
      )}
    </div>
  );
}
