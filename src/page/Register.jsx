import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import ButtonGoogle from '../components/ButtonGoogle'
import { auth } from '../firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Register = ({email}) => {

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log('User signed in: ', user);
        } catch (error) {
          console.error('Error during sign in: ', error);
        }
      };

      useEffect(() => {
        
        document.title = "BlogHub - Register"
        
      }, [])
      
      
    return (
        <>
            <div className='ctnLogin'>

                <div className="ctnFrmLogin">
                {/*<Link to='/home' className='btnReturn'><i className="bi bi-arrow-left-short"></i>Regresar</Link>*/}
                    <Title className='lblBienvenido' text='Bienvenido' style={{ fontSize: '30px', fontWeight: '700' }} />

                    <Title className='lblSlogan' text='Escribe, descubre, y conéctate con otros apasionados del blogging.' style={{ fontSize: '13px', fontWeight: '500', marginBottom: '20px' }} />
                    <div className="input1" style={{ marginBottom: '20px' }}>
                        <div className="input w100">
                            <p>Nombre completo</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="input1" style={{ marginBottom: '20px' }}>
                        <div className="input w100">
                            <p>Correo electrónico</p>
                            <input type="email" value={email}/>
                        </div>
                    </div>
                    <div className="input1" style={{ marginBottom: '20px' }}>
                        <div className="input w100">
                            <p>Contraseña</p>
                            <input type="password" />
                        </div>
                    </div>

                    <button className='btnLogin'>Inicia sesión</button>
                    <ButtonGoogle text='Registrarse con Google' onClick={handleGoogleLogin} />
                    <span className='ctnRegisterButton'>¿Ya tienes una cuenta? <Link to='/auth/login'>Iniciar sesión.</Link></span>

                </div>

            </div>
        </>
    )
}

export default Register