import React, { useEffect, useState } from 'react'
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    const [icon, setIcon] = useState(null)

    const [validPass, setValidPass] = useState([false, false, false, false])

    const icons = ['🐶', '😺', '🐮' , '🐷']

    const handlePass = (pass) => {

            setPassword(pass)
            
            if(pass.length > 4){
                validPass[0] = true
                setValidPass(validPass)
            } else {
                validPass[0] = false
                setValidPass(validPass)
            }

            if (pass.search(/[A-Z]/) > -1){
                validPass[1] = true
                setValidPass(validPass)
            } else {
                validPass[1] = false
                setValidPass(validPass)
            }

            if (pass.search(/[0-9]/) > -1){
                validPass[2] = true
                setValidPass(validPass)
            } else {
                validPass[2] = false
                setValidPass(validPass)
            }

            if (pass.search(/[!@#$%^&*()]/) > -1){
                validPass[3] = true
                setValidPass(validPass)
            } else {
                validPass[3] = false
                setValidPass(validPass)
            }

    }



  return (
    <div className='sign-up'>
            <form className='sign-up--form'>
                <div className='sign-up--header'>Sign Up</div>
                <div className='sign-up--field'>
                    <input
                        placeholder=' '
                        required
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor='email'>Email</label>
                </div>
                <div className='sign-up--field'>
                    <input
                        placeholder=' '
                        required
                        type="password"
                        onChange={(e) => handlePass(e.target.value)}
                        value={password}
                    />
                    <label htmlFor='password'>Password</label>
                </div>
                <div className='bars'>
                    <span className={validPass[0] ? 'show' : 'hidden'}/>
                    <span className={validPass[1] ? 'show' : 'hidden'}></span>
                    <span className={validPass[2] ? 'show' : 'hidden'}></span>
                    <span className={validPass[3] ? 'show' : 'hidden'}></span>
                </div>
                <div className='password-requirements'>
                    <div className={validPass[0] ? 'green' : 'red'}> must be at least 5 characters</div>
                    <div className={validPass[1] ? 'green' : 'red'}> must contain a capital letter</div>
                    <div className={validPass[2] ? 'green' : 'red'}> must contain a number</div>
                    <div className={validPass[3] ? 'green' : 'red'}> must contain a special character</div>
                </div>
                <div className='sign-up--field'>
                    <input
                        placeholder=' '
                        required
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                    />
                    <label htmlFor='text'>Username</label>
                </div>
                <div className='sign-up--icons-header'>Choose Profile Icon:</div>
                <div className='sign-up--icons'>
                {
                    icons.map((i) => {
                        return <div key={i} className='sign-up-icon'>{i}</div>
                    })
                }
                </div>
            </form>
    </div>
  )
}

export default SignUp