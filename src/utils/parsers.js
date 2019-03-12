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

    // const geoJson = {
    //     type: "FeatureCollection",
    //     features: [],
    // };

    // geoJson.features.push({
    //     "type": "Feature",
    //     "geometry": {
    //         "type": "LineString",
    //         "coordinates": []
    //     },
    //     "properties": {
    //         "avg_power": json.sessions[0].avg_power,
    //         "avg_speed": json.sessions[0].avg_speed,
    //         "intensity_factor": json.sessions[0].intensity_factor,
    //         "max_power": json.sessions[0].max_power,
    //         "max_speed": json.sessions[0].max_speed,
    //         "normalized_power": json.sessions[0].normalized_power,
    //         "sport": json.sessions[0].sport,
    //         "start_time": json.sessions[0].start_time,
    //         "total_ascent": json.sessions[0].total_ascent,
    //         "total_calories": json.sessions[0].total_calories,
    //         "total_descent": json.sessions[0].total_descent,
    //         "total_distance": json.sessions[0].total_distance,
    //         "total_elapsed_time": json.sessions[0].total_elapsed_time,
    //         "total_timer_time": json.sessions[0].total_timer_time,
    //         "training_stress_score": json.sessions[0].training_stress_score
    //     }
    // })
      
    // for (let i = 0; i < json.records.length; i++) {
    //     geoJson.features[0].geometry.coordinates.push(json.records[i].position_long, json.records[i].position_lat);
    // }
    // console.log('geojson: ', geoJson)
    // return geoJson;
}
