if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true,
          }
        var iconBase = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dahlia-1508785047.jpg';
        var marker = new google.maps.Marker ({
            position: latlng,
            icon: iconBase,
            map: map
        });
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    });
} else {
    var para = document.createElement('p');
    para.textContent = 'Argh, no geoloation!';
    document.body.appendChild(para);
}