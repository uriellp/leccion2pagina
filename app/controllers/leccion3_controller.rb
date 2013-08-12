class Leccion3Controller < ApplicationController
  def introduccion
  end

  def datos
  end

  def cuestionarioinicial
  end

  def cuestionariofinal
  end

  def clases
  end

  def menuprincipal
  end
  
  def literal
  end

  def estrucProgra
  end
  
  def ejercicio1
    
    @etiquetas=DetalleEjercicio.all.to_a.shuffle
    
  end
  
  def ejercicio2
    
  end
  
  def ejercicio3
    
  end
  def ejercicio4
    
  end
  
  def introduccion1
  end
end
