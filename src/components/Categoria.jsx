import React from 'react'
import useComida from '../hooks/useComida';



const Categoria = ({ categoria }) => {
  // console.log(categoria);
  const { handleClickCategoria, categoriaActual } = useComida();
  const { id, nombre, icono} = categoria;

  // const resaltarCategoriaActual = ()  => categoriaActual.id === id ? 'bg-ambar-400' : 'bg-white'
  // <div className={`${resaltarCategoriaActual()} flex items-center gap-x-4 w-full border p-3 hover:bg-amber-400 uppercase cursor-pointer`}>

  return (
    <div className={`${categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'} flex items-center gap-x-4 w-full border p-3 hover:bg-amber-400 uppercase cursor-pointer`}>
      <img 
        src={`/img/icono_${icono}.svg`} 
        alt="Imagen íconos" 
        className='w-12'
      />
      <button
        onClick={ () => handleClickCategoria(id)}
        type='button'
        className='text-lg font-bold cursor-pointer truncate w-full text-left py-2'>{nombre}</button>
    </div>
  )
}

export default Categoria