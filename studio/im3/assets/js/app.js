var humidity1;
var windspeed1;

//Mumbai
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1275339&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity1 = results.main.humidity;
            windspeed1 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city1').append('</br> HUMIDITY: ' + humidity1 + '% </br> WINDSPEED: ' + windspeed1 + ' mps');
        $("#circle1").css("height", humidity1 + "px");
        $("#circle1").css("width", humidity1 + "px");
        $("#circle1").css("opacity", "." + humidity1);
        $("#circle1").css("animation-name", "x");
    }
});

var humidity2;
var windspeed2;

//Moscow
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity2 = results.main.humidity;
            windspeed2 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city2').append('</br> HUMIDITY: ' + humidity2 + '% </br> WINDSPEED: ' + windspeed2 + ' mps');
        $("#circle2").css("height", humidity2 + "px");
        $("#circle2").css("width", humidity2 + "px");
        $("#circle2").css("opacity", "." + humidity2);
        $("#circle2").css("animation-name", "x");
    }
});

var humidity3;
var windspeed3;

//New York
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128638&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity3 = results.main.humidity;
            windspeed3 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city3').append('</br> HUMIDITY: ' + humidity3 + '% </br> WINDSPEED: ' + windspeed3 + ' mps');
        $("#circle3").css("height", humidity3 + "px");
        $("#circle3").css("width", humidity3 + "px");
        $("#circle3").css("opacity", "." + humidity3);
        $("#circle3").css("animation-name", "x");
    }
});

var humidity4;
var windspeed4;

//Tokyo
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity4 = results.main.humidity;
            windspeed4 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city4').append('</br> HUMIDITY: ' + humidity4 + '% </br> WINDSPEED: ' + windspeed4 + ' mps');
        $("#circle4").css("height", humidity4 + "px");
        $("#circle4").css("width", humidity4 + "px");
        $("#circle4").css("opacity", "." + humidity4);
        $("#circle4").css("animation-name", "x");
    }     
});

var humidity5;
var windspeed5;

//Seoul
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity5 = results.main.humidity;
            windspeed5 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city5').append('</br> HUMIDITY: ' + humidity5 + '% </br> WINDSPEED: ' + windspeed5 + ' mps');
        $("#circle5").css("height", humidity5 + "px");
        $("#circle5").css("width", humidity5 + "px");
        $("#circle5").css("opacity", "." + humidity5);
        $("#circle5").css("animation-name", "x");
    }     
});

var humidity6;
var windspeed6;

//Beijing
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1816670&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity6 = results.main.humidity;
            windspeed6 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city6').append('</br> HUMIDITY: ' + humidity6 + '% </br> WINDSPEED: ' + windspeed6 + ' mps');
        $("#circle6").css("height", humidity6 + "px");
        $("#circle6").css("width", humidity6 + "px");
        $("#circle6").css("opacity", "." + humidity6);
        $("#circle6").css("animation-name", "x");
    }     
});

var humidity7;
var windspeed7;

//Shanghai
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1796236&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity7 = results.main.humidity;
            windspeed7 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city7').append('</br> HUMIDITY: ' + humidity7 + '% </br> WINDSPEED: ' + windspeed7 + ' mps');
        $("#circle7").css("height", humidity7 + "px");
        $("#circle7").css("width", humidity7 + "px");
        $("#circle7").css("opacity", "." + humidity7);
        $("#circle7").css("animation-name", "x");
    }     
});

var humidity8;
var windspeed8;

//Paris
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2968815&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity8 = results.main.humidity;
            windspeed8 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city8').append('</br> HUMIDITY: ' + humidity8 + '% </br> WINDSPEED: ' + windspeed8 + ' mps');
        $("#circle8").css("height", humidity8 + "px");
        $("#circle8").css("width", humidity8 + "px");
        $("#circle8").css("opacity", "." + humidity8);
        $("#circle8").css("animation-name", "x");
    }     
});

var humidity9;
var windspeed9;

//London
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity9 = results.main.humidity;
            windspeed9 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city9').append('</br> HUMIDITY: ' + humidity9 + '% </br> WINDSPEED: ' + windspeed9 + ' mps');
        $("#circle9").css("height", humidity9 + "px");
        $("#circle9").css("width", humidity9 + "px");
        $("#circle9").css("opacity", "." + humidity9);
        $("#circle9").css("animation-name", "x");
    }     
});

var humidity0;
var windspeed0;

//Rio
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3451190&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            humidity0 = results.main.humidity;
            windspeed0 = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.city10').append('</br> HUMIDITY: ' + humidity0 + '% </br> WINDSPEED: ' + windspeed0 + ' mps');
        $("#circle0").css("height", humidity0 + "px");
        $("#circle0").css("width", humidity0 + "px");
        $("#circle0").css("opacity", "." + humidity0);
        $("#circle0").css("animation-name", "x");
    }     
});

