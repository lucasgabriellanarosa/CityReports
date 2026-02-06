import { useLocation } from "react-router";

function CreateReport() {
    const location = useLocation();
    const position = location.state?.position;
    const address = location.state?.address;

    console.log(position, address)

    return (
        <form className="py-4 flex flex-col gap-6">

            <div className="flex flex-col gap-2">

                <label className="text-xs uppercase text-gray-600">Tipo de Problema</label>

                <select className="text-sm px-2 py-1 w-1/2 rounded-sm border border-gray-300 shadow-sm outline-0">
                    <option>
                        Infraestrutura
                    </option>
                    <option>
                        Social
                    </option>
                    <option>
                        Iluminação
                    </option>
                </select>

            </div>

            <div className="flex flex-col gap-2">
                <label className="text-xs uppercase text-gray-600">Detalhes</label>
                <textarea className="bg-gray-100 px-2 py-1 text-sm border border-gray-200 shadow-sm rounded-sm outline-0" rows={6} placeholder="Descreva a situação com detalhes..."></textarea>
            </div>

            <button className="text-sm bg-green-400 py-2 w-1/2 rounded-md shadow-sm self-center">Denunciar</button>

        </form>
    )
}

export default CreateReport