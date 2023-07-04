import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SimpleIcon } from "components";
import { classNames } from "utils";
import { useSelector } from "react-redux";
import { useGetSideDrawerState } from "api";
import { drawerLinks, avatarUrl } from "utils/constants";

export default function SideDrawer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { appDrawerState } = useSelector((state) => state.util);

  const [getCurrentDrawerState] = useGetSideDrawerState();

  const stripPathName = (str) => str && str.replace("/", "");

  const matches = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <div
      className={classNames(
        "fixed left-0 top-0 z-[100] h-screen overflow-auto bg-gray-100 shadow-section-0 w-sidebar md:block duration-500 ease-in",
        !appDrawerState && !matches ? "hidden" : "block"
      )}
    >
      <div className="mt-20">
        <div className="py-4 border-b">
          <div className="mx-4 flex items-center ">
            <div className="bg-gray-300 rounded-full h-10 w-10">
              <img
                src={avatarUrl}
                alt="avatar"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="ml-2">
              <div className="text-gray-800 font-bold">Sven Pietsch</div>
              <div className="text-sm text-gray-400">Innoloft GmbH</div>
            </div>
          </div>
        </div>
        <ul className="drawer-links my-1">
          {drawerLinks?.map((l, index) => {
            const isLink = pathname?.includes(stripPathName(l.linkTo));

            return (
              <Fragment key={index}>
                <li
                  className={classNames(
                    "relative w-full overflow-hidden rounded"
                  )}
                  key={l.name}
                >
                  <button
                    className={classNames(
                      isLink
                        ? "border-primary bg-slate-300/50"
                        : "hover:bg-slate-300/50 border-gray-100",
                      "flex w-full flex-row items-center justify-center border-r-4 py-3"
                    )}
                    onClick={() => {
                      navigate(l.linkTo);
                      getCurrentDrawerState(false);
                    }}
                  >
                    <div className="pointer-events-none relative flex w-full items-center ml-6">
                      <div className="relative">
                        <div
                          className={classNames(
                            isLink ? "bg-white" : "bg-slate-100",
                            "flex h-9 w-9 flex-row items-center justify-center rounded-full"
                          )}
                        >
                          <SimpleIcon
                            name={l.icon}
                            size={20}
                            className="iconShadow-alt"
                          />
                        </div>
                      </div>
                      <div className="mt-1 px-2">{l.name}</div>
                    </div>
                  </button>
                </li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
