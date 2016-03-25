var pos = {};
var far ="";
var cel = "";

window.onload = function() {
  getPosition();
};

function getPosition(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, getWeather);
  } else{
     $(".location").html("Error");
  }
};

function success(position){
  getLocation(position);
  getWeather(position);
}


function getLocation(position){
  pos = position.coords;
};

function getCelsius(far){
   var out = Math.round((far-32)*(5/9));
  return out;
}

function getWeather(position){
  $.getJSON("http://forecast.weather.gov/MapClick.php?lat=" +pos.latitude +"&lon="+ pos.longitude + "&FcstType=json",
    function(json) {
      far = json.currentobservation.Temp+"°F";
      cel = getCelsius(json.currentobservation.Temp)+"°C";
      $(".location").html(json.location.areaDescription)
      $(".weather").html(far);
    });
  
  $(".weather").bind('click', function() {
    
    console.log(far);
    $(this).html($(this).html() == far ? cel : far );
  });
};
  

  