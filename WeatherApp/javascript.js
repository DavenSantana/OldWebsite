$(document).ready(function () {
    
    // Get Location 
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }

    // Call Weather
    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    // Update Dom
    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.main.temp);
        temp = Math.round(CtoF(temp));
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;
        var humidity = data.main.humidity;
        var high = Math.round(CtoF(data.main.temp_max));
        var low = Math.round(CtoF(data.main.temp_min));
        var wind = data.wind.speed;

        $('#city').html(city);
        $('#temp').html(temp);
        $('#desc').html(desc);
        $('#icon').attr('src', icon);
        $("#humidity").append(" " + humidity);
        $("#high").append(" " + high);
        $("#low").append(" " + low);
        $("#wind").append(" " + wind);
    }
});

function CtoF(temp){
    return (temp * 9/5) + 32;
}