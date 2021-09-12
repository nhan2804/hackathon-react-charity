import { useUploadImage } from '@hooks/useUploadImage';
import { Progress } from 'antd'
import { LoadingOutlined,CheckCircleTwoTone} from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
export const FileUpload = ({file,onUpLoadSuccess}) => {
    console.log(file);
    const {mutate:upload,isLoading}=useUploadImage();
    useEffect(() => {
        const formData = new FormData();
        formData.append("image",file.file)
        upload(formData,{
            onSuccess:(data)=>{
                onUpLoadSuccess(data?.data?.display_url)
                console.log(data?.data?.display_url);
            }
        })
    }, [])
    const [image, setPreview] = useState()
    useEffect(() => {
        // create the preview
        const objectUrl = URL.createObjectURL(file.file)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
     }, [file.file])
    return (
        <div>
            <img src={image} className="w-16 h-16" alt="ok"/>
            <p>{file?.name}</p>
            {isLoading ? <LoadingOutlined /> : <CheckCircleTwoTone twoToneColor="#52c41a" />}
        </div>
    )
}
