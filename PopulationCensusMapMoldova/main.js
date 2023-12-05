mapboxgl.accessToken = 'pk.eyJ1IjoibXlzaHVzcCIsImEiOiJja2lyZmtvNHgyNTZtMnFxanR1cmdxbGRlIn0.lhrPz4OIk0RNmJb2Q6S7Lg';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/myshusp/clomgkp5i009w01prgx844h9h',
        center: [28.167, 47.01],
        zoom: 6.8,
        minZoom: 6.8,
        // cooperativeGestures: true //Add cooperative gestures to a map
        
    });

    // Add GeoJSON source and layer
    function addAdditionalSourceAndLayer() {

        map.addSource('population', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/LAU_RepublicOfMoldova.geojson'
        });

        map.addLayer(
            {
                'id': 'nuts1-population',
                'source': 'population',
                'type': 'fill',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'GROUPID'],
                        14,
                        '#01069E'
                    ],
                    'fill-opacity': 0.6,
                    'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 1]
            },
        );

        map.addLayer(
            {
                'id': 'nuts1-population-selected',
                'source': 'population',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 0.6,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'UNITLVLID', 1], ['in', 'CODST', '']]
            },
        );

        map.addSource('population2', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/LAU_RepublicOfMoldova.geojson'
        });

        map.addLayer(
            {
                'id': 'nuts2-population',
                'source': 'population2',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'GROUPID'],
                        1,
                        '#808080',
                        14,
                        '#01069E'
                    ],
                    'fill-opacity': 0.6,
                    'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 2]
            },
        );
        map.addLayer(
            {
                'id': 'nuts2-population-selected',
                'source': 'population2',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 0.6,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'UNITLVLID', 2], ['in', 'CODST', '']]
            },
        );
        

        map.addSource('population3', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/LAU_RepublicOfMoldova.geojson'
        });

        map.addLayer(
            {
                'id': 'nuts3-population',
                'source': 'population3',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'GROUPID'],
                        1,
                        '#808080',
                        10,
                        '#922243',
                        11,
                        '#6D1B5A',
                        12,
                        '#491470',
                        13,
                        '#250D87'
                    ],
                    'fill-opacity': 0.6,
                    'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 3]
            },
        );

        map.addLayer(
            {
                'id': 'nuts3-population-selected',
                'source': 'population3',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 0.6,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'UNITLVLID', 3], ['in', 'CODST', '']]
            },
        );


        map.addSource('population4', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/LAU_RepublicOfMoldova.geojson'
        });

        map.addLayer(
            {
                'id': 'nuts3-population-line-border2',
                'source': 'population4',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1,
                    'line-opacity': 0.7,
                    'line-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 3]
            },
        ); 

        map.addLayer(
            {
                'id': 'district-population',
                'source': 'population4',
                'layout': {
                    'visibility': 'none',
                },
                'type': 'fill',
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'GROUPID'],
                        1,
                        '#808080',
                        7,
                        '#FF3700',
                        8,
                        '#DA3016',
                        9,
                        '#B6292D',
                        10,
                        '#922243',
                        11,
                        '#6D1B5A'
                    ],
                    'fill-opacity': 0.6,
                    'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 4]
            },
            'nuts3-population-line-border2'
        );       

        map.addLayer(
            {
                'id': 'district-population-selected',
                'source': 'population4',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 0.6,
                    'line-color':'white'
                },
                'filter': ['all', ['==', 'UNITLVLID', 4], ['in', 'CODST', '']]
            },
        );

        map.addSource('population5', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/LAU_RepublicOfMoldova.geojson'
        });

        map.addLayer(
            {
                'id': 'nuts3-population-line-border',
                'source': 'population5',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },              
                'paint': {
                    'line-width': 1,
                    'line-opacity': 0.7,
                    'line-color':'black'
                },
                'filter': ['==', 'UNITLVLID', 3]
            },
        ); 
        
        map.addLayer(
            {
                'id': 'district-population-line-border',
                'source': 'population5',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 0.5,
                    'line-opacity': 0.7,
                    'line-color':'black'
                },
                'filter': ['==', 'UNITLVLID', 4]
            },
        );

        map.addLayer(
            {
                'id': 'communes-population',
                'source': 'population5',
                'layout': {
                    'visibility': 'none',
                },
                'type': 'fill',
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'GROUPID'],
                        1,
                        '#808080',
                        2,
                        '#FCFCA7',
                        3,
                        '#FCD485',
                        4,
                        '#FDAD64',
                        5,
                        '#FD8542',
                        6,
                        '#FE5E21',
                        7,
                        '#FF3700',
                        9,
                        '#B6292D',
                        11,
                        '#6D1B5A',
                    ],
                    'fill-opacity': 0.6,
                    'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 5]
            },
            'nuts3-population-line-border',
            'district-population-line-border'
        );
        map.addLayer(
            {
                'id': 'communes-population2',
                'source': 'population5',
                'layout': {
                    'visibility': 'none',
                },
                'type': 'fill',
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'GROUPID'],
                        1,
                        '#808080',
                        2,
                        '#FCFCA7',
                        3,
                        '#FCD485',
                        4,
                        '#FDAD64',
                        5,
                        '#FD8542',
                        6,
                        '#FE5E21',
                        7,
                        '#FF3700',
                        9,
                        '#B6292D',
                        11,
                        '#6D1B5A',
                    ],
                    'fill-opacity': 0.6,
                    'fill-outline-color':'#ffffff'
                },
                'filter': ['==', 'UNITLVLID', 5]
            },
            'nuts3-population-line-border',
            'district-population-line-border'
        );   

        map.addLayer(
            {
                'id': 'communes-population-selected',
                'source': 'population5',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 0.6,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'UNITLVLID', 5], ['in', 'CODST', '']]
            },
        );

        map.addLayer({
                'id': 'communes-population-labels',
                'source': 'population5',
                'minzoom': 9,
                'type': 'symbol',
                'symbol-avoid-edges': true,
                'text-allow-overlap': true,
                'symbol-placement': 'point',
                'font-scale': 100,
                'layout': {
                    'visibility': 'none',
                    'text-field': ['get', 'GFNAME'],
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

        map.addSource('locality', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/Locality_RepublicOfMoldova_Point.geojson'
        });

        map.addLayer(
            {
                'id': 'locality-population',
                'source': 'locality',
                'type': 'circle',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['number', ['get', 'GROUPID']],
                        1,
                        3,
                        2,
                        3,
                        3,
                        5,
                        4,
                        6,
                        5,
                        7,
                        6,
                        8,
                        7,
                        9,
                        8,
                        10,
                        9,
                        11,
                        10,
                        12,
                        11,
                        13,
                        12,
                        14,
                        14,
                        18
                        ],
                    'circle-color': [
                        'interpolate',
                        ['linear'],
                        ['number', ['get', 'GROUPID']],
                        1, //nerecenzate
                        '#808080',
                        2, //0 locuitori
                        '#000000',
                        3, //500
                        '#FEFEE1',
                        4, //1000
                        '#FDFDC4',
                        5, //1500
                        '#FCFCA7',
                        6, //3000
                        '#FCD485',
                        7, //5000
                        '#FDAD64',
                        8, //10000
                        '#FD8542',
                        9, //20000
                        '#FE5E21',
                        10, //50000
                        '#FF3700',
                        11, //75000
                        '#DA3016',
                        12, //100000
                        '#B6292D',
                        14, //500000
                        '#6D1B5A'
                    ],
                    'circle-stroke-color': '#ffffff',
                    'circle-stroke-width': 0.7, 
                    'circle-opacity': 0.6
                },
                'filter': ['!=', 'STATID', 621] 
            },
        );
        
        map.addLayer(
            {
                'id': 'locality-population-selected',
                'source': 'locality',
                'type': 'circle',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['number', ['get', 'GROUPID']],
                        1,
                        3,
                        2,
                        3,
                        3,
                        5,
                        4,
                        6,
                        5,
                        7,
                        6,
                        8,
                        7,
                        9,
                        8,
                        10,
                        9,
                        11,
                        10,
                        12,
                        11,
                        13,
                        12,
                        14,
                        14,
                        18                
                        ],
                    'circle-stroke-color': '#ffffff',
                    'circle-stroke-width': 2,    
                    'circle-color': '#ffffff',
                    'circle-opacity': 0
                },
                'filter': ['all', ['!=', 'STATID', 621], ['in', 'CODST', '']]
            },
        );

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
                    'text-variable-anchor': ['bottom-left'],
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
                'filter': ['!=', 'STATID', 621] 
        });

        map.addSource('search', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/LayersData/Locality_RepublicOfMoldova_PointSearch.geojson'
        });

        map.addLayer({
            'id': 'search-locality',
            'source': 'search',
            'type': 'symbol',
        });

        //set legend priority
        const nuts1LegendEl = document.getElementById('nuts1-legend');
        const nuts2LegendEl = document.getElementById('nuts2-legend');
        const regionLegendEl = document.getElementById('region-legend');
        const stateLegendEl = document.getElementById('state-legend');
        const countyLegendEl = document.getElementById('county-legend');
        const localityLegendEl = document.getElementById('locality-legend');

        document
        .getElementById('layer')
        .addEventListener('change', (event) => {
            const changeLayerVisibility = event.target.value;
            // update the layer filter
            if (changeLayerVisibility === 'nuts1') {
                map.setLayoutProperty('nuts1-population', 'visibility', 'visible');
                map.setLayoutProperty('nuts1-population-selected', 'visibility', 'visible');

                map.setLayoutProperty('nuts2-population', 'visibility', 'none');
                map.setLayoutProperty('nuts2-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts3-population', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-selected', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border2', 'visibility', 'none');


                map.setLayoutProperty('district-population', 'visibility', 'none');
                map.setLayoutProperty('district-population-selected', 'visibility', 'none');
                map.setLayoutProperty('district-population-line-border', 'visibility', 'none');


                map.setLayoutProperty('communes-population', 'visibility', 'none');
                map.setLayoutProperty('communes-population2', 'visibility', 'none');
                map.setLayoutProperty('communes-population-selected', 'visibility', 'none');
                map.setLayoutProperty('communes-population-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population', 'visibility', 'none');
                map.setLayoutProperty('locality-population-selected', 'visibility', 'none');
                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                nuts1LegendEl.style.display = 'block';
                nuts2LegendEl.style.display = 'none';
                regionLegendEl.style.display = 'none';
                stateLegendEl.style.display = 'none';
                countyLegendEl.style.display = 'none';
                localityLegendEl.style.display = 'none';
            } else if (changeLayerVisibility === 'nuts2') {
                map.setLayoutProperty('nuts1-population', 'visibility', 'none');
                map.setLayoutProperty('nuts1-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts2-population', 'visibility', 'visible');
                map.setLayoutProperty('nuts2-population-selected', 'visibility', 'visible');

                map.setLayoutProperty('nuts3-population', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-selected', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border2', 'visibility', 'none');

                map.setLayoutProperty('district-population', 'visibility', 'none');
                map.setLayoutProperty('district-population-selected', 'visibility', 'none');
                map.setLayoutProperty('district-population-line-border', 'visibility', 'none');


                map.setLayoutProperty('communes-population', 'visibility', 'none');
                map.setLayoutProperty('communes-population2', 'visibility', 'none');
                map.setLayoutProperty('communes-population-selected', 'visibility', 'none');
                map.setLayoutProperty('communes-population-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population', 'visibility', 'none');
                map.setLayoutProperty('locality-population-selected', 'visibility', 'none');
                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                nuts1LegendEl.style.display = 'none';
                nuts2LegendEl.style.display = 'block';
                regionLegendEl.style.display = 'none';
                stateLegendEl.style.display = 'none';
                countyLegendEl.style.display = 'none';
                localityLegendEl.style.display = 'none'
            } else if (changeLayerVisibility === 'nuts3') {
                map.setLayoutProperty('nuts1-population', 'visibility', 'none');
                map.setLayoutProperty('nuts1-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts2-population', 'visibility', 'none');
                map.setLayoutProperty('nuts2-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts3-population', 'visibility', 'visible');
                map.setLayoutProperty('nuts3-population-selected', 'visibility', 'visible');
                map.setLayoutProperty('nuts3-population-line-border', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border2', 'visibility', 'none');

                map.setLayoutProperty('district-population', 'visibility', 'none');
                map.setLayoutProperty('district-population-selected', 'visibility', 'none');
                map.setLayoutProperty('district-population-line-border', 'visibility', 'none');

                map.setLayoutProperty('communes-population', 'visibility', 'none');
                map.setLayoutProperty('communes-population2', 'visibility', 'none');
                map.setLayoutProperty('communes-population-selected', 'visibility', 'none');
                map.setLayoutProperty('communes-population-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population', 'visibility', 'none');
                map.setLayoutProperty('locality-population-selected', 'visibility', 'none');
                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                nuts1LegendEl.style.display = 'none';
                nuts2LegendEl.style.display = 'none';
                regionLegendEl.style.display = 'block';
                stateLegendEl.style.display = 'none';
                countyLegendEl.style.display = 'none';
                localityLegendEl.style.display = 'none'

            } else if (changeLayerVisibility === 'raion') {
                map.setLayoutProperty('nuts1-population', 'visibility', 'none');
                map.setLayoutProperty('nuts1-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts2-population', 'visibility', 'none');
                map.setLayoutProperty('nuts2-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts3-population', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-selected', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border2', 'visibility', 'visible');

                map.setLayoutProperty('district-population', 'visibility', 'visible');
                map.setLayoutProperty('district-population-selected', 'visibility', 'visible');
                map.setLayoutProperty('district-population-line-border', 'visibility', 'none');

                map.setLayoutProperty('communes-population', 'visibility', 'none');
                map.setLayoutProperty('communes-population2', 'visibility', 'none');
                map.setLayoutProperty('communes-population-selected', 'visibility', 'none');
                map.setLayoutProperty('communes-population-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population', 'visibility', 'none');
                map.setLayoutProperty('locality-population-selected', 'visibility', 'none');
                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                nuts1LegendEl.style.display = 'none';
                nuts2LegendEl.style.display = 'none';
                regionLegendEl.style.display = 'none';
                stateLegendEl.style.display = 'block';
                countyLegendEl.style.display = 'none';
                localityLegendEl.style.display = 'none'

            } else if (changeLayerVisibility === 'comuna') {
                map.setLayoutProperty('nuts1-population', 'visibility', 'none');
                map.setLayoutProperty('nuts1-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts2-population', 'visibility', 'none');
                map.setLayoutProperty('nuts2-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts3-population', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-selected', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border', 'visibility', 'visible');
                map.setLayoutProperty('nuts3-population-line-border2', 'visibility', 'none');

                map.setLayoutProperty('district-population', 'visibility', 'none');
                map.setLayoutProperty('district-population-selected', 'visibility', 'none');
                map.setLayoutProperty('district-population-line-border', 'visibility', 'visible');

                map.setLayoutProperty('communes-population', 'visibility', 'visible');
                map.setLayoutProperty('communes-population2', 'visibility', 'none');
                map.setLayoutProperty('communes-population-selected', 'visibility', 'visible');
                map.setLayoutProperty('communes-population-labels', 'visibility', 'visible')

                map.setLayoutProperty('locality-population', 'visibility', 'none');
                map.setLayoutProperty('locality-population-selected', 'visibility', 'none');
                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                nuts1LegendEl.style.display = 'none';
                nuts2LegendEl.style.display = 'none';
                regionLegendEl.style.display = 'none';
                stateLegendEl.style.display = 'none';
                countyLegendEl.style.display = 'block';
                localityLegendEl.style.display = 'none'

            } else if (changeLayerVisibility === 'localitate') {
                map.setLayoutProperty('nuts1-population', 'visibility', 'none');
                map.setLayoutProperty('nuts1-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts2-population', 'visibility', 'none');
                map.setLayoutProperty('nuts2-population-selected', 'visibility', 'none');

                map.setLayoutProperty('nuts3-population', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-selected', 'visibility', 'none');
                map.setLayoutProperty('nuts3-population-line-border', 'visibility', 'visible');
                map.setLayoutProperty('nuts3-population-line-border2', 'visibility', 'none');

                map.setLayoutProperty('district-population', 'visibility', 'none');
                map.setLayoutProperty('district-population-selected', 'visibility', 'none');
                map.setLayoutProperty('district-population-line-border', 'visibility', 'visible');

                map.setLayoutProperty('communes-population', 'visibility', 'none');
                map.setLayoutProperty('communes-population2', 'visibility', 'visible');
                map.setLayoutProperty('communes-population-selected', 'visibility', 'none');
                map.setLayoutProperty('communes-population-labels', 'visibility', 'none')

                map.setLayoutProperty('locality-population', 'visibility', 'visible');
                map.setLayoutProperty('locality-population-selected', 'visibility', 'visible');
                map.setLayoutProperty('locality-population-labels', 'visibility', 'visible');

                nuts1LegendEl.style.display = 'none';
                nuts2LegendEl.style.display = 'none';
                regionLegendEl.style.display = 'none';
                stateLegendEl.style.display = 'none';
                countyLegendEl.style.display = 'none';
                localityLegendEl.style.display = 'block'

            } else {
            console.error('error');
            }
        });
        
    }

    map.on('style.load', () => {
        addAdditionalSourceAndLayer();
    });

     // change info window on mousemove
    map.on('click', (event) => {
        const states = map.queryRenderedFeatures(event.point, {
            layers: ['nuts1-population', 'nuts2-population', 'nuts3-population', 'district-population', 'communes-population', 'locality-population']
        });
        const fips = states.map(
            (feature) => feature.properties.CODST
        );
        map.setFilter('nuts1-population-selected', ['all', ['==', 'UNITLVLID', 1], ['in', 'CODST', ...fips]]);
        map.setFilter('nuts2-population-selected', ['all', ['==', 'UNITLVLID', 2], ['in', 'CODST', ...fips]]);
        map.setFilter('nuts3-population-selected', ['all', ['==', 'UNITLVLID', 3], ['in', 'CODST', ...fips]]);
        map.setFilter('district-population-selected', ['all', ['==', 'UNITLVLID', 4], ['in', 'CODST', ...fips]]);
        map.setFilter('communes-population-selected', ['all', ['==', 'UNITLVLID', 5], ['in', 'CODST', ...fips]]);
        map.setFilter('locality-population-selected', ['all', ['!=', 'STATID', 621], ['in', 'CODST', ...fips]]);

        document.getElementById('pd2').innerHTML = states.length
            ?`  <h2>Caracteristici (${states[0].properties.GFNAME})</h2>
            ` //.toLocaleString()
            : `<h2>Caracteristici </h2>`;

        document.getElementById('pd').innerHTML = states.length
            ?`  
                <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
            ` //.toLocaleString()
            : `<p>Alegeți o unitate administrativă...</p>`;

        var xValues = [
            "Persoane",
            "Gospodării",
            "Locuințe",
        ];
        var yValues = [
            `${states[0].properties.POPULATIE_2014}`, 
            `${states[0].properties.GOSPODARII_2014}`,
            `${states[0].properties.LOCUINTE_2014}`,
        ];
        var barColors = [
            "yellow",
            "orange",
            "green",
        ];
        var chart = new Chart("myChart",{
            type: "horizontalBar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                legend: {display: false},
                    title: {
                        display: false,
                        text: ""
                    },
            }
        })
    });

    map.on('mouseenter','nuts1-population', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'nuts1-population', () => {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter','nuts2-population', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'nuts2-population', () => {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter','nuts3-population', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'nuts3-population', () => {
        map.getCanvas().style.cursor = '';
    });
    map.on('mouseenter','district-population', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'district-population', () => {
        map.getCanvas().style.cursor = '';
    });
    
    map.on('mouseenter','communes-population', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'communes-population', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter','locality-population', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'locality-population', () => {
        map.getCanvas().style.cursor = '';
    });

    //create function for forwardGeocoder search query
    function forwardGeocoder(query) {
        const matchingFeatures = [];
        for (const feature of map.querySourceFeatures('search', {source: 'search-locality'})) {
            // Handle queries with different capitalization
            // than the source data by calling toLowerCase().
            if (
                feature.properties.CODUNIC
                    .toLowerCase()
                    .includes(query.toLowerCase())
            ) {
                // Add a emoji as a prefix for custom
                feature['place_name'] = `📌${feature.properties.CODUNIC} (${feature.properties.GFNAME})`;
                feature['center'] = feature.geometry.coordinates;
                matchingFeatures.push(feature);
            }
        }
        return matchingFeatures;
    }

    // Add the geocoder to the map.
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            countries: 'md', // Limit seach results to Moldova.
            language: 'ro-RO', // Specify the language as Romanian.
            localGeocoder: forwardGeocoder,
            zoom: 12,
            address: false,
            limit:1,
            placeholder: 'Caută localitate/CUATM...',
            mapboxgl: mapboxgl
        }), 'top-left', 
    );

    // Add a scale control to the map
    map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');
    // Add a full screen control to the map
    map.addControl(new mapboxgl.FullscreenControl());
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    // Add geolocate and rotation controls to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );

    // Add a styleSwitcherControler to the map
    class MapboxStyleSwitcherControl {
        constructor(styles, options) {
            this.styles = styles || MapboxStyleSwitcherControl.DEFAULT_STYLES;
            const defaultStyle = typeof (options) === "string" ? options : options ? options.defaultStyle : undefined;
            this.defaultStyle = defaultStyle || MapboxStyleSwitcherControl.DEFAULT_STYLE;
            this.onDocumentClick = this.onDocumentClick.bind(this);
            this.events = typeof (options) !== "string" && options ? options.eventListeners : undefined;
        }
        getDefaultPosition() {
            const defaultPosition = "top-right";
            return defaultPosition;
        }
        onAdd(map) {
            this.map = map;
            this.controlContainer = document.createElement("div");
            this.controlContainer.classList.add("mapboxgl-ctrl");
            this.controlContainer.classList.add("mapboxgl-ctrl-group");
            this.mapStyleContainer = document.createElement("div");
            this.styleButton = document.createElement("button");
            this.styleButton.type = "button";
            this.mapStyleContainer.classList.add("mapboxgl-style-list");
            for (const style of this.styles) {
                const styleElement = document.createElement("button");
                styleElement.type = "button";
                styleElement.innerText = style.title;
                styleElement.classList.add(style.title.replace(/[^a-z0-9-]/gi, '_'));
                styleElement.dataset.uri = JSON.stringify(style.uri);
                styleElement.addEventListener("click", event => {
                    const srcElement = event.srcElement;
                    this.closeModal();
                    if (srcElement.classList.contains("active")) {
                        return;
                    }
                    if (this.events && this.events.onOpen && this.events.onOpen(event)) {
                        return;
                    }
                    const style = JSON.parse(srcElement.dataset.uri);
                    this.map.setStyle(style);
                    const elms = this.mapStyleContainer.getElementsByClassName("active");
                    while (elms[0]) {
                        elms[0].classList.remove("active");
                    }
                    srcElement.classList.add("active");
                    if (this.events && this.events.onChange && this.events.onChange(event, style)) {
                        return;
                    }
                });
                if (style.title === this.defaultStyle) {
                    styleElement.classList.add("active");
                }
                this.mapStyleContainer.appendChild(styleElement);
            }
            this.styleButton.classList.add("mapboxgl-ctrl-icon");
            this.styleButton.classList.add("mapboxgl-style-switcher");
            this.styleButton.addEventListener("click", event => {
                if (this.events && this.events.onSelect && this.events.onSelect(event)) {
                    return;
                }
                this.openModal();
            });
            document.addEventListener("click", this.onDocumentClick);
            this.controlContainer.appendChild(this.styleButton);
            this.controlContainer.appendChild(this.mapStyleContainer);
            return this.controlContainer;
        }
        onRemove() {
            if (!this.controlContainer || !this.controlContainer.parentNode || !this.map || !this.styleButton) {
                return;
            }
            this.styleButton.removeEventListener("click", this.onDocumentClick);
            this.controlContainer.parentNode.removeChild(this.controlContainer);
            document.removeEventListener("click", this.onDocumentClick);
            this.map = undefined;
        }
        closeModal() {
            if (this.mapStyleContainer && this.styleButton) {
                this.mapStyleContainer.style.display = "none";
                this.styleButton.style.display = "block";
            }
        }
        openModal() {
            if (this.mapStyleContainer && this.styleButton) {
                this.mapStyleContainer.style.display = "block";
                this.styleButton.style.display = "none";
            }
        }
        onDocumentClick(event) {
            if (this.controlContainer && !this.controlContainer.contains(event.target)) {
                this.closeModal();
            }
        }
    }
    MapboxStyleSwitcherControl.DEFAULT_STYLE = "Dark";
    MapboxStyleSwitcherControl.DEFAULT_STYLES = [
        { title: "Dark", uri: "mapbox://styles/myshusp/clomgkp5i009w01prgx844h9h" },
        // { title: "Light", uri: "mapbox://styles/mapbox/light-v10" },
        { title: "Outdoors", uri: "mapbox://styles/myshusp/clp16ohrs019o01pm0jh2c81t" },
        { title: "Navigation", uri: "mapbox://styles/myshusp/clp16vgja002301qxdk3wfh2h" },
        { title: "Satellite", uri: "mapbox://styles/myshusp/cloymspqu014401prgji1cvb0" },
        // { title: "Streets", uri: "mapbox://styles/mapbox/streets-v11" }
    ];
    map.addControl(new MapboxStyleSwitcherControl());