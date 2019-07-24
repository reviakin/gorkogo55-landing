import React from "react";

export default function eventsList(props) {
  var { events, loading } = props;
  if (loading) {
    return <p>Загрузка акций...</p>;
  } else if (events.length > 0 && !loading) {
    return (
      <ul>
        {events.map(function renderEvents(event) {
          return (
            <li key={Math.random()}>
              <p>
                {event.date} - {event.title} - {event.shop}
              </p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>Тут размещаются акции торгового центра</p>;
  }
}
