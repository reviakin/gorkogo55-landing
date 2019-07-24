import React from "react";
import moment from "moment";
// ******
// TODO: more readeble come
export default function eventsList(props) {
  var { events, loading } = props;
  if (loading) {
    return (
      <div className="container pb-3">
        <p>Загрузка акций...</p>
      </div>
    );
  } else if (events.length > 0 && !loading) {
    events = events
      .filter(function afterNow(event) {
        var date = moment(event.date);
        date = date._i.replace(/[-]/g, "");
        var now = moment()
          .utcOffset("+02:00")
          .format("YYYY, MM, D")
          .replace(/[, ]/g, "");
        return Number(date) >= Number(now);
      })
      .sort(function byDate(event1, event2) {
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
      });
    return (
      <div className="container pb-3">
        <h6>Меропрития ТЦ Горького55</h6>
        <ul className="list-unstyled">
          {events.map(function renderEvents(event) {
            var date = moment(event.dete);
            console.log(date);
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
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="container pb-3">
        <p>Тут размещаются акции торгового центра</p>
      </div>
    );
  }
}
