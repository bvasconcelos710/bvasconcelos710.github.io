'use client'
import { useState } from "react"
import emailjs from '@emailjs/browser'
import { error } from "console"


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e: any) {
        e.preventDefault()

        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email

        }

        emailjs.send("service_zdvhr5w", "template_gs065kt", templateParams, "fTnezQxGGb5pY2Ybq").then((response) => {
            setName('')
            setEmail('')
            setMessage('')
            alert("E-mail enviado!")
        }, (err: String) => {
            console.log("Erro:", err)
        })
    }

    return (
        <section className=" gap-10 mt-20 border-zinc-700 border-t pb-14 pt-10 ">
            <h1 className="text-4xl font-bold leading-tight  text-sky-700">
                Contato
            </h1>
            <div >
                <form className="form flex flex-col gap-4 mt-4" onSubmit={sendEmail}>
                    <input
                        className="border rounded-2xl h-9 p-2 text-slate-800"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        className="border rounded-2xl h-9 p-2 text-slate-800"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <textarea
                        className="border rounded-2xl h-20 p-2 text-slate-800"
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <input className="bg-sky-700 border border-zinc-700 rounded-2xl h-9 font-bold text-xl" type="submit" value="Enviar" />
                </form>
            </div>
        </section>
    )
}