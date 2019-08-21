const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

// lugar.getLugarLatLng( argv.direccion )
//     .then(resp => console.log(resp) )
//     .catch(err => console.log(err) );

// clima.getClima(21.879999, -102.300003)
//     .then( (resp) => console.log('resp :', resp) )
//     .catch( (err) => console.log('err :', err) );

const getInfo = async ( direccion ) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(
            argv.direccion 
        );
        const temperatura = await clima.getClima( 
            coordenadas.lat, coordenadas.lng
        );
        return "El clima de "+coordenadas.direccion+" "
            + "es de "+temperatura+" ."
            + "";
    } catch (error) {
        return "No se puede determinar el clima de " 
            + "de la direccion: "+direccion+"."
            + "";
    }
}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );