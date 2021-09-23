import LeftNav from "@components/LeftNav";
import { Layout, PageHeader, Form, Input, Button } from "antd";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useUploadImage } from "@hooks/useUploadImage";
import useGetProfile from "@modules/auth/hooks/useGetProfile";
import useChangeAvatar from "@modules/profile/hooks/useChangeAvatar";
import useUpdateProfile from "@modules/profile/hooks/useUpdateProfile";
const Profile = () => {
  const { mutateAsync: uploadImage } = useUploadImage();
  const { data: profile } = useGetProfile();
  const { mutate: changeAva } = useChangeAvatar();
  const { mutate: updateProfile, isLoading } = useUpdateProfile();
  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles?.length === 0) return;
    const formData = new FormData();
    formData.append("image", acceptedFiles?.[0]);
    const data = await uploadImage(formData);
    changeAva(data?.data?.url);
  };
  const onSubmit = (data) => {
    updateProfile(data);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });
  return (
    <Layout className="h-full">
      <LeftNav />
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <PageHeader title="Thông tin tài khoản" />
        <div
          className="flex items-center justify-center text-center bg-gray-100 border-2 border-gray-700 border-dashed rounded-full cursor-pointer w-52 h-52 form__input"
          {...getRootProps()}
        >
          <input {...getInputProps()} className="w-full" />
          <img
            src={profile?.avatar}
            alt=""
            className="object-cover w-48 h-48 border-none rounded-full"
          />
        </div>
        {profile && (
          <Form
            layout="vertical"
            className="!px-6"
            initialValues={{
              fullname: profile?.fullname,
              phone: profile?.phone,
              email: profile?.email,
            }}
            onFinish={onSubmit}
          >
            <div className="w-1/3">
              <Form.Item label="Tên" name="fullname">
                <Input />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="phone">
                <Input disabled={true} />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
              {/* <Form.Item label="Avatar" name="fullname">
              <Input />
            </Form.Item> */}
            </div>
            <div>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Sửa thông tin
                </Button>
              </Form.Item>
            </div>
          </Form>
        )}
      </Layout.Content>
    </Layout>
  );
};

export default Profile;
