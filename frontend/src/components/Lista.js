import Navbar from './Navbar';
import React, { Fragment, useState, useEffect } from 'react';
import EmpleadoList from "../pages/EmpleadoList";
import Formulario from '../pages/Formulario';



function Lista() {


  
  const [ListUpdated, setListUpdated] = useState(false)

  const [join, setJoin] = useState({

    nombre: '',
    apellido: '',
    identificacion: '',
    horaExtra: '',
    sueldo: 0,
    prestamo: 0

  });

  const [empleados, setEmpleados] = useState([])

  useEffect(() => {
    const getEmpleados = () => {
      fetch('http://localhost:8080/empleado')
        .then(res => res.json())
        .then(res => setEmpleados(res))
    }
    getEmpleados()
    setListUpdated(false)
  }, [ListUpdated])

  return (

    <Fragment>
      <Navbar brand='Empleado' />
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: 'center' }}>Lista de Empleados</h2>
            <EmpleadoList empleados={empleados} ListUpdated={ListUpdated} setListUpdated={setListUpdated} />
          </div>

          <div className='col-4'>
            <h2 style={{ textAlign: 'center' }}>Empleado Nuevo</h2>
            <Formulario join={join} setJoin={setJoin} />
          </div>

        </div>
      </div>
    </Fragment>
  );

}
export default Lista;