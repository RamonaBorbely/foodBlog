import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [err, setErr] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('auth/register', inputs)
      navigate('/login')
    } catch(err) {
        setErr(err.response.data)
    }

  }
  
  return (
    <div className='auth'>
      <form>
        <input 
            type='email'
            name='email'
            placeholder='email or username'
            onChange={handleChange}
        />
        <input 
            type='text'
            name='username'
            placeholder='username'
            onChange={handleChange}
        />
        <input 
            type='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
        />
        {err && <p>{err}</p>}
        <button onClick={handleSubmit}>Register</button>
        <p className='or'>Already have an account ?</p>
        <span className='new-accont-text'><Link to='/login'>Log in</Link></span>
      </form>
    </div>
  )
}

export default Register
