import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LaptopOutlined,
    NotificationOutlined,
  } from "@ant-design/icons";
const left_nav=[
   {
    title:"Dự án",
    icon:"",
    to:"/",
    child:[
        {
            title:"Dự án của tôi",
            icon:'<UserOutlined/>',
            to:"/project",
        },
        {
            title:"Dự án được chia sẻ",
            icon:'<UserOutlined/>',
            to:"/project/shared",
        }
    ]
   },
   {
    title:"Danh bạ",
    icon:"",
    to:"/phone-book",
    child:[
        {
            title:"Danh sách liên lạc",
            icon:'<UserOutlined/>',
            to:"/phone-book",
        },
    ]
   },
   {
    title:"Tin nhắn",
    icon:"",
    to:"/message",
    child:[
        {
            title:"Tin nhắn của tôi",
            icon:'<UserOutlined/>',
            to:"/message",
        },
        {
            title:"Tin nhắn nhóm",
            icon:'<UserOutlined/>',
            to:"/message",
        }
    ]
   }
];
export {left_nav}