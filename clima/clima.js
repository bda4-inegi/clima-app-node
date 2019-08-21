const axios = require("axios");

const getClima = async (lat, lon) => {
    const resp = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=d9d100f0807d4bdd071ab4aafc08b39b&units=metric");

    return resp.data.main.temp;
}

module.exports = {
    getClima
};