let statusMall = document.getElementById( "statusMall" );
statusMall.style.color = "#457545";

let updateCurrentStatus = function() {
    let timeKaliningrad = new Date().getUTCHours()+2;
    let mallStatus = ( timeKaliningrad >= 9 && timeKaliningrad <= 18 ) ? "Сейчас открыто" : "";
    statusMall.innerText = mallStatus;
    setTimeout(updateCurrentStatus, 1000);
}

updateCurrentStatus();