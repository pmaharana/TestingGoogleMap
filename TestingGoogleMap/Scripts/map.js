(function (window, google) {

    //map options
    var options = {
        center: {
            lat: 27.761767,
            lng: -82.650683
        },
        zoom: 10
    },
        element = document.getElementById('map-canvas'),
        //maop
        map = new google.maps.Map(element, options);

}(window, google));



//27.761767,-82.650683