import { FaHome, FaListAlt, FaUser } from "react-icons/fa"
import { MdOutlineTravelExplore } from "react-icons/md"

import { NavLink, Outlet, useLocation } from "react-router";

export const Layout = () => {
  
  const location = useLocation()

  const getPageTitle = () => {
    const titles = {
      '/': 'Denunciar',
      '/reports': 'Minhas Denúncias',
      '/feed': 'Explorar',
      '/profile': 'Perfil'
    };
    return titles[location.pathname] || 'TESTE';
  };
    

  const linkClass = ({ isActive }) =>
    `flex flex-col justify-center items-center transition-colors ${isActive ? 'text-green-400' : 'text-gray-400 hover:text-gray-600'
    }`;
    
  return (
    <div className="flex flex-col h-dvh from-gray-100 to-white bg-linear-to-l">
      <header className="flex items-center justify-start px-4 bg-white shadow-sm shadow-gray-200 py-4">
        <h1 className="text-base font-bold tracking-widest">{getPageTitle()}</h1>
      </header>

      <main className="h-screen px-4 flex flex-col gap-12 items-center justify-center">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 py-2 px-4 w-full flex flex-row items-center justify-around bg-white text-gray-600 text-sm">
        <NavLink to='/' className={linkClass}>
          <FaHome />
          <span>Início</span>
        </ NavLink>

        <NavLink to='/reports' className={linkClass}>
          <FaListAlt />
          <span>Denúncias</span>
        </ NavLink>

        <NavLink to='/feed' className={linkClass}>
          <MdOutlineTravelExplore />
          <span>Explorar</span>
        </ NavLink>

        <NavLink to='/profile' className={linkClass}>
          <FaUser />
          <span>Perfil</span>
        </ NavLink>
      </footer>

    </div>
  )
}
