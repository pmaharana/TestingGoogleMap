
function initMap() {
    var uluru = { lat: 27.761767, lng: -82.650683 };
    var mappy = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });

        //Create an array of labels
    var locations = [
        { point: { lat: 27.770068, lng: -82.63642 }, label:"The Iron Yard" },
        { point: { lat: 27.771906, lng: -82.636013 }, label:"Jannus Live" },
        { point: { lat: 27.772762, lng: -82.637793 }, label :"Williams Park"},
    ]

        var markers = locations.map(function (location) {
        return new google.maps.Marker({
            position: location.point,
            label: location.label,
            
        });
    });

       

        var markerCluster = new MarkerClusterer(mappy, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


//    var marker = new google.maps.Marker({
//        position: uluru,
//        map: mappy
//    });
//}

let talkToServer = () => {

    $.ajax({
        url: '/api/MapsDeux',
        dataType: "json",
        success: (data) => {
            console.log(data);
        },
        error: (data) => {
            console.log("oops", data)
        }
    });
}


//let loadMapData = () => {

//    $.ajax({
//        url: '/api/MapsDeux',
//        dataType: "json",
//        success: (data) => {
//            data
//        }
//    })
//}








//27.761767,-82.650683