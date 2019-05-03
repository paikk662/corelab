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
        $('.mumbai').append('</br> ' + humidity1 + ', ' + windspeed1);
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
        $('.moscow').append('</br> ' + humidity2 + ', ' + windspeed2);
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
        $('.newyork').append('</br> ' + humidity3 + ', ' + windspeed3);
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
        $('.tokyo').append('</br> ' + humidity4 + ', ' + windspeed4);
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
        $('.seoul').append('</br> ' + humidity5 + ', ' + windspeed5);
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
        $('.beijing').append('</br> ' + humidity6 + ', ' + windspeed6);
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
        $('.shanghai').append('</br> ' + humidity7 + ', ' + windspeed7);
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
        $('.paris').append('</br> ' + humidity8 + ', ' + windspeed8);
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
        $('.london').append('</br> ' + humidity9 + ', ' + windspeed9);
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
        $('.rio').append('</br> ' + humidity0 + ', ' + windspeed0);
    }     
});

$(".toggle2").click(function(){
    $("#circle1").css("height", humidity1 + "px");
    $("#circle1").css("width", humidity1 + "px");
    $("#circle1").css("opacity", "." + humidity1);
    $("#circle1").css("animation-name", "x");
    $("#circle2").css("height", humidity2 + "px");
    $("#circle2").css("width", humidity2 + "px");
    $("#circle2").css("opacity", "." + humidity2);
    $("#circle2").css("animation-name", "x");
    $("#circle3").css("height", humidity3 + "px");
    $("#circle3").css("width", humidity3 + "px");
    $("#circle3").css("opacity", "." + humidity3);
    $("#circle3").css("animation-name", "x");
    $("#circle4").css("height", humidity4 + "px");
    $("#circle4").css("width", humidity4 + "px");
    $("#circle4").css("opacity", "." + humidity4);
    $("#circle4").css("animation-name", "x");
    $("#circle5").css("height", humidity5 + "px");
    $("#circle5").css("width", humidity5 + "px");
    $("#circle5").css("opacity", "." + humidity5);
    $("#circle5").css("animation-name", "x");
    $("#circle6").css("height", humidity6 + "px");
    $("#circle6").css("width", humidity6 + "px");
    $("#circle6").css("opacity", "." + humidity6);
    $("#circle6").css("animation-name", "x");
    $("#circle7").css("height", humidity7 + "px");
    $("#circle7").css("width", humidity7 + "px");
    $("#circle7").css("opacity", "." + humidity7);
    $("#circle7").css("animation-name", "x");
    $("#circle8").css("height", humidity8 + "px");
    $("#circle8").css("width", humidity8 + "px");
    $("#circle8").css("opacity", "." + humidity8);
    $("#circle8").css("animation-name", "x");
    $("#circle9").css("height", humidity9 + "px");
    $("#circle9").css("width", humidity9 + "px");
    $("#circle9").css("opacity", "." + humidity9);
    $("#circle9").css("animation-name", "x");
    $("#circle0").css("height", humidity0 + "px");
    $("#circle0").css("width", humidity0 + "px");
    $("#circle0").css("opacity", "." + humidity0);
    $("#circle0").css("animation-name", "x");
    $(".toggle1").css("border-color", "black");
    $(".toggle1").css("color", "black");
    $(".toggle1").css("background-color", "white");
    $(".toggle2").css("border-color", "darkslategrey");
    $(".toggle2").css("color", "white");
    $(".toggle2").css("background-color", "darkslategrey");
    $(".toggle3").css("border-color", "black");
    $(".toggle3").css("color", "black");
    $(".toggle3").css("background-color", "white");
});

$(".toggle3").click(function(){

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

    $(".toggle1").css("border-color", "black");
    $(".toggle1").css("color", "black");
    $(".toggle1").css("background-color", "white");
    $(".toggle2").css("border-color", "black");
    $(".toggle2").css("color", "black");
    $(".toggle2").css("background-color", "white");
    $(".toggle3").css("border-color", "darkslategrey");
    $(".toggle3").css("color", "white");
    $(".toggle3").css("background-color", "darkslategrey");
});

