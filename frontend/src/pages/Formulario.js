import React from 'react'

const Formulario = ({ join, setJoin }) => {

  const handleChange = e => {
    setJoin({
      ...join,
      [e.target.name]: e.target.value
    })
  }

  let { nombre, apellido, sueldo, cedula, prestamo  } = join

  const handleSubmit = () => {

    sueldo = parseInt(sueldo, 10)

    //VALIDACION DE LOS DATOS 
    if (nombre === '' || apellido === '' || sueldo <= 0 || cedula <= 0 || prestamo >= sueldo) {
      alert("todos los campos son obligatorios")
      return
    }

    // CONSULTA

    const requestInit = {
      method: 'Get',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(join)
    }

    fetch('http://localhost:8080/empleado', requestInit)
      .then(res => res.json())
      .then(res => console.log(res))
    //REINICIO EL STATE DEL EMPLEADO
    setJoin({
      nombre: '',
      apellido: '',
      identificacion: '',
      horaExtra: '',
      sueldo: 0,
      prestamo: 0

    })
  }


  return (
    <form onSubmit={handleSubmit}>
     
      <div className='mb-3'>
        <label htmlFor='nombre' className='form-label'>Nombre</label>
        <input name='nombre' onChange={handleChange} type="text" id="nombre" className='form-control'></input>
      </div>

      <div className='mb-3'>
        <label htmlFor='apellido' className='form-label'>Apellido</label>
        <input name='apellido' onChange={handleChange} type="text" id="apellido" className='form-control'></input>
      </div>
      
      <div className='mb-3'>
        <label htmlFor='identificacion' className='form-label'>Cedula</label>
        <input name='identificacion' onChange={handleChange} type="number" id="identificacion" className='form-control'></input>
      </div>

      <div className='mb-3'>
        <label htmlFor='horaExtra' className='form-label'>Horas Extras</label>
        <input name='horaExtra' onChange={handleChange} type="number" id="horaExtra" className='form-control'></input>
      </div>
     
      <div className='mb-3'>
        <label htmlFor='sueldo' className='form-label'>Sueldo</label>
        <input name='sueldo' onChange={handleChange} type="number" id="sueldo" className='form-control'></input>
      </div>
     
      <div className='mb-3'>
        <label htmlFor='prestamo' className='form-label'>Prestamo</label>
        <input name='prestamo' onChange={handleChange} type="number" id="prestamo" className='form-control'></input>
      </div>

      <button type='submit' className='btn btn-primary'>Agregar</button>
    
    </form>
  );
}

export default Formulario;