import { FaAngleRight, FaLightbulb, FaMapPin } from "react-icons/fa"

function Feed() {
  return (
    <ul className="flex flex-col gap-4">

      <li className="flex flex-col justify-center bg-white py-4 px-4 gap-4 rounded-md shadow-sm shadow-gray-200 text-xs">

        <div className="flex flex-row gap-2 items-center">
          <img className="rounded-full w-10" src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg" />
          <div>
            <p className="text-sm">José Armando</p>
            <p>2h atrás | Infraestrutura</p>
          </div>
        </div>

        <div className="flex flex-row">
          <div>
            <h2 className="text-sm font-semibold">Buraco na via principal</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic velit veniam ipsum mollitia! Commodi, quas.</p>
          </div>

          <img className="w-1/2" src="https://www.onsv.org.br/source/files/c/2094/Ocorrencias_de_transito_causadas_por_buracos_na_via-763336_2000-1200-0-0.jpg" />

        </div>

        <div className="flex flex-row items-center gap-2">
          <span className="text-green-500">
            <FaMapPin />
          </span>
          <p className="text-gray-700">Rua Governador Valadares, 01</p>
        </div>

      </li>

    </ul>
  )
}

export default Feed