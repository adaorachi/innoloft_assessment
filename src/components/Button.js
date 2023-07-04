import * as React from "react";
import { classNames } from "utils";

export default function Button({ label, isSubmitting, onClick, className }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className={classNames(
        "text-sm capitalize bg-primary shadow-button rounded-lg text-white p-4 py-3 font-bold",
        className
      )}
      {...(onClick && { onClick: handleClick })}
    >
      {!isSubmitting ? <>{label}</> : <div>Loading</div>}
    </button>
  );
}
