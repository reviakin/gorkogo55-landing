import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Tabletop from "tabletop";

import EventsList from "./eventsList";

function App() {
  var [events, setEvents] = useState([]);
  var [loading, setLoading] = useState(false);
  // ******
  // loading events from googleSheets
  // ******
  useEffect(() => {
    setLoading(true);
    Tabletop.init({
      key: "1titLIWPDQQiuXyVFLkmovy_WOZi41FzQeaFyDNT3prU",
      callback: googleData => {
        setEvents(googleData);
        setLoading(false);
      },
      simpleSheet: true
    });
  }, []);

  return (
    <div>
      <EventsList events={events} loading={loading} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
