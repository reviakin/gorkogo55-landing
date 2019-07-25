import React from "react";
import moment from "moment";
// ******
export default function eventsList(props) {
  var { events, loading } = props;

  if (loading) {
    return <p>Загрузка акций...</p>;
  } else if (events.length > 0 && !loading) {
    let eventsList = events
      .filter(beforeNow)
      .sort(byDate)
      .map(renderEvents);
    return (
      <>
        <hr />
        <ul className="list-unstyled">{eventsList}</ul>
      </>
    );
  } else {
    return <p>Тут размещаются акции торгового центра</p>;
  }
}

function beforeNow(event) {
  var date = moment(event.date);
  date = date._i.replace(/[-]/g, "");
  var now = moment()
    .utcOffset("+02:00")
    .format("YYYY, MM, D")
    .replace(/[, ]/g, "");
  return Number(date) <= Number(now);
}

function byDate(event1, event2) {
  event1 = moment(event1.date);
  event1 = event1._i.replace(/[-]/g, "");
  event2 = moment(event2.date);
  event2 = event2._i.replace(/[-]/g, "");
  if (event1 > event2) {
    return -1;
  } else if (event1 < event2) {
    return 1;
  } else {
    return 0;
  }
}

function renderEvents(event) {
  return (
    <li key={Math.random()}>
      <p className="text-center">{event.date}</p>
      <p className="text-center">
        <a
          className="btn btn-outline-primary"
          href={`https://shop.gorkogo55.ru/shop/${event.shop}`}
        >
          Павильон № {event.shop}
        </a>
      </p>
      <p>{event.title}</p>
      <hr />
    </li>
  );
}
