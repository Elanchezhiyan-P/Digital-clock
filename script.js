function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if(hrs >= 12){
        $(".session").text('PM');
    }else{
        $(".session").text('AM');
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    $('.hours').text(hrs.toString().length > 1 ? hrs : '0'+ hrs);
    $('.minutes').text(min.toString().length > 1 ? min : '0'+ hrs);
    $('.seconds').text(sec.toString().length > 1 ? sec : '0'+ hrs);
    $(".day-to-be-displayed").text(Days[dateTime.getDay()]);
}
setInterval(displayTime, 10);