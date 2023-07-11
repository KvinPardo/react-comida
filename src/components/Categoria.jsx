import React from 'react'
import useComida from '../hooks/useComida';



const Categoria = ({ categoria }) => {
  // console.log(categoria);
  const { handleClickCategoria } = useComida();
  const { id, nombre, icono} = categoria;

  return (
    <div className='flex items-center gap-x-4 w-full border p-3 hover:bg-amber-400 uppercase cursor-pointer'>
      <img 
        src={`/img/icono_${icono}.svg`} 
        alt="Imagen íconos" 
        className='w-12'
      />
      <button
        onClick={ () => handleClickCategoria(id)}
        type='button'
        className='text-lg font-bold cursor-pointer truncate'>{nombre}</button>
    </div>
  )
}

export default Categoria