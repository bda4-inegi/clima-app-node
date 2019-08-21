const axios = require("axios");

const getLugarLatLng = async (direccion2) => {
    const encodeURL = encodeURI( direccion2 );
    
    const instance = axios.create({
        baseURL: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location="+encodeURL
        , timeout: 10000
        , headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com"
            , "x-rapidapi-key": "ef69acb38amsh7576f38664463f4p1fa938jsnbe79e7eb25e7"
        }
    });
    
    const resp = await instance.get();
    
    if (resp.data.Results.length === 0) {
        return new Error("No ahi resultados para "+direccion2);
    }
    
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion
        , lat
        , lng
    };
}

module.exports = {
    getLugarLatLng
}