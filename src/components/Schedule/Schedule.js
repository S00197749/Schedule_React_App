
import React from "react";
import { Inject,ScheduleComponent,Day,Week,Month,ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";

function Schedule(props) {
    const data = {
        dataSource: [{
            Subject: "Meeting",
            EndTime: new Date(2023, 3, 19, 16, 30),
            StartTime: new Date(2023, 3, 19, 14, 30)
        },
        {
            Subject: "Meeting 2",
            EndTime: new Date(2023, 3, 19, 20, 30),
            StartTime: new Date(2023, 3, 19, 18, 30)
        }]
    }

    function editorTemplate(timeSlotProp) {
        return ((timeSlotProp !== undefined) ? <div>{timeSlotProp.Subject }</div> : <div>Edit Event</div>);
    }

    return(
        <>
            <ScheduleComponent height={"900px"} editorTemplate={editorTemplate.bind(this)} eventSettings={data} >
                <ViewsDirective>
                    <ViewDirective option='Day' />
                    <ViewDirective option='Week' />
                    <ViewDirective option='Month' />
                </ViewsDirective>
                <Inject services={[Day, Week, Month]}/>
            </ScheduleComponent>
        </>
    );
}

export default Schedule;