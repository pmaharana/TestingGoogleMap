let mappy;
let infowindow;
let messagewindow;
let newmarker;


function initMap() {
    var uluru = { lat: 27.761767, lng: -82.650683 };
    mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru 
    });

    infowindow = new google.maps.InfoWindow({
        content: document.getElementById('form')
    })

    messagewindow = new google.maps.InfoWindow({
        content: document.getElementById('message')
    });
    


    google.maps.event.addListener(mappy, 'click', function (event) {
        console.log('got here')
        marker = new google.maps.Marker({
            position: event.latLng,
            map: mappy
        });

         google.maps.event.addListener(marker, "click", function () {
            infowindow.open(mappy, marker);
        });
    });

    talkToServer();
}
   

let talkToServer = () => {

    $.ajax({
        url: '/api/MapsDeux',
        dataType: "json",
        success: (data) => { 

            //load marker data here 

            var markers = data.map((item) => {

                return new google.maps.Marker({
                    position: { lat: item.Lat, lng: item.Long },
                    label: item.Title,
                });
            });

            var markerCluster = new MarkerClusterer(mappy, markers,
                { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        },
        error: (data) => {
            console.log("oops", data)
        }
    });
}
       










