import React, { useState } from "react";
import { Inject,ScheduleComponent,Day,Week,Month,ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";

function GroupSchedule(props) {
    const [userSchedule, setUserSchedule] = useState([]);

    const url = "https://schedule-functions.azurewebsites.net/api/GetUserSchedule?code=5ZyIAL7d-IMLSqAo4J2vwkwK5IMYmZoxgOZTpuH9WeYiAzFurM3cbQ==";

    const u = props.user_Id;

    const fetchUserScheduleData = async () => {
		const userScheduleResult = await fetch(url + "&u=" + u)
		const userScheduleJsonResult = await userScheduleResult.json();

		setUserSchedule(userScheduleJsonResult)
	}

    const data = userSchedule;

    React.useEffect(() => {

        fetchUserScheduleData();
      },[]);

    function editorTemplate(timeSlotProp) {
        return ((timeSlotProp !== undefined) ? <div>{timeSlotProp.Subject }</div> : <div>Edit Event</div>);
    }

    return(
        <>
        <div class="container-fluid p-0">
            <div class="row mb-2 mb-xl-3">
                <div class="col-auto d-none d-sm-block">
                    <h3>My Schedule</h3>
                </div>
                <div class="row justify-content-end">
                    <div class="col-auto">
                        
                    </div>
                </div>
            </div>
            <div class="row mb-2 mb-xl-3">
                <ScheduleComponent height={"900px"} editorTemplate={editorTemplate.bind(this)} 
                eventSettings={{
                    dataSource: data,
                    fields:{
                        id: 'timeslot_Id',
                        subject: { default: 'Available' },
                        startTime: { title: 'From', name: 'startTime' },
                        endTime: { title: 'To', name: 'endTime' }
                    }
                }}>
                    <ViewsDirective>
                        <ViewDirective option='Day' />
                        <ViewDirective option='Week' />
                        <ViewDirective option='Month' />
                    </ViewsDirective>
                    <Inject services={[Day, Week, Month]}/>
                </ScheduleComponent>	      
            </div>
        </div>
            
        </>
    );
}

export default GroupSchedule;