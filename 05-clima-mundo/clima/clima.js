const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=941e49884b735e7ffc0bc1ad9b687856&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}