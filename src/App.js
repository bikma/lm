import React, { useState } from "react"

import FullCalendar from "@fullcalendar/react" // must go before plugins
import OpenLM from "./openLM"
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!
import events from "./events"
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid"

function App() {
  const [LM, setLM] = useState()
  const handleEventClick = (info) => {
    console.log(info.event.title)
    setLM(info.event)
  }
  return (
    <div style={{ margin: 20 }}>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        height="auto"
        // initialView="dayGridMonth"
        // weekends={false}
        hiddenDays={[0]}
        allDaySlot={false}
        defaultView="basicWeek"
        editable={false}
        headerToolbar={{
          right: "dayGridMonth,timeGridWeek,timeGridDay prev,next,today",
        }}
        events={events}
        eventClick={handleEventClick}
        slotMinTime="08:00"
        slotMaxTime="13:00"
        navLinks={true}
        nowIndicator={true}
        slotDuration={"00:30:00"}
        snapDuration={"00:30:00"}
        displayEventTime={false}
      />
      {LM && (
        <div>
          <OpenLM
            lm={LM}
            onClose={() => {
              setLM(null)
            }}
          />
        </div>
      )}
    </div>
  )
}

export default App
