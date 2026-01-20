import { FaAngleRight, FaLightbulb } from "react-icons/fa"

function Reports() {
  return (
    <>
      <ul className="h-full py-8 flex flex-col gap-6">

        <li className="flex flex-row justify-center items-center bg-white py-2 px-4 gap-4 rounded-md shadow-sm shadow-gray-200">
          <span className="bg-yellow-200 text-yellow-600 rounded-sm p-2">
            <FaLightbulb />
          </span>

          <div className="text-xs">
            <h2 className="text-sm font-bold">Lâmpada queimada</h2>
            <h3 className="font-semibold">Iluminação - 15/03/2025</h3>
            <p>Rua Governador Valadares, Centro- Capitão Andrade</p>
          </div>

          <span className="text-gray-600">
            <FaAngleRight />
          </span>

        </li>

        <li className="flex flex-row justify-center items-center bg-white py-2 px-4 gap-4 rounded-md shadow-sm shadow-gray-200">
          <span className="bg-yellow-200 text-yellow-600 rounded-sm p-2">
            <FaLightbulb />
          </span>

          <div className="text-xs">
            <h2 className="text-sm font-bold">Lâmpada queimada</h2>
            <h3 className="font-semibold">Iluminação - 15/03/2025</h3>
            <p>Rua Governador Valadares, Centro- Capitão Andrade</p>
          </div>

          <span className="text-gray-600">
            <FaAngleRight />
          </span>

        </li>

      </ul>
    </>
  )
}

export default Reports