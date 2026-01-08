import { AiOutlineAim } from "react-icons/ai"
import { FaHome, FaListAlt, FaSearch, FaUser } from "react-icons/fa"
import { MdOutlineTravelExplore } from "react-icons/md"

function App() {

  return (
    <div className="flex flex-col h-dvh from-gray-100 to-white bg-linear-to-l">
      <header className="flex items-center justify-end py-2 px-4">
        <button className="text-sm">Login</button>
      </header>

      <main className="h-screen px-4 flex flex-col gap-12 items-center justify-center">

        <img src="./imgs/city.svg" />

        <div>
          <h1 className="text-2xl font-semibold">Encontre sua <span className="text-green-400">cidade</span></h1>
          <p className="text-sm text-gray-500">Selecione o município para relatar problemas de infraestrutura e sociais.</p>
        </div>

        <form className="flex flex-col w-full gap-6">
          <div className="flex flex-row justify-center items-center bg- px-4 gap-4 py-3 bg-white shadow-sn rounded-xl border border-gray-200">
            <span className="text-sm text-green-300">
              <FaSearch />
            </span>
            <input className="flex grow text-sm" type="text" placeholder="Digite o nome do município..." />
          </div>

          <div className="flex flex-row justify-center items-center gap-4 text-sm bg-emerald-100 rounded-xl py-2 text-green-700 font-semibold">
            <span className="bg-white rounded-full text-lg p-1">
              <AiOutlineAim />
            </span>
            <p>Usar a minha localização atual</p>
          </div>
        </form>

      </main>

      <footer className="fixed bottom-0 py-2 px-4 w-full flex flex-row items-center justify-around bg-white text-gray-600 text-sm">
        <a href="#" className="flex flex-col justify-center items-center text-green-400">
          <FaHome />
          <span>Início</span>
        </a>
        <a href="#" className="flex flex-col justify-center items-center">
          <FaListAlt />
          <span>Denúncias</span>
        </a>
        <a href="#" className="flex flex-col justify-center items-center">
          <MdOutlineTravelExplore />
          <span>Explorar</span>
        </a>
        <a href="#" className="flex flex-col justify-center items-center">
          <FaUser />
          <span>Perfil</span>
        </a>
      </footer>

    </div>
  )
}

export default App
