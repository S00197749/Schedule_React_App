import React from "react";
import { Inject,ScheduleComponent,Day,Week,Month,ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";

function GroupSchedule(props) {
    const data = {
        dataSource: [{
            Subject: "Meeting",
            EndTime: new Date(2023, 3, 25, 16, 30),
            StartTime: new Date(2023, 3, 25, 14, 30)
        },
        {
            Subject: "Meeting 2",
            EndTime: new Date(2023, 3, 24, 20, 30),
            StartTime: new Date(2023, 3, 24, 18, 30)
        }]
    }

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
                <ScheduleComponent height={"900px"} editorTemplate={editorTemplate.bind(this)} eventSettings={data} >
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