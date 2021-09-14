import moment from "moment"
const task_repo=(tasks)=>{
    if(!tasks) return null;
    return tasks?.map((e,i)=>{
       
    const date1 = new Date(e?.time_start);
    const date2 = new Date(e?.time_end);
    const date3 = new Date();
    const duration_time = date2.getTime() - date1.getTime();
    const duration = duration_time / (1000 * 3600 * 24);

    let progress=0;
    
    if(date3.getTime()<date2.getTime() && date3.getTime() > date1.getTime()){
        const deadline_time = date3.getTime() - date1.getTime();
        const deadline = deadline_time / (1000 * 3600 * 24);
        console.log(deadline);
        progress= Math.ceil((deadline/duration*100));
    }else if(date3.getTime()>=date2.getTime() && date3.getTime() >= date1.getTime()){
        progress=100;
        console.log("over");
    }
        return {
            id: i+1,
            start_date: moment(e?.time_start).format("YYYY-MM-DD"),
            duration: duration,
            text: e?.name_task ,
            assigned: e?.staff?.fullname ? "@"+e?.staff?.fullname: "Chưa có",
            progress: progress,
            id_task:e?.id_task
          }
    })
}
export {task_repo} 