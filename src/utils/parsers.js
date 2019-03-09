export const parseJson = json => {
    const geoJson = {
        type: "FeatureCollection",
        features: [],
    };
      
    for (let i = 0; i < json.records.length; i++) {
        geoJson.features.push({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [json.records[i].position_long, json.records[i].position_lat]
            },
            "properties": {
                "timestamp": json.records[i].timestamp,
                "elapsed_time": json.records[i].elapsed_time,
                "distance": json.records[i].distance,
                "accumulated_power": json.records[i].accumulated_power,
                "altitude": json.records[i].altitude,
                "speed": json.records[i].speed,
                "power": json.records[i].power,
                "cadence": json.records[i].cadence,
                "temperature": json.records[i].temperature
            }
        });
    }
    return geoJson;
}
