import {
  MdHome,
  MdCloudUpload,
  MdSearch,
  MdDashboard,
  MdGroup,
  MdBusinessCenter,
  MdLogout,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdDelete,
  MdCancel,
  MdNotificationsNone,
  MdMenu,
} from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { RiProductHuntFill } from "react-icons/ri";

import { IconContext } from "react-icons";
import { classNames } from "utils";

const icons = {
  MdHome,
  MdCloudUpload,
  MdSearch,
  MdDashboard,
  MdGroup,
  MdBusinessCenter,
  MdLogout,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdDelete,
  MdCancel,
  MdNotificationsNone,
  MdMenu,
  FaMapMarkerAlt,
  BiHomeAlt,
  RiProductHuntFill,
};
export function SimpleIcon({ name = "MdHome", size = 20, className = "" }) {
  const IconT = icons?.[name] || icons?.["MdHome"];

  return (
    <IconContext.Provider
      value={{ className: classNames("text-primary", className), size }}
    >
      <IconT size={size} />
    </IconContext.Provider>
  );
}
