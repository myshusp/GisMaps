mapboxgl.accessToken = 'pk.eyJ1IjoibXlzaHVzcCIsImEiOiJja2lyZmtvNHgyNTZtMnFxanR1cmdxbGRlIn0.lhrPz4OIk0RNmJb2Q6S7Lg';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/myshusp/clomgkp5i009w01prgx844h9h',
        center: [28.167, 47.01],
        zoom: 6.8,
        minZoom: 6,
        
    });

    // Add layer source
    map.on('load', () => {
        // make a pointer cursor
        map.getCanvas().style.cursor = 'default';
        // define layers sources and names
        map.addSource('lau', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectorizareRPL2024/geojson/Sectorizare_raioane_VD.geojson'
        });
        //Add layer
        map.addLayer(
            {
                'id': 'lau2_sectoare',
                'source': 'lau',
                'type': 'fill',
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'VD_crs'],
                        0,
                        'grey',
                        1,
                        'red',
                        2,
                        'yellow',
                        3,
                        'blue',
                        4,
                        'green'
                    ],
                    'fill-opacity': 0.6,
                    'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 5]
            },
        );

        map.addLayer(
            {
                'id': 'lau1-line-border',
                'source': 'lau',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 1,
                    'line-opacity': 1,
                    'line-color':'black'
                },
                'filter': ['==', 'UNITLVLID', 4]
            },
        );

        map.addLayer({
                'id': 'communes-labels',
                'source': 'lau',
                'minzoom': 9,
                'type': 'symbol',
                'symbol-avoid-edges': true,
                'text-allow-overlap': true,
                'symbol-placement': 'point',
                'font-scale': 100,
                'layout': {
                    'visibility': 'visible',
                    'text-field': ['get', 'labels'],
                    'text-variable-anchor': ['center'],
                    'text-radial-offset': 1.5,
                    'text-justify': 'center',
                    'text-size': 12,
                    'text-padding': 2,
                    'text-font': ['Open Sans Regular'],
                    // 'text-offset': [0.85, -1.7],
                },
                'paint': {
                "text-color": "white",
                },
                'filter': ['==', 'UNITLVLID', 5]
        });

    });

    // Add a scale control to the map
    map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');
    // Add a full screen control to the map
    map.addControl(new mapboxgl.FullscreenControl());
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());