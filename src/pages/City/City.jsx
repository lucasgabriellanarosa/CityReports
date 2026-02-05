import { Link, useLocation } from 'react-router';
import CityImage from '../../components/CityImage';
import { FaAngleRight, FaLightbulb, FaMap } from "react-icons/fa"

function City() {

    const location = useLocation();
    const cityData = location.state?.cityData;
    console.log(cityData)

    return (
        <div className='flex flex-col gap-8 py-4'>
            <div className='flex flex-col gap-2'>
                <CityImage
                    cityName={cityData.nome}
                    className="w-full h-48 rounded-xl"
                />
                <h2 className='font-semibold text-sm'>{cityData.nome}, {cityData.microrregiao.mesorregiao.UF.sigla}</h2>
            </div>

            <ul className="flex flex-col gap-4">

                <div className='flex flex-row w-full items-center justify-between'>

                    <h3 className='text-base font-semibold'>Denúncias</h3>

                    <Link to={`/map/${cityData.id}`} 
                    state={{cityData}}
                    className='text-sm bg-green-200 rounded-sm px-2 py-1 font-semibold shadow-sm flex gap-2 justify-center items-center'>
                        <span>
                            <FaMap />
                        </span>
                        Ver Mapa
                    </Link>

                </div>

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
        </div>
    )
}

export default City