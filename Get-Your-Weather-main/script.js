var cityName = prompt("Enter The City's Name For Its Current Weather Forecast                         Input The Exact Name");

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appid=8e2b38afb412d30976574e6953a739f9",
function(data){

    $(".cityName").append(cityName);

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

$(".icon").attr("src",icon);

var temp = data.main.temp;
temp = Math.round(data.main.temp);
$(".temp").append(temp);


var weather = data.weather[0].main;
$(".weather").append(weather);


var description = data.weather[0].description;
$(".description").append(description);
});

const sr = ScrollReveal({
origin:"top",
distance:'70px',
duration:1200,
});

sr.reveal('.icon',{delay:300});

sr.reveal('.weather',{delay:600});

sr.reveal('.description',{delay:900});

sr.reveal('.temperature',{delay:1200});
