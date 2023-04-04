package com.example.backend.Repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Models.EmpleadoModel;

@Repository

public interface EmpleadoRepo extends CrudRepository<EmpleadoModel, Long> {
  public abstract ArrayList<EmpleadoModel> findByNombre(String nombre);  
}
