import { toast } from "react-toastify";

export const truncate = (str, len) =>
  str?.length <= len ? `${str?.slice(0, len)}` : `${str?.slice(0, len)}...`;

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const notification = (type, message, title) => {
  let toastType;
  switch (type) {
    case "success":
      toastType = toast.success;
      break;
    case "danger":
      toastType = toast.error;
      break;
    case "warning":
      toastType = toast.warn;
      break;
    case "info":
      toastType = toast.info;
      break;
    default:
      toastType = toast;
      break;
  }
  return toastType(message || title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
