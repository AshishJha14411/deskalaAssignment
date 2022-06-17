import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './auth/Signup'
import Login from './auth/Login'
const Home = () => {
  return (
   <Container>
    <h1>asdas</h1>
  <Link to='login'>Login</Link>
  <Link to='signup'>Signup</Link>
   </Container>
  )
}

export default Home