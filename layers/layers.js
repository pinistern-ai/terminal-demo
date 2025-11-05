var wms_layers = [];


        var lyr_WAZE_0 = new ol.layer.Tile({
            'title': 'WAZE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://il-livemap-tiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'מסוף תחבורה',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> מסוף תחבורה'
            });

lyr_WAZE_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_WAZE_0,lyr_OSMStandard_1,lyr__2];
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'fclID': 'fclID', 'fclName': 'NAME', 'City': 'City', 'Address': 'כתובת', 'TerminalTy': 'TerminalTy', 'TERTYPE': 'TERTYPE', 'YEARMONTH': 'YEARMONTH', });
lyr__2.set('fieldImages', {'OBJECTID': 'Hidden', 'ID': 'TextEdit', 'fclID': 'Hidden', 'fclName': 'TextEdit', 'City': 'TextEdit', 'Address': 'TextEdit', 'TerminalTy': 'TextEdit', 'TERTYPE': 'TextEdit', 'YEARMONTH': 'Hidden', });
lyr__2.set('fieldLabels', {'ID': 'inline label - always visible', 'fclName': 'inline label - always visible', 'City': 'inline label - always visible', 'Address': 'inline label - always visible', 'TerminalTy': 'inline label - always visible', 'TERTYPE': 'inline label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});