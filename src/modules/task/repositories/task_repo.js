import moment from "moment"
const task_repo=(tasks)=>{
    if(!tasks) return null;
    return tasks?.map((e,i)=>{
        return {
            id: i+1,
            start_date: moment(e?.time_start).format("YYYY-MM-DD"),
            duration: 8,
            text: e?.name_task,
            assigned: e?.staff_id || "Chưa có",
            progress: 60,
            id_task:e?.id_task
          }
    })
}
export {task_repo} 