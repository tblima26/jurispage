import React from 'react'
import img from '../../images/negocio.jpg'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Loader2, XIcon } from 'lucide-react'

const clientSchema = z.object({
    name: z.string().min(4, "Minimum of 4 characters.").nonempty("Name cannot be empty."),
    email: z.string().email("Invalid email.").nonempty("Email cannot be empty."),
})

type ClientSchema = z.infer<typeof clientSchema>

export default function Contact() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ClientSchema>({
        resolver: zodResolver(clientSchema)
    })

    async function handleSubmitMessage(data: ClientSchema) {
        const { email, name } = data
        const cellphone = "5561981797054"
        const message = `"Hello, my name is ${name} and my email is ${email}. I would like more information."`
        const whatsappUrl = `https://wa.me/${cellphone}?text=${message}`
        await new Promise(resolve => setTimeout(resolve, 2000));

        window.open(whatsappUrl, "_blank")
        reset()
    }

    return (
        <div className='relative h-[80vh] overflow-hidden origin-bottom'>
            <img src={img} className="brightness-50 w-full h-auto object-bottom" alt="Imagem" />
            <div>
                <form
                    onSubmit={handleSubmit(handleSubmitMessage)}
                    className="absolute top-1/2 left-1/2 transform 
                -translate-x-1/2 -translate-y-1/2 backdrop-blur-md p-6 rounded-lg 
                shadow-lg w-[20%] h-auto flex flex-col items-center">

                    {/* Título centralizado dentro do formulário */}
                    <label className="text-white text-2xl font-cinzel text-center mb-4 p-4">Contact Us</label>

                    {/* Nome */}
                    <div className="flex items-center gap-4 w-full">
                        <label className="text-lg text-white flex-shrink-0">Nome</label>
                        <input type="text" {...register('name')}
                            className="w-full p-4 border rounded text-white bg-transparent" />
                    </div>
                    {/* Div com erro e altura fixa */}
                    <div className="h-10">
                        {errors.name && (
                            <div className="text-red-700 text-sm mt-1 p-2 rounded flex items-center gap-2 font-semibold font-poppins">
                                <XIcon />
                                {errors.name.message}
                            </div>
                        )}
                        {!errors.name && <span></span>} {/* Espaço reservado */}
                    </div>

                    {/* E-mail */}
                    <div className="flex items-center gap-4 w-full mt-4">
                        <label className="text-lg text-white flex-shrink-0">E-mail</label>
                        <input type="email" {...register('email')}
                            className="w-full p-4 border border-gray-300 rounded text-white bg-transparent" />
                    </div>
                    {/* Div com erro e altura fixa */}
                    <div className="h-10">
                        {errors.email && (
                            <div className="text-red-700 text-sm mt-1 p-2 rounded flex items-center gap-2 font-semibold font-poppins">
                                <XIcon />
                                {errors.email.message}
                            </div>
                        )}
                        {!errors.email && <span></span>} {/* Espaço reservado */}
                    </div>

                    <button
                        type="submit"
                        className={`w-full p-2 text-white rounded mt-4 transition-all flex items-center justify-center gap-2 duration-500 
                            ${isSubmitting ? 'bg-gray-500 hover:bg-gray-500 cursor-not-allowed' : 'bg-green-700 hover:bg-green-600'}`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                Loading...
                                <Loader2 className="w-5 h-5 animate-spin" />
                            </>
                        ) : "Send"}
                    </button>

                </form>
            </div>
        </div>
    )
}
