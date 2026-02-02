import { GrLinkNext } from "react-icons/gr"
import { MdEmail, MdNavigateNext } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"

function Login() {
    return (
        <div className="h-dvh w-full flex flex-col justify-center items-center gap-8 bg-green-50">
            
            <img className="max-w-4/5" src="./imgs/login.svg" />

            <div className="flex flex-col justify-center items-center text-center gap-2">
                <h1 className="text-xl font-semibold">Acesse o Portal</h1>
                <p className="text-sm max-w-4/5">Bem-vindo de volta. Informe problemas de infraestrutura e sociais da sua cidade.</p>
            </div>

            <form className="w-4/5 flex flex-col justify-center items-center text-sm gap-4">

                <div className="flex flex-col gap-1 w-full">
                    <label className="font-semibold">E-MAIL</label>
                    <div className="flex flex-row items-center gap-2 text-base border text-gray-600 border-gray-300 rounded-sm py-1 px-2 bg-white">
                        <span>
                            <MdEmail />
                        </span>
                        <input type="email" placeholder="exemplo@email com" className="w-full"/>
                    </div>
                </div>

                <div className="flex flex-col gap-1 w-full">
                    <label className="font-semibold">SENHA</label>
                    <div className="flex flex-row items-center gap-2 text-base border text-gray-600 border-gray-300 rounded-sm py-1 px-2 bg-white">
                        <span>
                            <RiLockPasswordFill />
                        </span>
                        <input type="password" placeholder="********" className="w-full" />
                    </div>
                </div>

                <button className="bg-green-400 w-full py-2 rounded-md shadow-sm font-semibold flex flex-row justify-center items-center gap-4">
                    ENTRAR
                    <span>
                        <GrLinkNext />
                    </span>
                </button>

            </form>
        </div>
    )
}

export default Login