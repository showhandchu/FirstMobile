var mobileModule = (function () {
    var counter = 0;
    return {
        incrementCounter: function () {
            return counter++;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        },
        setHeader: function (id) {
            var source = $("#header-content").html();
            var template = Handlebars.compile(source);
            var html = template("");
            $("#" + id).find("div:eq(0)").html(html);
            $(".weather-icon").hover(
                function () {
                    $(this).addClass("temperature-icon").removeClass("weather-icon").html("<div class='tempature-text'>" + $(this).attr("temp") + "</div>");
                }, function () {
                    $(this).addClass("weather-icon").removeClass("temperature-icon").html("");
                }
            );
        }
    };
})();

$(document).on("pagechange", function (event, data) {
    var pageId = data.toPage[0].id;
    console.info(pageId);
    switch (pageId) {
        case "one":
            //var source = $("#header-content").html();
            //var template = Handlebars.compile(source);
            //var html = template("");
            //$("#one").find("div:eq(0)").html(html);
            mobileModule.setHeader("one");

            //var contentType = "application/x-www-form-urlencoded; charset=utf-8";

            //if (window.XDomainRequest) //for IE8,IE9
            //    contentType = "text/plain";

            //$.ajax({
            //    url: "http://localhost:8002/zh-tw/Home/GetPost",
            //    data: { countrycode: "tw" },
            //    type: "POST",
            //    crossDomain: true,
            //    //dataType: "json",
            //    success: function (data) {
            //        alert("Data from Server" + JSON.stringify(data));
            //        console.info(data);
            //    },
            //    error: function (jqXHR, textStatus, errorThrown) {
            //        alert("You can not send Cross Domain AJAX requests: " + errorThrown);
            //        console.info(errorThrown);
            //    }
            //});
            break;
        case "two":
            mobileModule.setHeader("two");
            break;
    }
});

//$(document).on("dialogcreate", function (event, ui) {
//    var dialogId = event.target.id;
//    //console.info(dialogId);
//    switch (dialogId) {
//        case "popup":
//            break;
//    }
//});