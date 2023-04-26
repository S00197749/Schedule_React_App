import React from "react";
import { Inject,ScheduleComponent,Day,Week,Month,ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";
import { Button } from "react-bootstrap";

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

    function headerTemplate(props) {
        return (<div></div>);
    }
    function contentTemplate(props) {
        return (<div>
                {props.elementType === 'cell' ?
                    <div></div>
                :
                    <div></div>}
            </div>);
    }
    function footerTemplate(props) {
        return (<div></div>);
    }

    return(
        <>
            <ScheduleComponent height={"900px"} 
            eventSettings={data}
            quickInfoTemplates={{
                header: headerTemplate.bind(this),
                content: contentTemplate.bind(this),
                footer: footerTemplate.bind(this)
            }}>
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

export default GroupSchedule;