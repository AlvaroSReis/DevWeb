import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useEffect, useState} from 'react'
import '../styles/mapaUsuarios.css'
import { latitudeLongitude } from '../services/Connection'

export default function MapaUsuarios() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(()=> {
      const fetchData = async () => {
        try {
            let data = await latitudeLongitude();
            setUsuarios(JSON.parse(data));
            console.log(data)
        } catch(error) {
            console.error(error);
        }
    };
    
    fetchData();
    }, [])
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDOVP4hxfauhEYg4terMKJmH-32yLSi09c"
    })


    return(
       <div style={{ marginTop: '90px', height: '100vh', width: '100%'}}>
            {
                isLoaded &&
                    <GoogleMap
                      mapContainerStyle={{height: '100%', width: '100%'}}
                      center={{
                        lat: -10.673367,
                        lng: -37.165568
                      }}
                      zoom={8.9}
                    >{
                      usuarios.map((item) => (
                        <Marker position={{
                          lat: item.latitude,
                          lng: item.longitude
                        }}
                        options={{
                          label: {
                              text: item.email,
                              className: 'map-marker'
                          }
                        }}
                        ></Marker>
                      ))
                    }
                    </GoogleMap> 
            }
       </div>
    )
}