import Image from "next/image";
import projectMovies from "../../../public/images/projectmovies.png"
import projectLogin from "../../../public/images/login.png"
import projectProdutos from "../../../public/images/site-produtos.png"

export default function Projects() {
    return (
        <section className="gap-10 border-zinc-700 border-t pb-14 pt-10 ">

            <h1 className="text-4xl font-bold leading-tight  text-sky-700">
                Projetos
            </h1>

            <div className="flex flex-col mt-4 gap-4">
                <div className=" flex
                 flex-col justify-center items-center text-center gap-2 border-zinc-700 border rounded-2xl p-6">
                    <h1 className=" text-2xl text-cyan-500 font-medium"> MoviesLib </h1>
                    <p className="text-zinc-200 font-semibold text-xl">Biblioteca de filmes, utilizando React js, Javascript e API externa The Movie DB</p>
                    <div>
                        <Image
                            src={projectMovies}
                            alt="projeto movies"
                            width={350}
                            height={150}
                            className="rounded-2xl"
                        />
                    </div>
                    <a href="https://bvasconcelos710.github.io/projeto-lib-filmes-react/">
                        <div className="flex bg-sky-700 h-12 w-40 justify-center items-center rounded-xl font-bold text-xl">
                            Veja aqui
                        </div>
                    </a>

                </div>

                <div className=" flex
                 flex-col justify-center items-center text-center gap-2 border-zinc-700 border rounded-2xl p-4">
                    <h1 className=" text-2xl text-cyan-500 font-medium"> Sistema de Login </h1>
                    <p className="text-zinc-200 font-semibold text-xl">Sistema de login, utilizando React js, Javascript, Typescript, Tailwind e uma API externa para simular um login</p>
                    <div>
                        <Image
                            src={projectLogin}
                            alt="projeto login"
                            width={350}
                            height={150}
                            className="rounded-2xl"
                        />
                    </div>
                    <a href="https://bvasconcelos710.github.io/projeto-lib-filmes-react/">
                        <div className="flex bg-sky-700 h-12 w-40 justify-center items-center rounded-xl font-bold text-xl">
                            Veja aqui
                        </div>
                    </a>

                </div>

                <div className=" flex
                 flex-col justify-center items-center text-center gap-2 border-zinc-700 border rounded-2xl p-4">
                    <h1 className=" text-2xl text-cyan-500 font-medium"> Site de Produtos Eletrônicos </h1>
                    <p className="text-zinc-200 font-semibold text-xl">Projeto simples de um site de produtos eletrônicos, utilizando Angular js, Javascript e Typescript.</p>
                    <div>
                        <Image
                            src={projectProdutos}
                            alt="projeto site de produtos eletrônicos"
                            width={350}
                            height={150}
                            className="rounded-2xl"
                        />
                    </div>
                    <a href="https://bvasconcelos710.github.io/projeto-loja-online-angular/produtos">
                        <div className="flex bg-sky-700 h-12 w-40 justify-center items-center rounded-xl font-bold text-xl">
                            Veja aqui
                        </div>
                    </a>

                </div>

            </div>
        </section>
    )
}