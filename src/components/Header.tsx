import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {

  const { pathname } = useLocation()
  
  const isHome = useMemo(() => pathname === '/' ,[pathname])

  return (
    <header className={ isHome ? "bg-[url(./bg.jpg)] bg-cover bg-center" : "bg-slate-800" }>
      <div className="mx-auto px-5 py-16 container">
        <div className="flex justify-between items-center">
          <div>
            <img className='w-32' src="/logo.svg" alt="Logotipo" />
          </div>
          <nav className='flex gap-4'>
            <NavLink to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 underline uppercase font-bold'
                  : 'text-white uppercase font-bold'}
            >Inicio</NavLink>
            <NavLink to='/favoritos'
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 underline uppercase font-bold'
                  : 'text-white uppercase font-bold'}
            >Favoritos</NavLink>
          </nav>
        </div>
        {isHome && (
            <form className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-10 p-10 rounded-lg shadow space-y-6 mx-auto'>
              <div>
                <label htmlFor="ingredient" className='block text-white uppercase font-extrabold text-lg'>
                  Nombre o Ingrediente
                </label>
                <input
                type="text"
                name="ingredient"
                id="ingredient"
                className='p-3 w-full bg-white rounded-lg focus:outline-none'
                placeholder='Nombre o Ingredientes'/>
              </div>
              
              <div>
                <label htmlFor="ingredient" className='block text-white uppercase font-extrabold text-lg'>
                  Categoría
                </label>
                <select
                  name="ingredient"
                  id="ingredient"
                  className='p-3 w-full bg-white rounded-lg focus:outline-none'>
                    <option>-- Seleccione --</option>
                </select>
              </div>
              <input type="submit" value="Buscar Recetas" className='cursor-pointer bg-amber-800 hover:bg-orange-900 text-white font-extrabold uppercase w-full rounded-lg p-2' />
            </form>
        ) }
      </div>
    </header>
  )
}
