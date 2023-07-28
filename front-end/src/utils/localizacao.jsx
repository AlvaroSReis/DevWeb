import Geolocation from "@react-native-community/geolocation";

export const localizacao = ()=> {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
           position => {
            const {latitute, longitude} = position.coords
            resolve({latitute, longitude})
           },
           error => {
            reject(error.message)
           },
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    })
}