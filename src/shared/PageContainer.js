import * as React from "react";
import { capitalize } from "lodash";
import { Link, useLocation } from "react-router-dom";
import { SimpleIcon } from "../components";

export default function PageContainer({ children }) {
  const location = useLocation();
  const path = location.pathname.split("/").slice(1);

  return (
    <div className={`mt-0 ml-0 p-4 md:mt-navbar md:ml-sidebar`}>
      <div className="mx-auto mt-navbar md:mt-0 mb-4 flex justify-between px-4">
        <ul className="items-center justify-center text-sm flex">
          <SimpleIcon name="BiHomeAlt" size={16} />
          <li className="ml-1 flex items-center">
            <Link to="/" className="underline underline-offset-2">
              App
            </Link>
            <SimpleIcon name="MdOutlineKeyboardArrowRight" size={16} />
          </li>
          {path.map((i) => {
            const d = i !== path[path.length - 1];

            return (
              <li className="flex items-center" key={i}>
                <Link
                  to={`/${i}`}
                  className={d ? "underline underline-offset-2" : ""}
                >
                  {capitalize(i)}
                </Link>
                {i !== path[path.length - 1] && (
                  <SimpleIcon name="MdOutlineKeyboardArrowRight" size={16} />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}
