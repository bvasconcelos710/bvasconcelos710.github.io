'use client'
import { Atom, Coffee, FileCss, FileHtml, FileJs, FileSql, FileTs } from "@phosphor-icons/react";


export default function Abilities() {
    return (
        <section className="gap-12 mt-20 border-zinc-700 border-t pb-10 pt-10 ">

            <h1 className="text-4xl font-bold leading-tight  text-sky-700">
                Habilidades
            </h1>

            <div className="flex p-2 gap-4 mt-4">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col h-16 w-16 rounded-full items-center justify-center border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700">
                        <Atom size={32} />
                    </div>
                    <p>React</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col h-16 w-16 rounded-full items-center justify-center border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700">
                        <FileJs size={32} />
                    </div>
                    <p>Javascript</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col h-16 w-16 rounded-full items-center justify-center border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700">
                        <FileTs size={32} />
                    </div>
                    <p>Typescript</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col h-16 w-16 rounded-full items-center justify-center border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700">
                        <Coffee size={32} />
                    </div>
                    <p>Java</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col h-16 w-16 rounded-full items-center justify-center border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700">
                        <FileSql size={32} />
                    </div>
                    <p>SQL</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col h-16 w-16 rounded-full items-center justify-center border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700">
                        <FileHtml size={32} />
                    </div>
                    <p>HTML</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col h-16 w-16 rounded-full items-center justify-center border border-zinc-400 transition-all hover:border-sky-700 hover:bg-sky-700">
                        <FileCss size={32} />
                    </div>
                    <p>CSS</p>
                </div>
            </div>

        </section >

    )
}