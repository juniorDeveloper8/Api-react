import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/stylesAll.css'

const Home = () => {
  return (

    <Fragment>
      <Navbar  brand='Inicio'/>
      <body>
        <div className='container'>
          <div className='boton' >
            <Link to="list" className='btn btn-dark btn-lg'>Revisar</Link>
          </div>
        </div>
      </body>
    </Fragment>
  )
}

export default Home;