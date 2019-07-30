import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";

function App() {
  var isOpen;
  var now = moment()
    .utcOffset("+02:00")
    .format("H")
    .replace(/[, ]/g, "");
  if (now >= 9 && now < 19) {
    isOpen = <span style={{ color: "green" }}>(cейчас открыто)</span>;
  }
  return (
    <div>
      <span>
        <img src="https://img.icons8.com/ios/20/000000/clock.png" />
      </span>{" "}
      с 09:00 до 19:00 {isOpen}
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("openMall"));
