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
        newmarker = new google.maps.Marker({
            position: event.latLng,
            map: mappy
        });

         google.maps.event.addListener(newmarker, "click", function () {
            infowindow.open(mappy, newmarker);
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
       

function saveData() {
    let title = escape(document.getElementById('title').value);
    let address = escape(document.getElementById('address').value);
    let latlng = newmarker.getPosition();

    //let mapdata = [{ Title: title, Address: address, Lat: latlng.lat(), Long: latlng.lng() }];

    $.ajax({
        url: "/api/MapsDeux",
        data: JSON.stringify({
            // Those property names must match the property names of your PromotionDecision  view model
            Title: title,
            Address: address,
            Lat: latlng.lat(),
            Long: latlng.lng()
        }),
        contentType: "application/json",
        type: "POST",
        dataType: "json",
        success: (data) => {
            console.log('hello', data)
        }

    });

}







