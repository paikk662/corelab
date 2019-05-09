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
        $("#circle1").css("height", humidity1 + "px");
        $("#circle1").css("width", humidity1 + "px");
        $("#circle1").css("opacity", "." + humidity1);

        $('.mumbai').append('</br> HUMIDITY: ' + humidity1 + '% </br> WINDSPEED: ' + windspeed1 + ' mps');
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
        $("#circle2").css("height", humidity2 + "px");
        $("#circle2").css("width", humidity2 + "px");
        $("#circle2").css("opacity", "." + humidity2);

        $('.moscow').append('</br> HUMIDITY: ' + humidity2 + '% </br> WINDSPEED: ' + windspeed2 + ' mps');
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
        $("#circle3").css("height", humidity3 + "px");
        $("#circle3").css("width", humidity3 + "px");
        $("#circle3").css("opacity", "." + humidity3);

        $('.newyork').append('</br> HUMIDITY: ' + humidity3 + '% </br> WINDSPEED: ' + windspeed3 + ' mps');
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
        $("#circle4").css("height", humidity4 + "px");
        $("#circle4").css("width", humidity4 + "px");
        $("#circle4").css("opacity", "." + humidity4);

        $('.tokyo').append('</br> HUMIDITY: ' + humidity4 + '% </br> WINDSPEED: ' + windspeed4 + ' mps');
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
        $("#circle5").css("height", humidity5 + "px");
        $("#circle5").css("width", humidity5 + "px");
        $("#circle5").css("opacity", "." + humidity5);

        $('.seoul').append('</br> HUMIDITY: ' + humidity5 + '% </br> WINDSPEED: ' + windspeed5 + ' mps');
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
        $("#circle6").css("height", humidity6 + "px");
        $("#circle6").css("width", humidity6 + "px");
        $("#circle6").css("opacity", "." + humidity6);

        $('.beijing').append('</br> HUMIDITY: ' + humidity6 + '% </br> WINDSPEED: ' + windspeed6 + ' mps');
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
        $("#circle7").css("height", humidity7 + "px");
        $("#circle7").css("width", humidity7 + "px");
        $("#circle7").css("opacity", "." + humidity7);

        $('.shanghai').append('</br> HUMIDITY: ' + humidity7 + '% </br> WINDSPEED: ' + windspeed7 + ' mps');
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
        $("#circle8").css("height", humidity8 + "px");
        $("#circle8").css("width", humidity8 + "px");
        $("#circle8").css("opacity", "." + humidity8);

        $('.paris').append('</br> HUMIDITY: ' + humidity8 + '% </br> WINDSPEED: ' + windspeed8 + ' mps');
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
        $("#circle9").css("height", humidity9 + "px");
        $("#circle9").css("width", humidity9 + "px");
        $("#circle9").css("opacity", "." + humidity9);

        $('.london').append('</br> HUMIDITY: ' + humidity9 + '% </br> WINDSPEED: ' + windspeed9 + ' mps');
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
        $("#circle0").css("height", humidity0 + "px");
        $("#circle0").css("width", humidity0 + "px");
        $("#circle0").css("opacity", "." + humidity0);

        $('.rio').append('</br> HUMIDITY: ' + humidity0 + '% </br> WINDSPEED: ' + windspeed0 + ' mps');
    }     
});

$(".city1").click(function(){
    $(".city1").toggleClass("heavy");
    $('#circle1').toggleClass('animate');
    $('#circle1').css("animation-duration", windspeed1 + "s");
});

$(".city2").click(function(){
    $(".city2").toggleClass("heavy");
    $('#circle2').toggleClass('animate');
    $('#circle2').css("animation-duration", windspeed2 + "s");
});

$(".city3").click(function(){
    $(".city3").toggleClass("heavy");
    $('#circle3').toggleClass('animate');
    $("#circle3").css("animation-duration", windspeed3 + "s");
});

$(".city4").click(function(){
    $(".city4").toggleClass("heavy");
    $('#circle4').toggleClass('animate');
    $("#circle4").css("animation-duration", windspeed4 + "s");
});

$(".city5").click(function(){
    $(".city5").toggleClass("heavy");
    $('#circle5').toggleClass('animate');
    $("#circle5").css("animation-duration", windspeed5 + "s");
});

$(".city6").click(function(){
    $(".city6").toggleClass("heavy");
    $('#circle6').toggleClass('animate');
    $("#circle6").css("animation-duration", windspeed6 + "s");
});

$(".city7").click(function(){
    $(".city7").toggleClass("heavy");
    $('#circle7').toggleClass('animate');
    $("#circle7").css("animation-duration", windspeed7 + "s");
});

$(".city8").click(function(){
    $(".city8").toggleClass("heavy");
    $('#circle8').toggleClass('animate');
    $("#circle8").css("animation-duration", windspeed8 + "s");
});

$(".city9").click(function(){
    $(".city9").toggleClass("heavy");
    $('#circle9').toggleClass('animate');
    $("#circle9").css("animation-duration", windspeed9 + "s");
});

$(".city10").click(function(){
    $(".city10").toggleClass("heavy");
    $('#circle0').toggleClass('animate');
    $("#circle0").css("animation-duration", windspeed0 + "s");
});