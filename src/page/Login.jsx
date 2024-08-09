import React, { useState,useEffect } from 'react'
import Title from '../components/Title'
import "../css/login.css"
import "../css/form.css"
import { Link,useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import ButtonGoogle from '../components/ButtonGoogle'
import axios from 'axios'
import murcielago from '../components/murcielago'
import { apikey , httpserver } from '../key'

const Login = () => {

    const [response, setResponse] = useState({})
    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        /*setResponse({success:false,response:"Inicio de sesión con google en mantenimiento"})
        return */
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('User signed in: ', user);
            
                const data = {
                    email: user.email
                };
        
                try {
                    const res = await axios.post(`${httpserver}/t/${apikey}`, data);
                    
                    if (res.data.success) {
                        let dataResponse = {
                            success: res.data.success,
                            response: "Inicio de sesión exitoso"
                        }
                        setResponse(dataResponse)
                        
                        window.localStorage.setItem("uid",res.data.response[0].uid)
                        setTimeout(() => {
                            navigate("/home")
                        }, 2000);
                    }else{
                        setResponse(res.data)
                    }
                    
                    
                
                } catch (error) {
                    console.error('Error:', error);
                }
            
        } catch (error) {
            setResponse({success: false,response:"Error during sign in: "+error})
            //console.error('Error during sign in: ', error);
        }
    };

    const handleSubmit = async () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //emailRegex.test(email);
        const emailLogin = document.getElementById("email").value
        const pwsLogin = document.getElementById("pws").value

        if (!emailRegex.test(emailLogin)) {
            setResponse({ success: false, response: 'Correo electrónico inválido' })
            return
        }

        if (emailLogin.length == 0 || pwsLogin.length <3) {
            setResponse({ success: false, response: 'Por favor, complete todos los campos requeridos.' })
            return
        }

        const url = '/api/login';
        //const url = 'https://api.tiendap.pe/login';
        const data = {
            email: emailLogin,
            pws: murcielago(pwsLogin)
        };

        try {
            const res = await axios.post(url, data);
            
            if (res.data.success) {
                let dataResponse = {
                    success: res.data.success,
                    response: "Inicio de sesión exitoso"
                }
                setResponse(dataResponse)
                
                window.localStorage.setItem("uid",res.data.response[0].uid)
                window.localStorage.setItem("usuario",emailLogin.split("@")[0])
                setTimeout(() => {
                    navigate("/home")
                }, 2000);
            }else{
                setResponse(res.data)
            }
            
            
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    

    return (

        <div className='ctnLogin'>
            <div className="ctnFrmLogin">
                {/*<Link to='/home' className='btnReturn'><i className="bi bi-arrow-left-short"></i>Regresar</Link>*/}
                <Title className='lblBienvenido' text='Bienvenido' style={{ fontSize: '30px', fontWeight: '700' }} />

                <Title className='lblSlogan' text='¡Ahora iniciar sesión o registrarte es más fácil con Google! Con un solo clic, accede a tu cuenta o crea una nueva de forma rápida y segura.' style={{ fontSize: '13px', fontWeight: '500', marginBottom: '20px' }} />

                {/*<div className="input1" style={{ marginBottom: '20px' }}>
                    <div className="input w100">
                        <p>Correo electrónico</p>
                        <input type="email" id='email' onChange={()=>{setResponse({})}}/>
                    </div>
                </div>
                <div className="input1" style={{ marginBottom: '20px' }}>
                    <div className="input w100">
                        <p>Contraseña</p>
                        <input type="password" id='pws' onChange={()=>{setResponse({})}} />
                    </div>
                </div>
                {Object.keys(response).length > 0 && (
                    <span style={{width: '100%',display: 'flex',justifyContent: 'center',marginBottom: '10px'}} className={response.success ? 'success-message' : 'error-message'}>
                        {response.success ? (
                            response.response
                        ) : (
                            response.response
                        )}
                    </span>
                )}
                <Title text='Olvide mi contraseña' style={{ fontSize: '13px', fontWeight: '600', cursor: 'pointer' }} />

                <button className='btnLogin' onClick={handleSubmit}> Inicia sesión</button>*/}
                <ButtonGoogle text='Continuar con google' onClick={handleGoogleLogin} />
                

            </div>

        </div>

    )
}

export default Login