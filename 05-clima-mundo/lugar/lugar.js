const axios = require('axios');

//esta funcion a fuerza regresa una promesa
const getLugarLatLng = async(dir) => {
    const encoderUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: { 'x-rapidapi-key': 'a1c85406d2msh61975d4ca52750bp1518fejsncec4a7f1f69a' }
    });

    const resp = await instance.get();
    //console.log(resp.data.Results.length);
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}

// para usar axios como una promesa
/* instance.get()
.then(resp => {
    console.log(resp.data.Results[0]);
})
.catch(err => {
    console.error('ERROR!!!', err);
}) */