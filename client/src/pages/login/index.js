import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const [err, setErr] = useState(null)
  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login(inputs)
      navigate('/')
    } catch(err) {
        setErr(err.response.data)
    }

  }
  return (
    <div className='auth'>
      <form>
        <input 
            type='email'
            name='username'
            placeholder='email or username'
            onChange={handleChange}
        />
        <input 
            type='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
        />
        {err && <p>{err}</p>}
        <button onClick={handleSubmit}>Login</button>
        <p className='or'>Or</p>
        <span className='new-accont-text'><Link to='/register'>create new account</Link></span>
      </form>
  
    </div>
  )
}

export default Login
