var pressure;
var humidity;
var windspeed;

//Mumbai
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1275339&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.mumbai').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }
});

$("#circle1").hover(function(){
    $("#circle1").css("height", humidity + "px");
    $("#circle1").css("width", humidity + "px");
});

//Moscow
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.moscow').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }
});

//New York
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128638&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.newyork').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }
});

//Tokyo
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.tokyo').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }     
});

//Seoul
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.seoul').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }     
});

//Beijing
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1816670&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.beijing').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }     
});

//Shanghai
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1796236&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.shanghai').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }     
});

//Paris
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2968815&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.paris').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }     
});

//London
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.london').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }     
});

//Rio
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3451190&units=metric&APPID=d1a9deb7b41e91e2912abb776c098133',
        dataType: 'jsonp',
        success: function(results){
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            windspeed = results.wind.speed;

            myWeatherInterpretation();

        }
    });

    function myWeatherInterpretation(){
        $('.rio').append('</br> ' + pressure + ', ' + humidity + ', ' + windspeed);
    }     
});

