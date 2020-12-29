$(document).ready(function () {

    var myTokken = '165b7d895810e77eb09b6ccae7ec9317bd6546f7';
    $(".address").suggestions({
        token: myTokken,
        type: "ADDRESS",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $("#job").suggestions({
        token: myTokken,
        type: "PARTY",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $("#fio ").suggestions({
        token: myTokken,
        type: "NAME",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

    $("#passport-data").suggestions({
        token: myTokken,
        type: "fms_unit",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });

});