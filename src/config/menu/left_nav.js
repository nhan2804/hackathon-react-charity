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
    child:[
        {
            title:"Dự án của tôi",
            icon:'<UserOutlined/>',
        },
        {
            title:"Dự án được chia sẻ",
            icon:'<UserOutlined/>',
        }
    ]
   },
   {
    title:"Danh bạ",
    icon:"",
    child:[
        {
            title:"Danh sách liên lạc",
            icon:'<UserOutlined/>',
        },
    ]
   },
   {
    title:"Tin nhắn",
    icon:"",
    child:[
        {
            title:"Tin nhắn của tôi",
            icon:'<UserOutlined/>',
        },
        {
            title:"Tin nhắn nhóm",
            icon:'<UserOutlined/>',
        }
    ]
   }
];
export {left_nav}