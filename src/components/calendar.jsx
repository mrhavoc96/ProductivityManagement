import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
export default function Cal({ myEvents,setMyEvents }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleSelectEvent = (event) => {
        console.log('Selected event:', event);
      };
    
      const handleSelectSlot = () => {
        setIsModalOpen(true);
      };

      const handleSaveEvent = (events) => {
        const hasCollisions = events.some(newEvent => {
          return myEvents.some(existingEvent => {
            return (
              newEvent.start < existingEvent.end && newEvent.end > existingEvent.start
            );
          });
        });
      
        // If there are collisions, handle them appropriately (e.g., notify the user)
        if (hasCollisions) {
          return false;
        }
      
        // If no collisions, update the events state with the new events
        setMyEvents([...myEvents, ...events]);
        return true;
      };
    
      const handleDoubleClickEvent = (event, e) => {
        console.log('Double-clicked event:', event);
      };
    
    return (
      <div className="rounded-2xl" style={{ backgroundColor: 'rgba(248, 243, 199, 1)', padding: '15px' }}>
        <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        selectable = {true}
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        onDoubleClickEvent={handleDoubleClickEvent}
      />
      <AddTaskModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEvent}
      />
    </div>
    )
}