$(".toggle2").click(function(){
    $(".city1").css("display", "none");
    $(".city2").css("display", "none");
    $(".city3").css("display", "none");
    $(".city4").css("display", "none");
    $(".city5").css("display", "none");
    $(".city6").css("display", "none");
    $(".city7").css("display", "none");
    $(".city8").css("display", "none");
    $(".city9").css("display", "none");
    $(".city10").css("display", "none");

    $("#circle1").css("display", "block");
    $("#circle2").css("display", "block");
    $("#circle3").css("display", "block");
    $("#circle4").css("display", "block");
    $("#circle5").css("display", "block");
    $("#circle6").css("display", "block");
    $("#circle7").css("display", "block");
    $("#circle8").css("display", "block");
    $("#circle9").css("display", "block");
    $("#circle0").css("display", "block");

    $("#circle1").css("animation-name", "void");
    $("#circle2").css("animation-name", "void");
    $("#circle3").css("animation-name", "void");
    $("#circle4").css("animation-name", "void");
    $("#circle5").css("animation-name", "void");
    $("#circle6").css("animation-name", "void");
    $("#circle7").css("animation-name", "void");
    $("#circle8").css("animation-name", "void");
    $("#circle9").css("animation-name", "void");
    $("#circle0").css("animation-name", "void");

    $(".toggle1").css("color", "black");
    $(".toggle1").css("font-weight", "300");
    $(".toggle2").css("color", "dodgerblue");
    $(".toggle2").css("font-weight", "500");
    $(".toggle3").css("color", "black");
    $(".toggle3").css("font-weight", "300");
});

$(".toggle3").click(function(){
    $(".city1").css("display", "none");
    $(".city2").css("display", "none");
    $(".city3").css("display", "none");
    $(".city4").css("display", "none");
    $(".city5").css("display", "none");
    $(".city6").css("display", "none");
    $(".city7").css("display", "none");
    $(".city8").css("display", "none");
    $(".city9").css("display", "none");
    $(".city10").css("display", "none");

    $("#circle1").css("display", "block");
    $("#circle2").css("display", "block");
    $("#circle3").css("display", "block");
    $("#circle4").css("display", "block");
    $("#circle5").css("display", "block");
    $("#circle6").css("display", "block");
    $("#circle7").css("display", "block");
    $("#circle8").css("display", "block");
    $("#circle9").css("display", "block");
    $("#circle0").css("display", "block");

    $("#circle1").css("height", humidity1 + "px");
    $("#circle1").css("width", humidity1 + "px");
    $("#circle1").css("opacity", "." + humidity1);
    $("#circle1").css("animation-name", "windy");
    $("#circle1").css("animation-duration", windspeed1 + "s");
    $("#circle1").css("animation-iteration-count", "infinite");

    $("#circle2").css("height", humidity2 + "px");
    $("#circle2").css("width", humidity2 + "px");
    $("#circle2").css("opacity", "." + humidity2);
    $("#circle2").css("animation-name", "windy");
    $("#circle2").css("animation-duration", windspeed2 + "s");
    $("#circle2").css("animation-iteration-count", "infinite");

    $("#circle3").css("height", humidity3 + "px");
    $("#circle3").css("width", humidity3 + "px");
    $("#circle3").css("opacity", "." + humidity3);
    $("#circle3").css("animation-name", "windy");
    $("#circle3").css("animation-duration", windspeed3 + "s");
    $("#circle3").css("animation-iteration-count", "infinite");

    $("#circle4").css("height", humidity4 + "px");
    $("#circle4").css("width", humidity4 + "px");
    $("#circle4").css("opacity", "." + humidity4);
    $("#circle4").css("animation-name", "windy");
    $("#circle4").css("animation-duration", windspeed4 + "s");
    $("#circle4").css("animation-iteration-count", "infinite");

    $("#circle5").css("height", humidity5 + "px");
    $("#circle5").css("width", humidity5 + "px");
    $("#circle5").css("opacity", "." + humidity5);
    $("#circle5").css("animation-name", "windy");
    $("#circle5").css("animation-duration", windspeed5 + "s");
    $("#circle5").css("animation-iteration-count", "infinite");

    $("#circle6").css("height", humidity6 + "px");
    $("#circle6").css("width", humidity6 + "px");
    $("#circle6").css("opacity", "." + humidity6);
    $("#circle6").css("animation-name", "windy");
    $("#circle6").css("animation-duration", windspeed6 + "s");
    $("#circle6").css("animation-iteration-count", "infinite");

    $("#circle7").css("height", humidity7 + "px");
    $("#circle7").css("width", humidity7 + "px");
    $("#circle7").css("opacity", "." + humidity7);
    $("#circle7").css("animation-name", "windy");
    $("#circle7").css("animation-duration", windspeed7 + "s");
    $("#circle7").css("animation-iteration-count", "infinite");

    $("#circle8").css("height", humidity8 + "px");
    $("#circle8").css("width", humidity8 + "px");
    $("#circle8").css("opacity", "." + humidity8);
    $("#circle8").css("animation-name", "windy");
    $("#circle8").css("animation-duration", windspeed8 + "s");
    $("#circle8").css("animation-iteration-count", "infinite");

    $("#circle9").css("height", humidity9 + "px");
    $("#circle9").css("width", humidity9 + "px");
    $("#circle9").css("opacity", "." + humidity9);
    $("#circle9").css("animation-name", "windy");
    $("#circle9").css("animation-duration", windspeed9 + "s");
    $("#circle9").css("animation-iteration-count", "infinite");

    $("#circle0").css("height", humidity0 + "px");
    $("#circle0").css("width", humidity0 + "px");
    $("#circle0").css("opacity", "." + humidity0);
    $("#circle0").css("animation-name", "windy");
    $("#circle0").css("animation-duration", windspeed0 + "s");
    $("#circle0").css("animation-iteration-count", "infinite");

    $(".toggle1").css("color", "black");
    $(".toggle1").css("font-weight", "300");
    $(".toggle2").css("color", "black");
    $(".toggle2").css("font-weight", "300");
    $(".toggle3").css("color", "dodgerblue");
    $(".toggle3").css("font-weight", "500");
});
