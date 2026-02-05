import { useState } from "react";
import { AiOutlineAim } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router";

function App() {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };


  return (
    <div className="min-h-full flex flex-col justify-center items-center gap-8">

      <img src="./imgs/city.svg" />

      <div>
        <h1 className="text-2xl font-semibold">Encontre sua <span className="text-green-400">cidade</span></h1>
        <p className="text-sm text-gray-500">Selecione o município para relatar problemas de infraestrutura e sociais.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        <div className="flex flex-row justify-center items-center bg- px-4 gap-4 py-3 bg-white shadow-sn rounded-xl border border-gray-200">

          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex grow text-sm outline-0" type="text" placeholder="Digite o nome do município..." required />
          <button type="submit" className="text-sm text-green-300">
            <FaSearch />
          </button>
        </div>

      </form>

      <div className="flex flex-row justify-center items-center gap-4 text-sm bg-emerald-100 rounded-xl py-2 text-green-700 font-semibold w-full">
        <span className="bg-white rounded-full text-lg p-1">
          <AiOutlineAim />
        </span>
        <p>Usar a minha localização atual</p>
      </div>

    </div>
  )
}

export default App
