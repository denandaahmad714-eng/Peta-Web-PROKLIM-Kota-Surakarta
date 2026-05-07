var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_PROKLIM2024_2 = new ol.format.GeoJSON();
var features_PROKLIM2024_2 = format_PROKLIM2024_2.readFeatures(json_PROKLIM2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROKLIM2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROKLIM2024_2.addFeatures(features_PROKLIM2024_2);
var lyr_PROKLIM2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROKLIM2024_2, 
                style: style_PROKLIM2024_2,
                popuplayertitle: 'PROKLIM 2024',
                interactive: true,
                title: '<img src="styles/legend/PROKLIM2024_2.png" /> PROKLIM 2024'
            });
var format_PROKLIM2025_3 = new ol.format.GeoJSON();
var features_PROKLIM2025_3 = format_PROKLIM2025_3.readFeatures(json_PROKLIM2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROKLIM2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROKLIM2025_3.addFeatures(features_PROKLIM2025_3);
var lyr_PROKLIM2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROKLIM2025_3, 
                style: style_PROKLIM2025_3,
                popuplayertitle: 'PROKLIM 2025',
                interactive: true,
                title: '<img src="styles/legend/PROKLIM2025_3.png" /> PROKLIM 2025'
            });
var format_PROKLIM2026_4 = new ol.format.GeoJSON();
var features_PROKLIM2026_4 = format_PROKLIM2026_4.readFeatures(json_PROKLIM2026_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROKLIM2026_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROKLIM2026_4.addFeatures(features_PROKLIM2026_4);
var lyr_PROKLIM2026_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROKLIM2026_4, 
                style: style_PROKLIM2026_4,
                popuplayertitle: 'PROKLIM 2026',
                interactive: true,
                title: '<img src="styles/legend/PROKLIM2026_4.png" /> PROKLIM 2026'
            });

lyr_ESRI_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_PROKLIM2024_2.setVisible(true);lyr_PROKLIM2025_3.setVisible(true);lyr_PROKLIM2026_4.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_Batas_Administrasi_1,lyr_PROKLIM2024_2,lyr_PROKLIM2025_3,lyr_PROKLIM2026_4];
lyr_Batas_Administrasi_1.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', 'luas': 'luas', 'X': 'X', 'Y': 'Y', 'Presen_Pri': 'Presen_Pri', 'Presen_Pub': 'Presen_Pub', 'Sesuai_Pri': 'Sesuai_Pri', 'Sesuai_Pub': 'Sesuai_Pub', });
lyr_PROKLIM2024_2.set('fieldAliases', {'Name': 'Name', 'Tahun': 'Tahun', 'Kecamatam': 'Kecamatam', 'Foto': 'Foto', });
lyr_PROKLIM2025_3.set('fieldAliases', {'Name': 'Name', 'Tahun': 'Tahun', 'Kecamatan': 'Kecamatan', 'Foto': 'Foto', });
lyr_PROKLIM2026_4.set('fieldAliases', {'Name': 'Name', 'Tahun': 'Tahun', 'Kecamatan': 'Kecamatan', 'Foto': 'Foto', });
lyr_Batas_Administrasi_1.set('fieldImages', {'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'luas': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Presen_Pri': 'TextEdit', 'Presen_Pub': 'TextEdit', 'Sesuai_Pri': 'TextEdit', 'Sesuai_Pub': 'TextEdit', });
lyr_PROKLIM2024_2.set('fieldImages', {'Name': 'TextEdit', 'Tahun': 'TextEdit', 'Kecamatam': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_PROKLIM2025_3.set('fieldImages', {'Name': 'TextEdit', 'Tahun': 'TextEdit', 'Kecamatan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_PROKLIM2026_4.set('fieldImages', {'Name': 'TextEdit', 'Tahun': 'TextEdit', 'Kecamatan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'KECAMATAN': 'inline label - visible with data', 'KELURAHAN': 'inline label - visible with data', 'RW': 'hidden field', 'RT': 'hidden field', 'luas': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Presen_Pri': 'hidden field', 'Presen_Pub': 'hidden field', 'Sesuai_Pri': 'hidden field', 'Sesuai_Pub': 'hidden field', });
lyr_PROKLIM2024_2.set('fieldLabels', {'Name': 'header label - visible with data', 'Tahun': 'inline label - visible with data', 'Kecamatam': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_PROKLIM2025_3.set('fieldLabels', {'Name': 'header label - visible with data', 'Tahun': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_PROKLIM2026_4.set('fieldLabels', {'Name': 'header label - visible with data', 'Tahun': 'inline label - visible with data', 'Kecamatan': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_PROKLIM2026_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});