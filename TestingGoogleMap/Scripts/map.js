
function initMap() {
    var uluru = { lat: 27.761767, lng: -82.650683 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}



//27.761767,-82.650683