import { AiOutlineAim } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"

function App() {

  return (
      <>

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

      </>
  )
}

export default App
