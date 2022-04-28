import React, { useState } from 'react'
import './Register.scss'
import { getRegister } from '../../API/index';
import { Link } from 'react-router-dom';
const Register = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()

    if(email.value !== '' && password.value !== ''){
      getRegister({email , password})
      .then(res => {
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('user' , JSON.stringify(res.user))
        localStorage.setItem('isActivated' , res.user.isActivated)
        window.location.reload()
      })
    }
  }

  return (
    <div className='container'>
      <div className='register_card'>
        <h4>Registration</h4>
        <hr />

        <form>
          <div>
            <input type='email' placeholder='Email *' defaultValue={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <input type='password' placeholder='Password *' defaultValue={password} onChange={e => setPassword(e.target.value)} />
          </div>
        </form>
        <div className='register_btn'>
          <button onClick={handleRegister} className='btn_primary'>Registration</button>
        </div>

        <div className='link_auth'>
          <Link to='/authorization'>Have already an account?</Link>
        </div>
      </div>
    </div>
  )
}

export default Register