mapboxgl.accessToken = 'pk.eyJ1IjoibXlzaHVzcCIsImEiOiJja2lyZmtvNHgyNTZtMnFxanR1cmdxbGRlIn0.lhrPz4OIk0RNmJb2Q6S7Lg';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/myshusp/clqvajjpr00yp01o91lrz3zg0',
        center: [28.167, 47.01],
        zoom: 6.8,
        minZoom: 6,
        
    });


    // Add GeoJSON source and layer
    function addAdditionalSourceAndLayer() {

        map.addSource('lau', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/Sectorizare_raioane_VD.geojson'
        });
        map.addLayer(
            {
                'id': 'district-line-border',
                'source': 'lau',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 4,
                    'line-opacity': 1,
                    'line-color':'red'
                },
                'filter': ['==', 'UNITLVLID', 4]
            },
        );

        map.addSource('sectoare-supv', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/Sectoare_supv.geojson'
        });
        map.addLayer(
            {
                'id': 'sectoare-supv-polygons',
                'source': 'sectoare-supv',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': '#00ffff',
                    'fill-opacity': 0.6,
                    // 'fill-outline-color':'#ffffff'
                },
            },
            'district-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-supv-line-border',
                'source': 'sectoare-supv',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 2,
                    'line-opacity': 1,
                    'line-color':'blue'
                },
            },
            'district-line-border'
        );

        map.addSource('sectoare-enum', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/Sectoare_enum.geojson'
        });
        map.addLayer(
            {
                'id': 'sectoare-enum-polygons',
                'source': 'sectoare-enum',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': '#00ffff',
                    'fill-opacity': 0.6,
                    // 'fill-outline-color':'#ffffff'
                },
            },
            'sectoare-supv-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-enum-line-border',
                'source': 'sectoare-enum',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 1.5,
                    'line-opacity': 1,
                    'line-color':'black'
                },
            },
            'sectoare-supv-line-border'
        );
        

        map.addSource('sectoare', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/Sectoare.geojson'
        });

        map.addLayer(
            {
                'id': 'sectoare-polygons',
                'source': 'sectoare',
                'type': 'fill',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'fill-color': 'magenta',
                    'fill-opacity': 0.3,
                    // 'fill-outline-color':'white',
                    
                },
            },
            'sectoare-enum-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-line-border',
                'source': 'sectoare',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 0.5,
                    'line-opacity': 1,
                    'line-color':'white'
                },
            },
            'sectoare-enum-line-border'
        );
    }

    map.on('style.load', () => {
        addAdditionalSourceAndLayer();
    });

    // Add a scale control to the map
    map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');
    // Add a full screen control to the map
    map.addControl(new mapboxgl.FullscreenControl());
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

        //Add collapsible Caracteristici (map-overlay)
        $(function () {
            $(".button-open-map-overlay").hide();
            $(".button-close-map-overlay").bind("click", function () {
                $(".map-overlay").hide(100);        
    
                if ($(this).attr("class") == "button-close-map-overlay") {
                    $(".button-open-map-overlay").show();
                }
            });
            $(".button-open-map-overlay").bind("click", function () {
                $(".map-overlay").show(100);        
                if ($(this).attr("class") == "button-open-map-overlay")
                {
                    $(".button-open-map-overlay").hide();
                }
                });
        }); 