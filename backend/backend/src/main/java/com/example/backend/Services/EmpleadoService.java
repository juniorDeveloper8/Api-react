package com.example.backend.Services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Models.EmpleadoModel;
import com.example.backend.Repositories.EmpleadoRepo;

@Service

public class EmpleadoService {
  @Autowired
  EmpleadoRepo empleadoRepo;
  //metodo del crud en la tabla

  public ArrayList<EmpleadoModel> obternerEmpleados(){
    return (ArrayList<EmpleadoModel>) empleadoRepo.findAll();
  }

  public EmpleadoModel guardarEmpleados(EmpleadoModel empleado) {
    return empleadoRepo.save(empleado);
  }

  public Optional<EmpleadoModel> obtenerPorId(Long id) {
    return empleadoRepo.findById(id);
  }
   
  public ArrayList<EmpleadoModel> obteberPorNombre(String nombre){
    return empleadoRepo.findByNombre(nombre);
  }

  public boolean eliminarEmpleados(Long id) {
    try {
      empleadoRepo.deleteById(id);
      return true;
    } catch (Exception e) {
      return false;
    }
  }
}
