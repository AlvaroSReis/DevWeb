import { auth, provider} from '../../services/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { localizacao } from '../../utils/localizacao'
import { novoUsuario, getCity } from '../../services/Connection'
import Button from '@mui/material/Button'

export default function Login() {
    const [logado, setLogado] = useState(false)
    const [userName, setUserName] = useState('')
    const [linkImg, setLinkImg] = useState('')
    const [email, setEmail] = useState('')
    const [coordenadas, setCoordenadas] = useState({})
    const [city, setCity] = useState('')
    useEffect( () => {
        const logadoLocal = localStorage.getItem('logado') === 'true'
        setLogado(logadoLocal);

        if (logadoLocal) {
            setUserName(localStorage.getItem('userName'))
            setLinkImg(localStorage.getItem('linkImg'))
            setEmail(localStorage.getItem('email'))
        }
    }, []);

    useEffect( () => {
        const fetchData = async () => {
          try {
            const coords = await localizacao().then(async (result) => {
                //console.log(result)
                const city = await getCity(result.latitude, result.longitude).then((result) => {
                    //console.log(result)
                    return result.slice(1, result.length-1)
            })
                setCity(city)
                return result
            }
            );
            setCoordenadas(coords);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
    }, []);

    const salvarUsuarioLocal = (email, name) => {
        let user = {}
        user.email = email
        user.latitude = coordenadas.latitude
        user.longitude = coordenadas.longitude
        user.nome = name
        user.cidade = city
        //console.log(user.email)
        novoUsuario(user)
    }
    
    const logar = () => {
        signInWithPopup(auth, provider).then((data) => {
            setLogado(true)
            setUserName(data.user.displayName)
            setLinkImg(data.user.photoURL)
            setEmail(data.user.email)
            console.log(email)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem('logado', true)
            localStorage.setItem('userName', data.user.displayName)
            localStorage.setItem('linkImg', data.user.photoURL)

            salvarUsuarioLocal(data.user.email, data.user.displayName)
        })


    }

    const sair = () => {
        localStorage.clear()
        window.location.reload()
        setLogado(false)
    }

    return(
        <div>
            {!logado &&
                <div>
                    <Button size="small" variant="contained" color="success" 
                    onClick={logar}>Logar com Google
                    <img style={{ height: '18px', borderRadius: '50px', marginLeft: '5px'}}
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB&psig=AOvVaw2HFmtVXq-FrRpD9iDDTyAQ&ust=1690669802785000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiL2Oy5soADFQAAAAAdAAAAABAE" alt="" />
                    </Button>
                </div>
            }
            {logado &&
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={linkImg} 
                    style={{ borderRadius: '50%' , width: '40px'}}
                    alt="" />
                    <strong>{userName}</strong>
                    <Button size="small" variant="contained" color="error" 
                    onClick={sair}
                    style={{marginLeft: '20px'}}
                    >Sair</Button>
                </div>
            }
        </div>
    );
}
