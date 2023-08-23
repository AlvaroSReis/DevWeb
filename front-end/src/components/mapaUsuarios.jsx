import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useEffect, useState} from 'react'
import '../styles/mapaUsuarios.css'
import { latitudeLongitude } from '../services/Connection'

export default function MapaUsuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [cidades, setCidades] = useState([])
    //console.log(usuarios)



    useEffect(()=> {
      const fetchData = async () => {
        try {
            let data = await latitudeLongitude();
            setUsuarios(JSON.parse(data));
            //console.log(data)
            interate(data)
        } catch(error) {
            console.error(error);
        }
    };
    
    fetchData();
    }, [])

    function interate(data) {
      var dados = JSON.parse(data),
      result = dados.reduce(function (dados) {
        console.log("Dados:  \n")
        return function (r, o) {
          console.log("O: ")
          console.log(o)
          console.log("R: ")
          console.log(r)
            if (!dados[o.email]) {
              dados[o.email] = [];
              setCidades(cidades, o.cidade);
            }
            //hash[o.email].push(o)
            //setCidades(r);
            console.log(cidades)
        };
    }(Object.create(null)), []);
    
    }
    
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
                              text: item.nome,
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