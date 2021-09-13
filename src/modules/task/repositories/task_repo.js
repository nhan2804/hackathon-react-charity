import moment from "moment"
const task_repo=(tasks)=>{
    if(!tasks) return null;
    return tasks?.map((e,i)=>{
        return {
            id: i+1,
            start_date: moment(e?.time_start).format("YYYY-MM-DD"),
            duration: 80,
            text: e?.name_task +"<span></span>",
            assigned: e?.staff?.fullname ? "@"+e?.staff?.fullname: "Chưa có",
            progress: 60,
            id_task:e?.id_task
          }
    })
}
export {task_repo} 