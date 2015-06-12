$(function () {
    //根據登入者所屬的國家顯示天氣資訊
    var weatherCode = "23424971";
    try {
        switch (UserInfo.userCountryCode) {
            case "cn":
                weatherCode = "23424781";
                break;
            case "jp":
                weatherCode = "23424856";
                break;
            case "kr":
                weatherCode = "23424868";
                break;
            case "si":
                weatherCode = "1062617";
                break;
            case "tw":
                weatherCode = "23424971";
                break;
            case "vi":
                weatherCode = "23424984";
                break;
        }
    } catch (err) { }

    $.ajax({
        //台灣天氣
        url: "https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid = '" + weatherCode + "' and u='c'&format=json",
        dataType: "json",
        success: function (data) {
            //今天天氣
            var today = data.query.results.channel.item.condition;
            $("#header-content").find(".weather-icon:eq(0)").addClass("icon_" + today.code).attr("temp", today.temp);
            //由於condition的date在formate時會有問題，因此就改由forecast[0].date做formate
            today = data.query.results.channel.item.forecast[0];
            $("#header-content").find(".weather-item div:eq(1)").html($.date(today.date));
            mobileModule.setHeader("one");
            ////明天天氣
            //var tomorrow = data.query.results.channel.item.forecast[1];
            //$("#tomorrow").addClass("icon_" + tomorrow.code).attr("temp", (parseInt(tomorrow.high) + parseInt(tomorrow.low)) / 2);
            //$("#date2").html($.date(tomorrow.date));
            ////後天天氣
            //var aftertomorrow = data.query.results.channel.item.forecast[2];
            //$("#aftertomorrow").addClass("icon_" + aftertomorrow.code).attr("temp", (parseInt(aftertomorrow.high) + parseInt(aftertomorrow.low)) / 2);
            //$("#date3").html($.date(aftertomorrow.date));
        }
    });

    //$("#today,#tomorrow,#aftertomorrow").hover(
    //    function () {
    //        $(this).addClass("temperature-icon").removeClass("weather-icon").html("<div class='tempature-text'>" + $(this).attr("temp") + "</div>");
    //    }, function () {
    //        $(this).addClass("weather-icon").removeClass("temperature-icon").html("");
    //    }
    //);
});

$.date = function (dateObject) {
    var date = new Date(dateObject);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var dateString = month + "/" + day;
    return dateString;
};