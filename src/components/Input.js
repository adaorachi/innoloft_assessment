import { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import draftToMarkdown from "draftjs-to-markdown";

import { classNames, truncate } from "utils";
import { SimpleIcon } from "./Icon";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "./Button";

export const TextField = ({
  onChange,
  value,
  placeholder,
  label,
  disabled,
  className,
  EndAdornment,
}) => {
  const [getValue, setValue] = useState(value || "");

  const handleChange = (e) => {
    onChange(e);
    setValue(e.target.value);
  };

  return (
    <div className="input-field">
      {label && <div className="mb-1">{label}</div>}
      <div className="bg-white border border-gray-200 rounded-lg p-2 h-12 w-full relative md:block">
        <input
          className={classNames("w-full h-full border-0 outline-0", className)}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          value={getValue}
          disabled={disabled}
        />
        {EndAdornment && (
          <div className="absolute right-2 top-[30%]">
            <EndAdornment />
          </div>
        )}
      </div>
    </div>
  );
};

export const FileTextInput = ({
  onChange,
  label,
  defaultFileName,
  disabled,
}) => {
  const [fileName, setFileName] = useState(null);
  const handleChange = (e) => {
    onChange(e.target.files);
    setFileName(e.target.files[0]?.name);
  };

  const ref = useRef();

  return (
    <div className="input-field">
      {label && <div className="mb-1">{label}</div>}
      <input
        ref={ref}
        type="file"
        onChange={handleChange}
        className="invisible -top-[1000px] hidden h-0 w-0"
        disabled={disabled}
      />
      <div className="bg-white border border-gray-200 rounded-lg h-12 w-full flex items-center justify-between overflow-hidden">
        <div className="text-gray-400 pl-2 text-ellipsis">
          {fileName || defaultFileName || "No chosen file"}
        </div>
        {!disabled && (
          <Button
            onClick={() => {
              ref?.current?.click();
            }}
            className="text-right"
            label="Upload"
          />
        )}
      </div>
    </div>
  );
};

export const Select = ({
  options,
  placeholder = "",
  onChange,
  value,
  label,
  multiple,
  disabled,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOnChange = (val) => {
    if (multiple) {
      const list = [...value];
      const valInList = list?.find((i) => i.id === val.id);
      if (!valInList) {
        list.push(val);
      }
      onChange(list);
    } else {
      onChange(val);
    }
  };

  const handleDelete = (id) => {
    const list = [...value];
    const valList = list?.filter((i) => i.id !== id);
    onChange(valList);
  };

  return (
    <div className="select-field">
      {label && <div className="mb-1">{label}</div>}
      <div className="bg-white border border-gray-200 rounded-lg p-2 min-h-[50px] w-full relative flex items-center">
        <div className="w-full h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2 flex-wrap w-full">
              {value?.length
                ? value?.map((item) => (
                    <div
                      className="border rounded-full py-1 px-2 flex justify-between items-center bg-gray-200"
                      key={item.id}
                    >
                      <div className="text-sm">{item?.name}</div>
                      {!disabled && (
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="ml-2"
                        >
                          <SimpleIcon name="MdCancel" size={16} />
                        </button>
                      )}
                    </div>
                  ))
                : null}

              <button
                {...(!disabled && {
                  onClick: () => {
                    setOpenDropdown(!openDropdown);
                  },
                })}
                className={classNames(
                  "flex-1 h-full min-h-[30px] w-full text-left",
                  disabled ? "cursor-auto" : ""
                )}
              >
                <div className="flex items-center justify-between w-full">
                  {multiple ? (
                    <div
                      className={classNames(
                        "text-gray-400 whitespace-nowrap",
                        disabled ? "hidden" : ""
                      )}
                    >
                      {placeholder}
                    </div>
                  ) : (
                    <>
                      {truncate(value?.name, 60) ? (
                        <div className="border rounded-full py-1 px-2 flex justify-between items-center bg-gray-200">
                          {truncate(value?.name, 60)}
                        </div>
                      ) : (
                        placeholder
                      )}
                    </>
                  )}

                  {!disabled && (
                    <SimpleIcon name="MdOutlineKeyboardArrowDown" size={14} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
        {!disabled && (
          <div
            className={classNames(
              "absolute top-12 left-0 w-full z-[1000]",
              openDropdown ? "" : "hidden"
            )}
          >
            <div className="bg-white rounded w-full border overflow-hidden shadow-lg">
              <ul>
                {options?.length &&
                  options?.map((item) => (
                    <li className="w-full" key={item.id}>
                      <button
                        className={classNames(
                          "p-2 h-full w-full text-left",
                          value?.name === item?.name
                            ? "bg-primary text-white"
                            : "hover:bg-slate-50"
                        )}
                        onClick={() => {
                          handleOnChange(item);
                          setOpenDropdown(false);
                        }}
                      >
                        {item?.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const WYSIWYGEditor = ({
  placeholder,
  label,
  initialContent,
  onChange,
  disabled,
}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(initialContent || ""))
    )
  );

  const onEditorStateChange = (e) => {
    setEditorState(e);
    onChange(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

  const getContent = draftToMarkdown(
    convertToRaw(editorState.getCurrentContent())
  );

  return (
    <div className="editor-input">
      {label && <div className="mb-1">{label}</div>}
      <div className="bg-white border border-gray-200 rounded-lg">
        {!disabled ? (
          <Editor
            toolbar={{
              options: ["inline", "list", "textAlign", "link", "remove"],
            }}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            placeholder={placeholder}
            editorClassName="p-2 min-h-[100px]"
          />
        ) : (
          <div className="p-2">{getContent}</div>
        )}
      </div>
    </div>
  );
};
