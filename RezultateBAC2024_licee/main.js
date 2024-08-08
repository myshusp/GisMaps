mapboxgl.accessToken = 'pk.eyJ1IjoibXlzaHVzcCIsImEiOiJja2lyZmtvNHgyNTZtMnFxanR1cmdxbGRlIn0.lhrPz4OIk0RNmJb2Q6S7Lg';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/myshusp/clqvad63b010f01nw7xro4yj2',
        center: [28.167, 47.01],
        zoom: 6.8,
        minZoom: 6,
        
    });


    // Add GeoJSON source and layer
    function addAdditionalSourceAndLayer() {

        map.addSource('institutii-invatamant', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/RezultateBAC2024_licee/geojson/Rezultate_BAC2024.geojson'
        });

        map.addLayer(
            {
                'id': 'institutii-invatamant-rezultate',
                'source': 'institutii-invatamant',
                'type': 'circle',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['number', ['get', 'candidati']],
                        0,
                        5,
                        25,
                        8,
                        50,
                        11,
                        75,
                        14,
                        100,
                        17
                        ],
                    'circle-color': [
                        'interpolate',
                        ['linear'],
                        ['number', ['get', 'medExam']],
                        6, //nerecenzate
                        '#FF1010',
                        7, //0 locuitori
                        '#FFD000',
                        8, //500
                        '#7FB71E',
                        9, //1000
                        '#009E3D',
                        10, //1500
                        'blue'
                    ],
                    'circle-stroke-color': '#ffffff',
                    'circle-stroke-width': 0.7, 
                    'circle-opacity': 0.8
                },
            },
        );
    }

    map.on('style.load', () => {
        addAdditionalSourceAndLayer();
    });  
    