import { useUploadImage } from "@hooks/useUploadImage";
import { LoadingOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Compress from "compress.js";
import dataURLtoFile from "@helper/convertBase64ToFile";

export const FileUpload = ({ file, onUpLoadSuccess }) => {
  const { mutate: upload, isLoading } = useUploadImage();
  async function resizeImageFn(file) {
    const compress = new Compress();
    const resizedImage = await compress.compress([file], {
      size: 2, // the max size in MB, defaults to 2MB
      quality: 1, // the quality of the image, max is 1,
      maxWidth: 800, // the max width of the output image, defaults to 1920px
      maxHeight: 600, // the max height of the output image, defaults to 1920px
      resize: true, // defaults to true, set false if you do not want to resize the image width and height
    });
    const img = resizedImage[0];
    const base64str = img.data;
    const imgExt = img.ext;
    // const resizedFiile = dataURLtoFile(base64str, file?.file?.name);
    return base64str;
  }
  useEffect(() => {
    async function uploadImg2Imgbb() {
      const fileCompressed = await resizeImageFn(file?.file);

      const formData = new FormData();
      formData.append("image", fileCompressed);

      upload(formData, {
        onSuccess: (data) => {
          onUpLoadSuccess(data?.data?.display_url);
        },
      });
    }
    uploadImg2Imgbb();
  }, []);
  const [image, setPreview] = useState();
  useEffect(() => {
    // create the preview
    const objectUrl = URL.createObjectURL(file.file);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file.file]);
  return (
    <div className="relative">
      <img src={image} className="w-16 h-16" alt="ok" />
      <p>{file?.file?.name}</p>
      <div className="absolute top-0 right-0 flex p-1">
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        )}
      </div>
    </div>
  );
};
