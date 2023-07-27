import { auth, provider} from '../../services/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useState, useEffect } from 'react'

export default function Login() {
    const [value, setValue] = useState('')
    const [logado, setLogado] = useState(false)
    const [userName, setUserName] = useState('')
    const [linkImg, setLinkImg] = useState('')
    
    const logar = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            setLogado(true)
            setUserName(data.user.displayName)
            setLinkImg(data.user.photoURL)
            console.log(data.user.email)
        })
    }

    const sair = () => {
        localStorage.clear()
        window.location.reload()
        setLogado(false)
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return(
        <div>
            {!logado &&
                <div>
                    <button onClick={logar}>Logar com Google</button>
                </div>
            }
            {logado &&
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={linkImg} 
                    style={{ borderRadius: '50%' , width: '40px'}}
                    alt="" />
                    <strong>{userName}</strong>
                    <button onClick={sair}
                    style={{marginLeft: '20px'}}
                    >Sair</button>
                </div>
            }
        </div>
    );
}
