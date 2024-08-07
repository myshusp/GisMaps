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

        map.addSource('lvl1', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/lvl_1.geojson'
        });

        map.addLayer(
            {
                'id': 'lau-tara-polygon',
                'source': 'lvl1',
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
                'source': 'lvl1',
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
                'source': 'lvl1',
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

        map.addSource('lvl2', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/lvl_2.geojson'
        });

        map.addLayer(
            {
                'id': 'crs-polygon',
                'source': 'lvl2',
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
                'source': 'lvl2',
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
                'source': 'lvl2',
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

        map.addSource('lvl3', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/lvl_3.geojson'
        });
        map.addLayer(
            {
                'id': 'district-polygon',
                'source': 'lvl3',
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
                'source': 'lvl3',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 2, //1
                    'line-opacity': 1,
                    'line-color':'#0ffff7'
                },
                'filter': ['==', 'id_lvl', 3]
            },
            'crs-line-border'
        );
        map.addLayer(
            {
                'id': 'district-line-border-selected',
                'source': 'lvl3',
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

        map.addSource('lvl4', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/lvl_4.geojson'
        });
        map.addLayer(
            {
                'id': 'sectoare-supv-polygon',
                'source': 'lvl4',
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
                'source': 'lvl4',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1.5, //0.5
                    'line-opacity': 1,
                    'line-color':'yellow'
                },
                'filter': ['==', 'id_lvl', 4]
            },
            'district-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-supv-line-border-selected',
                'source': 'lvl4',
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
            'source': 'lvl4',
            'minzoom': 9,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': [
                    'format',
                    ['get', 'name_obj'],
                    { 'font-scale': 1 },
                    '\n',
                    '(',
                    {},
                    ['get', 'noenum'],
                    { 'font-scale': 0.8 },
                    ')'
                    ],
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

        map.addSource('lvl5', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/lvl_5.geojson'
        });
        map.addLayer(
            {
                'id': 'commune-polygon',
                'source': 'lvl5',
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
                'source': 'lvl5',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1.2,
                    'line-opacity': 1,
                    'line-color':'#F37748'
                },
                'filter': ['==', 'id_lvl', 5]
            },
            'sectoare-supv-line-border'
        );
        map.addLayer(
            {
                'id': 'commune-line-border-selected',
                'source': 'lvl5',
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
            'source': 'lvl5',
            'minzoom': 9,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': [
                    'format',
                    ['get', 'name_obj'],
                    { 'font-scale': 1 },
                    '\n',
                    '(',
                    {},
                    ['get', 'noenum'],
                    { 'font-scale': 0.8 },
                    ')'
                    ],
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

        map.addSource('sectAdmChis', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/SectAdmChisinau.geojson'
        });

        map.addLayer(
            {
                'id': 'sectAdmChis-line-border',
                'source': 'sectAdmChis',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 1.1,
                    'line-opacity': 1,
                    'line-color':'orange'
                },
            },
            'commune-line-border'
        );

        map.addSource('lvl6', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/lvl_6.geojson'
        });
        map.addLayer(
            {
                'id': 'sectoare-enum-polygon',
                'source': 'lvl6',
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
            'sectAdmChis-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-enum-line-border',
                'source': 'lvl6',
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
            'sectAdmChis-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-enum-line-border-selected',
                'source': 'lvl6',
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
            'source': 'lvl6',
            'minzoom': 10,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'font-scale': 100,
            'layout': {
                'visibility': 'none',
                'text-field': [
                    'format',
                    ['get', 'name_obj'],
                    { 'font-scale': 1 },
                    '\n',
                    '(',
                    {},
                    ['get', 'nodwell'],
                    { 'font-scale': 0.8 },
                    ')'
                    ],
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

        map.addSource('lvl7', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/lvl_7.geojson'
        });
        map.addLayer(
            {
                'id': 'sectoare-polygon',
                'source': 'lvl7',
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
                'source': 'lvl7',
                'type': 'line',
                'layout': {
                    'visibility': 'none',
                },
                'paint': {
                    'line-width': 0.9,
                    'line-opacity': 1,
                    'line-color':'#9D9D9D'
                },
                'filter': ['==', 'id_lvl', 7]
            },
            'sectoare-enum-line-border'
        );
        map.addLayer(
            {
                'id': 'sectoare-line-border-selected',
                'source': 'lvl7',
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
            'source': 'lvl7',
            'minzoom': 11,
            'type': 'symbol',
            'symbol-avoid-edges': true,
            'text-allow-overlap': true,
            'symbol-placement': 'point',
            'layout': {
                'visibility': 'none',
                'text-field': [
                    'format',
                    'Supervizor: ',
                    {},
                    ['get', 'code_supv'],
                    {'font-scale': 1, 'text-color': 'white'},
                    '\n',
                    'Recenzor: ',
                    {},
                    ['get', 'code_enum'],
                    {'font-scale': 1, 'text-color': 'white'},
                    '\n',
                    'Comună: ',
                    {},
                    ['get', 'namecom'],
                    {'font-scale': 1, 'text-color': 'white'},
                    '\n',
                    'Sector: ',
                    {},
                    ['get', 'name_obj'],
                    {'font-scale': 1, 'text-color': 'white'},
                    '\n',
                    'Locuințe: ',
                    {},
                    ['get', 'nodwell'],
                    {'font-scale': 1, 'text-color': 'white'},
                    ],
                'text-variable-anchor': ['center'],
                'text-radial-offset': 1.5,
                'text-justify': 'left',
                'text-size': 10,
                'text-padding': 2,
                'text-font': ['Open Sans Regular'],
            },
            'paint': {
                'text-color': 'black',
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

        map.addSource('search', {
            'type': 'geojson',
            'data': 'https://myshusp.github.io/GisMaps/SectoareRPL2024/geojson/SectorizareRPL2024_centroids_v2.geojson'
        });

        map.addLayer({
            'id': 'search-layer',
            'source': 'search',
            'type': 'symbol',
        });


        //set legend priority
        const contGov = document.getElementById('control-guvernamental');
        const terContrLegend = document.getElementById('teritoriu-controlat-legend');
        const terNecontrLegend = document.getElementById('teritoriu-necontrolat-legend');
        const sectorLegend = document.getElementById('sector-legend');
        const recenzorLegend = document.getElementById('recenzor-legend');
        const communeLegend = document.getElementById('commune-legend');
        const sectAdmChisLegend = document.getElementById('sectAdmChis-legend');
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

                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');

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
                sectAdmChisLegend.style.display = 'none';
                communeLegend.style.display = 'none';
                supervizorLegend .style.display = 'none';
                districtLegend.style.display = 'none';
                crsLegend.style.display = 'none';
                taraLegend.style.display = 'block';

                document.getElementById("checkbox-sector").checked = 'checked';
                document.getElementById("checkbox-recenzor").checked = 'checked';
                document.getElementById("checkbox-sectAdmChis").checked = '';
                document.getElementById("checkbox-commune").checked = 'checked';
                document.getElementById("checkbox-supervizor").checked = 'checked';
                document.getElementById("checkbox-district").checked = 'checked';
                document.getElementById("checkbox-crs").checked = 'checked';
                document.getElementById("checkbox-tara").checked = 'checked';

                
                document.getElementById("checkbox-sector").value = 'true';
                document.getElementById("checkbox-recenzor").value = 'true';
                document.getElementById("checkbox-sectAdmChis").value = 'false';
                document.getElementById("checkbox-commune").value = 'true';
                document.getElementById("checkbox-supervizor").value = 'true';
                document.getElementById("checkbox-district").value = 'true';
                document.getElementById("checkbox-crs").value = 'true';
                document.getElementById("checkbox-tara").value = 'true';
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

                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');

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
                sectAdmChisLegend.style.display = 'none';
                communeLegend.style.display = 'none';
                supervizorLegend .style.display = 'none';
                districtLegend.style.display = 'none';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';

                document.getElementById("checkbox-sector").checked = 'checked';
                document.getElementById("checkbox-recenzor").checked = 'checked';
                document.getElementById("checkbox-sectAdmChis").checked = '';
                document.getElementById("checkbox-commune").checked = 'checked';
                document.getElementById("checkbox-supervizor").checked = 'checked';
                document.getElementById("checkbox-district").checked = 'checked';
                document.getElementById("checkbox-crs").checked = 'checked';
                document.getElementById("checkbox-tara").checked = 'checked';

                document.getElementById("checkbox-sector").value = 'true';
                document.getElementById("checkbox-recenzor").value = 'true';
                document.getElementById("checkbox-sectAdmChis").value = 'false';
                document.getElementById("checkbox-commune").value = 'true';
                document.getElementById("checkbox-supervizor").value = 'true';
                document.getElementById("checkbox-district").value = 'true';
                document.getElementById("checkbox-crs").value = 'true';
                document.getElementById("checkbox-tara").value = 'true';
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

                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');

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
                sectAdmChisLegend.style.display = 'none';
                communeLegend.style.display = 'none';
                supervizorLegend .style.display = 'none';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';

                document.getElementById("checkbox-sector").checked = 'checked';
                document.getElementById("checkbox-recenzor").checked = 'checked';
                document.getElementById("checkbox-sectAdmChis").checked = '';
                document.getElementById("checkbox-commune").checked = 'checked';
                document.getElementById("checkbox-supervizor").checked = 'checked';
                document.getElementById("checkbox-district").checked = 'checked';
                document.getElementById("checkbox-crs").checked = 'checked';
                document.getElementById("checkbox-tara").checked = 'checked';

                document.getElementById("checkbox-sector").value = 'true';
                document.getElementById("checkbox-recenzor").value = 'true';
                document.getElementById("checkbox-sectAdmChis").value = 'false';
                document.getElementById("checkbox-commune").value = 'true';
                document.getElementById("checkbox-supervizor").value = 'true';
                document.getElementById("checkbox-district").value = 'true';
                document.getElementById("checkbox-crs").value = 'true';
                document.getElementById("checkbox-tara").value = 'true';
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

                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');

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
                sectorLegend .style.display = 'block';
                recenzorLegend .style.display = 'block';
                sectAdmChisLegend.style.display = 'none';
                communeLegend.style.display = 'block';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';

                document.getElementById("checkbox-sector").checked = '';
                document.getElementById("checkbox-recenzor").checked = '';
                document.getElementById("checkbox-sectAdmChis").checked = '';
                document.getElementById("checkbox-commune").checked = '';
                document.getElementById("checkbox-supervizor").checked = 'checked';
                document.getElementById("checkbox-district").checked = 'checked';
                document.getElementById("checkbox-crs").checked = 'checked';
                document.getElementById("checkbox-tara").checked = 'checked';

                document.getElementById("checkbox-sector").value = 'false';
                document.getElementById("checkbox-recenzor").value = 'false';
                document.getElementById("checkbox-sectAdmChis").value = 'false';
                document.getElementById("checkbox-commune").value = 'false';
                document.getElementById("checkbox-supervizor").value = 'true';
                document.getElementById("checkbox-district").value = 'true';
                document.getElementById("checkbox-crs").value = 'true';
                document.getElementById("checkbox-tara").value = 'true';
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
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'visible');
                map.setLayoutProperty('commune-line-border', 'visibility', 'visible');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'visible');
                map.setLayoutProperty('commune-labels', 'visibility', 'visible');

                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');

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
                sectorLegend .style.display = 'block';
                recenzorLegend .style.display = 'block';
                sectAdmChisLegend.style.display = 'none';
                communeLegend.style.display = 'block';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';

                document.getElementById("checkbox-sector").checked = '';
                document.getElementById("checkbox-recenzor").checked = '';
                document.getElementById("checkbox-sectAdmChis").checked = '';
                document.getElementById("checkbox-commune").checked = 'checked';
                document.getElementById("checkbox-supervizor").checked = '';
                document.getElementById("checkbox-district").checked = 'checked';
                document.getElementById("checkbox-crs").checked = 'checked';
                document.getElementById("checkbox-tara").checked = 'checked';

                document.getElementById("checkbox-sector").value = 'false';
                document.getElementById("checkbox-recenzor").value = 'false';
                document.getElementById("checkbox-sectAdmChis").value = 'false';
                document.getElementById("checkbox-commune").value = 'true';
                document.getElementById("checkbox-supervizor").value = 'false';
                document.getElementById("checkbox-district").value = 'true';
                document.getElementById("checkbox-crs").value = 'true';
                document.getElementById("checkbox-tara").value = 'true';
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
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');

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
                sectorLegend .style.display = 'block';
                recenzorLegend .style.display = 'block';
                sectAdmChisLegend.style.display = 'block';
                communeLegend.style.display = 'block';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';

                document.getElementById("checkbox-sector").checked = '';
                document.getElementById("checkbox-recenzor").checked = 'checked';
                document.getElementById("checkbox-sectAdmChis").checked = '';
                document.getElementById("checkbox-commune").checked = '';
                document.getElementById("checkbox-supervizor").checked = '';
                document.getElementById("checkbox-district").checked = 'checked';
                document.getElementById("checkbox-crs").checked = 'checked';
                document.getElementById("checkbox-tara").checked = 'checked';

                document.getElementById("checkbox-sector").value = 'false';
                document.getElementById("checkbox-recenzor").value = 'true';
                document.getElementById("checkbox-sectAdmChis").value = 'false';
                document.getElementById("checkbox-commune").value = 'false';
                document.getElementById("checkbox-supervizor").value = 'false';
                document.getElementById("checkbox-district").value = 'true';
                document.getElementById("checkbox-crs").value = 'true';
                document.getElementById("checkbox-tara").value = 'true';
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
                map.setLayoutProperty('sectoare-supv-line-border', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('sectoare-supv-labels', 'visibility', 'none');

                map.setLayoutProperty('commune-polygon', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border', 'visibility', 'none');
                map.setLayoutProperty('commune-line-border-selected', 'visibility', 'none');
                map.setLayoutProperty('commune-labels', 'visibility', 'none');

                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');

                map.setLayoutProperty('sectoare-enum-polygon', 'visibility', 'none');
                map.setLayoutProperty('sectoare-enum-line-border', 'visibility', 'none');
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
                sectAdmChisLegend.style.display = 'block';
                communeLegend.style.display = 'block';
                supervizorLegend .style.display = 'block';
                districtLegend.style.display = 'block';
                crsLegend.style.display = 'block';
                taraLegend.style.display = 'block';

                document.getElementById("checkbox-sector").checked = 'checked';
                document.getElementById("checkbox-recenzor").checked = '';
                document.getElementById("checkbox-sectAdmChis").checked = '';
                document.getElementById("checkbox-commune").checked = '';
                document.getElementById("checkbox-commune").checked = '';
                document.getElementById("checkbox-supervizor").checked = '';
                document.getElementById("checkbox-district").checked = 'checked';
                document.getElementById("checkbox-crs").checked = 'checked';
                document.getElementById("checkbox-tara").checked = 'checked';

                document.getElementById("checkbox-sector").value = 'true';
                document.getElementById("checkbox-recenzor").value = 'false';
                document.getElementById("checkbox-sectAdmChis").value = 'false';
                document.getElementById("checkbox-commune").value = 'false';
                document.getElementById("checkbox-supervizor").value = 'false';
                document.getElementById("checkbox-district").value = 'true';
                document.getElementById("checkbox-crs").value = 'true';
                document.getElementById("checkbox-tara").value = 'true';
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
                <h3>Comună: <strong><em><span style="color:red"> ${states[0].properties.namecom} </span></strong></em></h3>
                <h3>Sectoare: <strong><em><span style="color:red"> ${states[0].properties.noea.toLocaleString()} </span></strong></em></h3>
                <h3>Locuințe: <strong><em><span style="color:red"> ${states[0].properties.nodwell.toLocaleString()} </span></strong></em></h3>`
             : `<p>Alegeți o unitate statistică...</p>`;
            } else if (`${states[0].properties.id_lvl}`== 7){
                document.getElementById('pd').innerHTML = states.length
                ? `<h3>Supervizor: <strong><em><span style="color:red"> ${states[0].properties.code_supv} </span></strong></em></h3>
                <h3>Recenzor: <strong><em><span style="color:red"> ${states[0].properties.code_enum} </span></strong></em></h3>
                <h3>Comună: <strong><em><span style="color:red"> ${states[0].properties.namecom} </span></strong></em></h3>
                <h3>Sector: <strong><em><span style="color:red"> ${states[0].properties.name_obj} </span></strong></em></h3>
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
        document
        .getElementById('checkbox-sectAdmChis')
        .addEventListener('change', (event) => {
            const changeLayerVisibilityBox = event.target.value;
            if (changeLayerVisibilityBox === 'true') {
                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'none');
                document.getElementById("checkbox-sectAdmChis").value = false;
            } else if (changeLayerVisibilityBox === 'false'){
                map.setLayoutProperty('sectAdmChis-line-border', 'visibility', 'visible');
                document.getElementById("checkbox-sectAdmChis").value = true;
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

     //create function for forwardGeocoder search query
     function forwardGeocoder(query) {
        const matchingFeatures = [];
        for (const feature of map.querySourceFeatures('search', {source: 'search-layer'})) {
            // Handle queries with different capitalization
            // than the source data by calling toLowerCase().
            if (
                feature.properties.name_obj
                    .toLowerCase()
                    .includes(query.toLowerCase())
            ) {
                // Add a emoji as a prefix for custom
                feature['place_name'] = `📌${feature.properties.name_obj}`;
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
            limit:10,
            placeholder: 'Caută denumire...',
            mapboxgl: mapboxgl,
            collapsed: true
        }), 'top-right',
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

                        document.getElementById("layer").value = 'tara';

                        document.getElementById('control-guvernamental').style.display = 'none';
                        document.getElementById('teritoriu-controlat-legend').style.display = 'none';
                        document.getElementById('teritoriu-necontrolat-legend').style.display = 'none';
                        document.getElementById('sector-legend').style.display = 'none';
                        document.getElementById('recenzor-legend').style.display = 'none';
                        document.getElementById('sectAdmChis-legend').style.display = 'none';
                        document.getElementById('commune-legend').style.display = 'none';
                        document.getElementById('supervizor-legend').style.display = 'none';
                        document.getElementById('district-legend').style.display = 'none';
                        document.getElementById('crs-legend').style.display = 'none';
                        document.getElementById('tara-legend').style.display = 'block';

                        document.getElementById("checkbox-sector").checked = 'checked';
                        document.getElementById("checkbox-recenzor").checked = 'checked';
                        document.getElementById("checkbox-sectAdmChis").checked = 'checked';
                        document.getElementById("checkbox-commune").checked = 'checked';
                        document.getElementById("checkbox-supervizor").checked = 'checked';
                        document.getElementById("checkbox-district").checked = 'checked';
                        document.getElementById("checkbox-crs").checked = 'checked';
                        document.getElementById("checkbox-tara").checked = 'checked';
        
                        
                        document.getElementById("checkbox-sector").value = 'true';
                        document.getElementById("checkbox-recenzor").value = 'true';
                        document.getElementById("checkbox-sectAdmChis").value = 'true';
                        document.getElementById("checkbox-commune").value = 'true';
                        document.getElementById("checkbox-supervizor").value = 'true';
                        document.getElementById("checkbox-district").value = 'true';
                        document.getElementById("checkbox-crs").value = 'true';
                        document.getElementById("checkbox-tara").value = 'true';

                        var states = map.queryRenderedFeatures(event.point, {
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

                        document.getElementById('pd').innerHTML = states.length
                        ?`  
                            <div id="pd"><p>Alegeți o unitate statistică...</p></div>
                        `
                        :  `<p>Alegeți o unitate statistică...</p>`;
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
        { title: "Hybrid", uri: "mapbox://styles/myshusp/cloymspqu014401prgji1cvb0" },
    ];
    map.addControl(new MapboxStyleSwitcherControl());