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

        map.addSource('sectorizare', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/SectorizareRPL2024.geojson'
        });

        map.addLayer(
            {
                'id': 'lau-tara-polygon',
                'source': 'sectorizare',
                'type': 'fill',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'fill-color': '#c7675d',
                    'fill-opacity': 0.5,
                },
                'filter': ['==', 'id_lvl', 1]
            },
        );
        map.addLayer(
            {
                'id': 'lau-tara-line-border',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 2.5, //1
                    'line-opacity': 1,
                    'line-color':'black'
                },
                'filter': ['==', 'id_lvl', 1]
            },
        );
        map.addLayer(
            {
                'id': 'lau-tara-line-border-selected',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'visible',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 1,
                    'line-color':'white'
                },
                'filter': ['all', ['==', 'id_lvl', 1], ['in', 'obj_code', '']]
            },
        );

        map.addLayer(
            {
                'id': 'crs-polygon',
                'source': 'sectorizare',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'gov_cont'],
                        0,
                        '#D5D5D5',
                        1,
                        '#c7675d',
                    ],
                    'fill-opacity': 0.5,
                },
                'filter': ['==', 'id_lvl', 2]
            },
            'lau-tara-line-border'
        );
        map.addLayer(
            {
                'id': 'crs-line-border',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 2.2, //1
                    'line-opacity': 1,
                    'line-color':'red'
                },
                'filter': ['==', 'id_lvl', 2]
            },
            'lau-tara-line-border'
        );
        map.addLayer(
            {
                'id': 'crs-line-border-selected',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 1,
                    'line-color':'white'
                },
                'filter': ['all', ['==', 'id_lvl', 2], ['in', 'obj_code', '']]
            },
        );

        map.addLayer(
            {
                'id': 'district-polygon',
                'source': 'sectorizare',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'gov_cont'],
                        0,
                        '#D5D5D5',
                        1,
                        '#c7675d',
                    ],
                    'fill-opacity': 0.5,
                },
                'filter': ['==', 'id_lvl', 3]
            },
            'crs-line-border'
        );
        map.addLayer(
            {
                'id': 'district-line-border',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 2, //1
                    'line-opacity': 1,
                    'line-color':'yellow'
                },
                'filter': ['==', 'id_lvl', 3]
            },
            'crs-line-border'
        );
        map.addLayer(
            {
                'id': 'district-line-border-selected',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 1,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'id_lvl', 3], ['in', 'obj_code', '']]
            },
        );

        map.addLayer(
            {
                'id': 'sectoare-supv-polygon',
                'source': 'sectorizare',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'gov_cont'],
                        0,
                        '#D5D5D5',
                        1,
                        '#c7675d',
                    ],
                    'fill-opacity': 0.5,
                },
                'filter': ['==', 'id_lvl', 4]
            },
            'district-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-supv-line-border',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1.5, //0.5
                    'line-opacity': 1,
                    'line-color':'orange'
                },
                'filter': ['==', 'id_lvl', 4]
            },
            'district-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-supv-line-border-selected',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 1,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'id_lvl', 4], ['in', 'obj_code', '']]
            },
        );
        map.addLayer({
            'id': 'sectoare-supv-labels',
            'source': 'sectorizare',
            'minzoom': 9,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': ['get', 'name_obj'],
                'text-variable-anchor': ['center'],
                'text-radial-offset': 1.5,
                'text-justify': 'center',
                'text-size': 12,
                'text-padding': 2,
                'text-font': ['Open Sans Regular'],
            },
            'paint': {
            "text-color": "white",
            },
            'filter': ['==', 'id_lvl', 4]
        });

        map.addLayer(
            {
                'id': 'commune-polygon',
                'source': 'sectorizare',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'gov_cont'],
                        0,
                        '#D5D5D5',
                        1,
                        '#c7675d',
                    ],
                    'fill-opacity': 0.5,
                },
                'filter': ['==', 'id_lvl', 5]
            },
            'sectoare-supv-line-border'
        );
        map.addLayer(
            {
                'id': 'commune-line-border',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1.2,
                    'line-opacity': 1,
                    'line-color':'blue'
                },
                'filter': ['==', 'id_lvl', 5]
            },
            'sectoare-supv-line-border'
        );
        map.addLayer(
            {
                'id': 'commune-line-border-selected',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 1,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'id_lvl', 5], ['in', 'obj_code', '']]
            },
        );
        map.addLayer({
            'id': 'commune-labels',
            'source': 'sectorizare',
            'minzoom': 10,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': ['get', 'name_obj'],
                'text-variable-anchor': ['center'],
                'text-radial-offset': 1.5,
                'text-justify': 'center',
                'text-size': 12,
                'text-padding': 2,
                'text-font': ['Open Sans Regular'],
            },
            'paint': {
            "text-color": "white",
            },
            'filter': ['==', 'id_lvl', 5]
        });


        map.addLayer(
            {
                'id': 'sectoare-enum-polygon',
                'source': 'sectorizare',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'gov_cont'],
                        0,
                        '#D5D5D5',
                        1,
                        '#c7675d',
                    ],
                    'fill-opacity': 0.5,
                },
                'filter': ['==', 'id_lvl', 6]
            },
            'commune-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-enum-line-border',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1, //0.5
                    'line-opacity': 1,
                    'line-color':'black'
                },
                'filter': ['==', 'id_lvl', 6]
            },
            'commune-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-enum-line-border-selected',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 1,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'id_lvl', 6], ['in', 'obj_code', '']]
            },
        );
        map.addLayer({
            'id': 'sectoare-enum-labels',
            'source': 'sectorizare',
            'minzoom': 10,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': ['get', 'name_obj'],
                'text-variable-anchor': ['center'],
                'text-radial-offset': 1.5,
                'text-justify': 'center',
                'text-size': 12,
                'text-padding': 2,
                'text-font': ['Open Sans Regular'],
            },
            'paint': {
            "text-color": "white",
            },
            'filter': ['==', 'id_lvl', 6]
        });

        map.addLayer(
            {
                'id': 'sectoare-polygon',
                'source': 'sectorizare',
                'type': 'fill',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'fill-color': [
                        'interpolate',
                        ['linear'],
                        ['get', 'gov_cont'],
                        0,
                        '#D5D5D5',
                        1,
                        '#c7675d',
                    ],
                    'fill-opacity': 0.5,
                },
                'filter': ['==', 'id_lvl', 7]
            },
            'sectoare-enum-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-line-border',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 0.5,
                    'line-opacity': 1,
                    'line-color':'white'
                },
                'filter': ['==', 'id_lvl', 7]
            },
            'sectoare-enum-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-line-border-selected',
                'source': 'sectorizare',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 3,
                    'line-opacity': 1,
                    'line-color':'#ffffff'
                },
                'filter': ['all', ['==', 'id_lvl', 7], ['in', 'obj_code', '']]
            },
        );

        map.addLayer({
            'id': 'sectoare-labels',
            'source': 'sectorizare',
            'minzoom': 11,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': ['get', 'name_obj'],
                'text-variable-anchor': ['center'],
                'text-radial-offset': 1.5,
                'text-justify': 'center',
                'text-size': 12,
                'text-padding': 2,
                'text-font': ['Open Sans Regular'],
            },
            'paint': {
            "text-color": "white",
            },
            'filter': ['==', 'id_lvl', 7]
        });

        map.addSource('locality', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/Locality_RepublicOfMoldova_Point.geojson'
        });
        map.addLayer({
            'id': 'locality-population-labels',
            'source': 'locality',
            'minzoom': 11,
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
            },
            'paint': {
            "text-color": "white",
            },
        });


        //set legend priority
        const contGov = document.getElementById('control-guvernamental');
        const terContrLegend = document.getElementById('teritoriu-controlat-legend');
        const terNecontrLegend = document.getElementById('teritoriu-necontrolat-legend');
        const sectorLegend = document.getElementById('sector-legend');
        const recenzorLegend = document.getElementById('recenzor-legend');
        const communeLegend = document.getElementById('commune-legend');
        const supervizorLegend = document.getElementById('supervizor-legend');
        const districtLegend = document.getElementById('district-legend');
        const crsLegend = document.getElementById('crs-legend');
        const taraLegend = document.getElementById('tara-legend');

        document
        .getElementById('layer')
        .addEventListener('change', (event) => {
            const changeLayerVisibility = event.target.value;
            // update the layer filter
            if (changeLayerVisibility === 'tara') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border-selected', 'visibility', 'visible');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'none');
                map.setLayoutProperty('district-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                contGov.style.display = 'none';
                terContrLegend.style.display = 'none';
                terNecontrLegend.style.display = 'none';
                sectorLegend .style.display = 'none';
                recenzorLegend .style.display = 'none';
                communeLegend.style.display = 'none';
                supervizorLegend .style.display = 'none';
                districtLegend.style.display = 'none';
                crsLegend.style.display = 'none';
                taraLegend.style.display = 'block';
            } else if (changeLayerVisibility === 'crs') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border-selected', 'visibility', 'visible');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'none');
                map.setLayoutProperty('district-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');


                contGov.style.display = 'block';
                terContrLegend.style.display = 'block';
                terNecontrLegend.style.display = 'block';
                sectorLegend .style.display = 'none';
                recenzorLegend .style.display = 'none';
                communeLegend.style.display = 'none';
                supervizorLegend .style.display = 'none';
                districtLegend.style.display = 'none';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';
            } else if (changeLayerVisibility === 'raion') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'visible');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');
                map.setLayoutProperty('district-line-border-selected', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                contGov.style.display = 'block';
                terContrLegend.style.display = 'block';
                terNecontrLegend.style.display = 'block';
                sectorLegend .style.display = 'none';
                recenzorLegend .style.display = 'none';
                communeLegend.style.display = 'none';
                supervizorLegend .style.display = 'none';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';
            } else if (changeLayerVisibility === 'supervizor') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');
                map.setLayoutProperty('district-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'visible');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'visible');

                contGov.style.display = 'block';
                terContrLegend.style.display = 'block';
                terNecontrLegend.style.display = 'block';
                sectorLegend .style.display = 'none';
                recenzorLegend .style.display = 'none';
                communeLegend.style.display = 'none';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';
            } else if (changeLayerVisibility === 'comuna') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');
                map.setLayoutProperty('district-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'visible');
                map.setLayoutProperty('commune-line-border', 'visibility', 'visible');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'visible');
                map.setLayoutProperty('commune-labels', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'none');

                contGov.style.display = 'block';
                terContrLegend.style.display = 'block';
                terNecontrLegend.style.display = 'block';
                sectorLegend .style.display = 'none';
                recenzorLegend .style.display = 'none';
                communeLegend.style.display = 'block';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';
            } else if (changeLayerVisibility === 'recenzor') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');
                map.setLayoutProperty('district-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'visible');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-enum-line-border-selected', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-enum-labels', 'visibility', 'visible');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-labels', 'visibility', 'none');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'visible');

                contGov.style.display = 'block';
                terContrLegend.style.display = 'block';
                terNecontrLegend.style.display = 'block';
                sectorLegend .style.display = 'none';
                recenzorLegend .style.display = 'block';
                communeLegend.style.display = 'block';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';
            } else if (changeLayerVisibility === 'sector') {
                map.setLayoutProperty('lau-tara-polygon', 'visibility', 'none');
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                map.setLayoutProperty('lau-tara-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('crs-polygon', 'visibility', 'none');
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');
                map.setLayoutProperty('crs-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('district-polygon', 'visibility', 'none');
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');
                map.setLayoutProperty('district-line-border-selected', 'visibility', 'none');

                map.setLayoutProperty('sectoare-supv-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'visible');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-enum-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-labels', 'visibility', 'none');

                map.setLayoutProperty('sectoare-polygon', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-line-border-selected', 'visibility', 'visible');
                map.setLayoutProperty('sectoare-labels', 'visibility', 'visible');

                map.setLayoutProperty('locality-population-labels', 'visibility', 'visible');

                contGov.style.display = 'block';
                terContrLegend.style.display = 'block';
                terNecontrLegend.style.display = 'block';
                sectorLegend .style.display = 'block';
                recenzorLegend .style.display = 'block';
                communeLegend.style.display = 'block';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';
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
    MapboxStyleSwitcherControl.DEFAULT_STYLE = "Întunecat";
    MapboxStyleSwitcherControl.DEFAULT_STYLES = [
        { title: "Întunecat", uri: "mapbox://styles/myshusp/clqvad63b010f01nw7xro4yj2" },
        { title: "Navigare", uri: "mapbox://styles/myshusp/clp16ohrs019o01pm0jh2c81t" },
        { title: "Satelit", uri: "mapbox://styles/myshusp/clqvajjpr00yp01o91lrz3zg0" },
    ];
    map.addControl(new MapboxStyleSwitcherControl());

    // change info window on mousemove
    map.on('click', (event) => {
        const states = map.queryRenderedFeatures(event.point, {
            layers: [
                'lau-tara-polygon',
                'crs-polygon',
                'district-polygon',
                'sectoare-supv-polygon',
                'commune-polygon',
                'sectoare-enum-polygon',
                'sectoare-polygon'
            ]
        });
        const fips = states.map(
            (feature) => feature.properties.obj_code
        );
        map.setFilter('lau-tara-line-border-selected', ['all', ['==', 'id_lvl', 1], ['in', 'obj_code', ...fips]]);
        map.setFilter('crs-line-border-selected', ['all', ['==', 'id_lvl', 2], ['in', 'obj_code', ...fips]]);
        map.setFilter('district-line-border-selected', ['all', ['==', 'id_lvl', 3], ['in', 'obj_code', ...fips]]);
        map.setFilter('sectoare-supv-line-border-selected',  ['all', ['==', 'id_lvl', 4], ['in', 'obj_code', ...fips]]);
        map.setFilter('commune-line-border-selected',  ['all', ['==', 'id_lvl', 5], ['in', 'obj_code', ...fips]]);
        map.setFilter('sectoare-enum-line-border-selected',  ['all', ['==', 'id_lvl', 6], ['in', 'obj_code', ...fips]]);
        map.setFilter('sectoare-line-border-selected',  ['all', ['==', 'id_lvl', 7], ['in', 'obj_code', ...fips]]);

        document.getElementById('pd').innerHTML = states.length
        ?`  
            <div id="pd"><p>Alegeți o unitate statistică...</p></div>
        `
        :  `<p>Alegeți o unitate statistică...</p>`;

        if(`${states[0].properties.gov_cont}`== 1) {
            if(`${states[0].properties.id_lvl}`== 1 || `${states[0].properties.id_lvl}`== 2 || `${states[0].properties.id_lvl}`== 3  ) {
                document.getElementById('pd').innerHTML = states.length
                ? `<h3>Denumire: <strong><em><span style="color:red"> ${states[0].properties.name_obj} </span></strong></em></h3>
                <h3>Supervizori: <strong><em><span style="color:red"> ${states[0].properties.nosupv.toLocaleString()} </span></strong></em></h3>
                <h3>Recenzori: <strong><em><span style="color:red"> ${states[0].properties.noenum.toLocaleString()} </span></strong></em></h3>
                <h3>Sectoare: <strong><em><span style="color:red"> ${states[0].properties.noea.toLocaleString()} </span></strong></em></h3>
                <h3>Locuințe: <strong><em><span style="color:red"> ${states[0].properties.nodwell.toLocaleString()} </span></strong></em></h3>`
                : `<p>Alegeți o unitate statistică...</p>`;
            } else if (`${states[0].properties.id_lvl}`== 4){
                document.getElementById('pd').innerHTML = states.length
                ? `<h3>Denumire: <strong><em><span style="color:red"> ${states[0].properties.name_obj} </span></strong></em></h3>
                <h3>Recenzori: <strong><em><span style="color:red"> ${states[0].properties.noenum.toLocaleString()} </span></strong></em></h3>
                <h3>Sectoare: <strong><em><span style="color:red"> ${states[0].properties.noea.toLocaleString()} </span></strong></em></h3>
                <h3>Locuințe: <strong><em><span style="color:red"> ${states[0].properties.nodwell.toLocaleString()} </span></strong></em></h3>`
                : `<p>Alegeți o unitate statistică...</p>`;
            } else if (`${states[0].properties.id_lvl}`== 5){
                document.getElementById('pd').innerHTML = states.length
                ? `<h3>Denumire: <strong><em><span style="color:red"> ${states[0].properties.name_obj} </span></strong></em></h3>
                <h3>Recenzori: <strong><em><span style="color:red"> ${states[0].properties.noenum.toLocaleString()} </span></strong></em></h3>
                <h3>Sectoare: <strong><em><span style="color:red"> ${states[0].properties.noea.toLocaleString()} </span></strong></em></h3>
                <h3>Locuințe: <strong><em><span style="color:red"> ${states[0].properties.nodwell.toLocaleString()} </span></strong></em></h3>`
             : `<p>Alegeți o unitate statistică...</p>`;
            } else if (`${states[0].properties.id_lvl}`== 6){
                document.getElementById('pd').innerHTML = states.length
                ? `<h3>Denumire: <strong><em><span style="color:red"> ${states[0].properties.name_obj} </span></strong></em></h3>
                <h3>Sectoare: <strong><em><span style="color:red"> ${states[0].properties.noea.toLocaleString()} </span></strong></em></h3>
                <h3>Locuințe: <strong><em><span style="color:red"> ${states[0].properties.nodwell.toLocaleString()} </span></strong></em></h3>`
             : `<p>Alegeți o unitate statistică...</p>`;
            } else if (`${states[0].properties.id_lvl}`== 7){
                document.getElementById('pd').innerHTML = states.length
                ? `<h3>Denumire: <strong><em><span style="color:red"> ${states[0].properties.name_obj} </span></strong></em></h3>
                <h3>Locuințe: <strong><em><span style="color:red"> ${states[0].properties.nodwell.toLocaleString()} </span></strong></em></h3>`
             : `<p>Alegeți o unitate statistică...</p>`;
            } else {
                document.getElementById('pd').innerHTML = states.length
                ?`  
                   <p>Lipsă date...</p>
                `
                : `<p>Alegeți o unitate statistică...</p>`;
            }
        } else {
            document.getElementById('pd').innerHTML = states.length
            ?`  
                <h3>Denumire: <strong><em><span style="color:red"> ${states[0].properties.name_obj} </span></strong></em></h3>
                <p><strong><em><span style="color:red"> !!! Teritoriu fără control guvernamental </span></strong></em></p>
            `
            : `<p>Alegeți o unitate statistică...</p>`;


        }
    });

    map.on('mouseenter','lau-tara-polygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'lau-tara-polygon', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter','crs-polygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'crs-polygon', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter','district-polygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'district-polygon', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter','sectoare-supv-polygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'sectoare-supv-polygon', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter','commune-polygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'commune-polygon', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter','sectoare-enum-polygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'sectoare-enum-polygon', () => {
        map.getCanvas().style.cursor = '';
    });

    map.on('mouseenter','sectoare-polygon', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'sectoare-polygon', () => {
        map.getCanvas().style.cursor = '';
    });
    
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
        
            //Add collapsible legend   
    $(function () {
        $(".button-open-legend").hide();
        $(".button-close-legend").bind("click", function () {
            $(".content").hide(100);        

            if ($(this).attr("class") == "button-close-legend") {
                $(".button-open-legend").show();
            }
        });
        $(".button-open-legend").bind("click", function () {
            $(".content").show(100);        
            if ($(this).attr("class") == "button-open-legend") {
                $(".button-open-legend").hide();
            }
        });
    });

    document
        .getElementById('checkbox-tara')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'none');
                document.getElementById("checkbox-tara").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('lau-tara-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-tara").value = true;
            }
        });
        document
        .getElementById('checkbox-crs')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('crs-line-border', 'visibility', 'none');
                document.getElementById("checkbox-crs").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('crs-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-crs").value = true;
            }
        });
        document
        .getElementById('checkbox-district')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('district-line-border', 'visibility', 'none');
                document.getElementById("checkbox-district").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('district-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-district").value = true;
            }
        });
        document
        .getElementById('checkbox-supervizor')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');
                document.getElementById("checkbox-supervizor").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-supervizor").value = true;
            }
        });
        document
        .getElementById('checkbox-commune')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('commune-line-border', 'visibility', 'none');
                document.getElementById("checkbox-commune").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('commune-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-commune").value = true;
            }
        });
        document
        .getElementById('checkbox-recenzor')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');
                document.getElementById("checkbox-recenzor").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-recenzor").value = true;
            }
        });
        document
        .getElementById('checkbox-sector')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'none');
                document.getElementById("checkbox-sector").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('sectoare-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-sector").value = true;
            }
        });