import React from "react";

export default function Title({ title }) {
  return (
    <div className="shadow-sm bg-gray-100 p-4 rounded text-primary mb-4 font-bold">
      {title}
    </div>
  );
}
