'use client'
import Image from "next/image";
import profile from "../../../public/images/perfil.jpg"
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

export default function Sidebar() {
    return (
        <div className="sticky top-16">
            <div className="flex flex-col gap-6 overflow-hidden rounded-2xl border-zinc-600 border-2 p-4">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-sky-700 text-2xl "> Bruno Vasconcelos </h1>
                </div>
                <div className="overflow-hidden shadow-lg rouded-2xl">
                    <Image
                        src={profile}
                        alt="imagem perfil"
                        width={450}
                        height={450}
                        className="rounded-2xl"
                    />

                </div>
                <div className="flex flex-col items-center gap-6">
                    <p className=" text-xl text-cyan-500 font-medium"> Software Engineer</p>

                    <ul className="flex items-center gap-4">
                        <li>
                            <a href='https://www.linkedin.com/in/brunovnv/' className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700 hover:shadow-md hover:shadow-cyan-500">
                                <LinkedinLogo size={35} />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/bvasconcelos710' className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700 hover:shadow-md hover:shadow-cyan-500">
                                <GithubLogo size={35} />
                            </a>
                        </li>
                        <li>
                            <a href='' className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700 hover:shadow-md hover:shadow-cyan-500">
                                <Envelope size={35} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>

    )
}