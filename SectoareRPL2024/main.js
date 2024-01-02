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
                'id': 'lau-tara-polygon',
                'source': 'lau',
                'type': 'fill',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'fill-color': 'blue',
                    'fill-opacity': 0.6,
                    // 'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 1]
            },
        );
        map.addLayer(
            {
                'id': 'lau-tara-line-border',
                'source': 'lau',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 1,
                    'line-opacity': 1,
                    'line-color':'white'
                },
                'filter': ['==', 'UNITLVLID', 1]
            },
        );

        map.addSource('crs', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/CRS_Moldova.geojson'
        });
        map.addLayer(
            {
                'id': 'crs-polygon',
                'source': 'crs',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': 'blue',
                    'fill-opacity': 0.6,
                    // 'fill-outline-color':'#ffffff'
                },
            },
        );
        map.addLayer(
            {
                'id': 'crs-line-border',
                'source': 'crs',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1,
                    'line-opacity': 1,
                    'line-color':'white'
                },
            },
        );

        map.addLayer(
            {
                'id': 'district-polygon',
                'source': 'lau',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': 'blue',
                    'fill-opacity': 0.6,
                    // 'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 4]
            },
        );
        
        map.addLayer(
            {
                'id': 'district-line-border',
                'source': 'lau',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
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
                'id': 'sectoare-supv-polygon',
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
                    'visibility': 'none',
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
                'id': 'sectoare-enum-polygon',
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
                    'visibility': 'none',
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
                'id': 'sectoare-polygon',
                'source': 'sectoare',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
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
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 0.5,
                    'line-opacity': 1,
                    'line-color':'white'
                },
            },
            'sectoare-enum-line-border'
        );

        map.addSource('locality', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/Locality_RepublicOfMoldova_Point.geojson'
        });
        map.addLayer({
            'id': 'locality-population-labels',
            'source': 'locality',
            'minzoom': 9,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': ['get', 'NAME'],
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
            // 'filter': ['!=', 'STATID', 621] 
    });


        document
        .getElementById('layer')
        .addEventListener('change', (event) => {
            const changeLayerVisibility = event.target.value;
            // update the layer filter
            if (changeLayerVisibility === 'tara') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

            } else if (changeLayerVisibility === 'crs') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');


            } else if (changeLayerVisibility === 'raion') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'visible');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');


            } else if (changeLayerVisibility === 'supervizor') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'visible');


            } else if (changeLayerVisibility === 'recenzor') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'visible');


            } else if (changeLayerVisibility === 'sector') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'visible');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'visible');


            } else {
                console.error('error');
                }
            });
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