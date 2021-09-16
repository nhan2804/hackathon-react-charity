const scales = [
  { unit: "month", step: 1, format: "MMMM yyy" },
  { unit: "day", step: 1, format: "d" },
];

const columns = [
  { name: "text", label: "Tên công việc", width: "100px" },
  { name: "start", label: "Ngày bắt đầu", align: "center" },
  { name: "assigned", label: "Người thực hiện", align: "center" },
  { name: "duration", label: "Duration", width: "70px", align: "center" },
  { name: "done", label: "Tình trạng", width: "70px", align: "center" },
  // { name: "status", label: "Trạng thái", width: "100px", align: "center" },
];

// const tasks = [
//   {
//     id: 1,
//     open: true,

//     start_date: 1631171142842,
//     duration: 8,
//     text: "Nhẫn bảo làm z",
//     progress: 60,

//   },
//   {
//     id: 2,
//     open: true,
//     parent:1,
//     start_date: 1631257542842,
//     duration: 8,
//     text: "saedfsdfdssf",
//     progress: 60,

//   },
//   {
//     id: 3,
//     parent:1,
//     open: true,
//     start_date: 1631343942842,
//     duration: 8,
//     text: "saedfsdfdssf baka",
//     progress: 60,

//   },
//   {
//     id: 4,
//     parent:1,
//     open: true,
//     start_date: 1631430342842,
//     duration: 8,
//     text: "Công vieenjc N",
//     progress: 60,

//   },
// ];
const tasks = [
  {
    id: 2,

    start_date: "2020-11-06",
    duration: 4,
    text: "Lib-Gantt",
    progress: 80,
  },
  {
    id: 4,
    start_date: "2020-11-06",
    duration: 8,
    text: "Công vieenjc N",
    progress: 60,
  },
];
const links = [
  { source: 2, target: 3, type: 0 },
  { source: 1, target: 4, type: 1 },
  { source: 5, target: 6, type: 2 },
];

export { scales, columns, tasks, links };
