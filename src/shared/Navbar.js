import { SimpleIcon, TextField } from "../components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { classNames } from "utils";
import { useGetSideDrawerState } from "api";
import { avatarUrl } from "utils/constants";

export default function Navbar() {
  const { appDetails, appDrawerState } = useSelector((state) => state.util);

  const { logo } = appDetails || {};

  const [getCurrentDrawerState] = useGetSideDrawerState();

  return (
    <div
      className={classNames(
        `fixed top-0 w-full h-navbar z-[101] shadow-drawer bg-primary`
      )}
    >
      <div className="flex items-center justify-between h-full px-2 md:px-8">
        <div className="flex items-center gap-2">
          <button
            className="block md:hidden px-2 hover:bg-gray-400/20 p-2 rounded-full duration-500 ease-in"
            onClick={() => {
              getCurrentDrawerState(!appDrawerState);
            }}
          >
            <SimpleIcon name="MdMenu" className="text-white" />
          </button>
          <Link className="icon bg-white p-2" to="/">
            <img src={logo} alt="logo" className="h-[20px]" />
          </Link>
          <div className="relative flex items-center ml-16 hidden lg:block">
            <TextField
              placeholder="Enter interest, keyword, company name, etc"
              className="!w-[340px] h-full"
              EndAdornment={() => <SimpleIcon name="MdSearch" />}
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="flex item-center gap-2">
          <button className="flex text-white items-center">
            EN
            <SimpleIcon
              name="MdOutlineKeyboardArrowDown"
              className="text-white"
            />
          </button>
          <button className="flex text-white items-center hover:bg-gray-400/20 p-2 rounded-full duration-500 ease-in">
            <SimpleIcon name="MdNotificationsNone" className="text-white" />
          </button>
          <button className="flex text-white items-center">
            <img
              src={avatarUrl}
              alt="avatar"
              className="h-6 w-6 rounded-full"
            />
            <SimpleIcon
              name="MdOutlineKeyboardArrowDown"
              className="text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
