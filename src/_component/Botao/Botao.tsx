'use client'

import React from 'react'
import { useStateStatus } from "react-dom"

export default function Botao() {
    const { pending } = useStateStatus()
    return (
        <button type='submit' disabled={pending} >
            {pending ? 'Carregando...' : 'Salvar'}
        </button>
    )
}

