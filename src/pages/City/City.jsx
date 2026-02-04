import { useLocation } from 'react-router';
import CityImage from '../../components/CityImage';
import { FaAngleRight, FaLightbulb } from "react-icons/fa"

function City() {

    const location = useLocation();
    const cityData = location.state?.cityData;


    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <CityImage
                    cityName={cityData.nome}
                    className="w-full h-48 rounded-xl"
                />
                <h2 className='font-semibold text-sm'>{cityData.nome}, {cityData.microrregiao.mesorregiao.UF.sigla}</h2>
            </div>

            <ul className="flex flex-col gap-4">

                <h3 className='text-base font-semibold'>Denúncias</h3>

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