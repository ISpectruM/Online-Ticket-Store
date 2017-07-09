let latitude = 42.697708;
let longitude = 24.621868;
let map = new google.maps.Map(document.getElementById("map"), {
    center: {
        lat: latitude,
        lng: longitude
    },
    zoom: 7
});

// markers of the upcoming events (this is the example)
for (let i = 0; i < 10; i++) {
    let marker = new google.maps.Marker({
        position: {
            lat: latitude,
            lng: longitude
        },
        map:map,
    });

    latitude += 0.1;
    longitude += 0.4;
}


$('#map').width(1000).height(600);
