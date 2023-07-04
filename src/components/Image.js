import ImageUploading from "react-images-uploading";
import { SimpleIcon } from ".";
import { classNames } from "utils";

export function ImageUpload({
  images,
  handleChange,
  TextComponent,
  className,
  defaultImage,
}) {
  return (
    <ImageUploading
      value={images}
      onChange={handleChange}
      maxNumber={1}
      dataURLKey="data_url"
      acceptType={["jpg", "jpeg", "png"]}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        isDragging,
        dragProps,
      }) => (
        <div className="rounded p-4-0">
          <button
            className={classNames(
              images.length ? "cursor-default" : "border-2 cursor-pointer",
              "relative flex h-60 w-full flex-row items-center justify-center rounded border-dashed bg-white shadow-sm",
              isDragging ? "border-red-500" : "",
              className
            )}
            {...dragProps}
            onClick={() => {
              if (!images.length) {
                onImageUpload();
              }
            }}
          >
            {images.length ? (
              <div className="h-full w-full rounded-lg overflow-hidden">
                <img
                  src={images[0]["data_url"]}
                  alt={images[0]["file"]["name"]}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 right-0">
                  <button
                    className="bg-white justify-center p-2 rounded flex items-center"
                    onClick={onImageRemoveAll}
                  >
                    <SimpleIcon name="MdDelete" className="text-red-500" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                {defaultImage ? (
                  <img
                    src={defaultImage}
                    alt="default"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <SimpleIcon
                      name="MdCloudUpload"
                      className="iconShadow-alt"
                      size={32}
                    />
                    {TextComponent && TextComponent}
                  </div>
                )}
              </>
            )}
          </button>
        </div>
      )}
    </ImageUploading>
  );
}
