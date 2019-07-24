import React from "react";
import moment from "moment";
// ******
export default function eventsList(props) {
  var { events, loading } = props;

  if (loading) {
    return <p>Загрузка акций...</p>;
  } else if (events.length > 0 && !loading) {
    events = events.filter(afterNow).sort(byDate);
    return (
      <>
        <ul className="list-unstyled">{events.map(renderEvents)}</ul>
      </>
    );
  } else {
    return <p>Тут размещаются акции торгового центра</p>;
  }
}

function afterNow(event) {
  var date = moment(event.date);
  date = date._i.replace(/[-]/g, "");
  var now = moment()
    .utcOffset("+02:00")
    .format("YYYY, MM, D")
    .replace(/[, ]/g, "");
  return Number(date) >= Number(now);
}

function byDate(event1, event2) {
  event1 = moment(event1.date);
  event1 = event1._i.replace(/[-]/g, "");
  event2 = moment(event2.date);
  event2 = event2._i.replace(/[-]/g, "");
  if (event1 < event2) {
    return -1;
  } else if (event1 > event2) {
    return 1;
  } else {
    return 0;
  }
}

function renderEvents(event) {
  return (
    <li key={Math.random()}>
      <p>
        {event.date} - {event.title} -{" "}
        <span>
          <a href={`https://shop.gorkogo55.ru/shop/${event.shop}`}>
            Павильон № {event.shop}
          </a>
        </span>
      </p>
    </li>
  );
}
