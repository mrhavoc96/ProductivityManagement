import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
export default function Cal() {
    const [myEventsList,setEvents] = useState([
        {
            start: new Date(),
            end : new Date(),
            title : 'hello'
        }
    ]);
    
    const handleSelectEvent = (event, e) => {
        console.log('Selected event:', event);
      };
    
      const handleSelectSlot = (slotInfo) => {
        console.log('Selected slot:', slotInfo);
        const newEvent = {
            start: slotInfo.start,
            end: slotInfo.end,
            title: prompt(`Event for ${slotInfo.start}`)
        };
        setEvents([... myEventsList, newEvent]);
      };
    
      const handleDoubleClickEvent = (event, e) => {
        console.log('Double-clicked event:', event);
      };
    
    return (
        <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        selectable = {true}
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        onDoubleClickEvent={handleDoubleClickEvent}
      />
    )
}