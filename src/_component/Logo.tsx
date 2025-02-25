import { Scale } from "lucide-react"
import React from "react"

export default function Logo() {
    return (
        <div className=" flex p-2 justify-center items-center">
            <div className=" text-gray-300">
                <Scale />
            </div>
            <div>
                <a className=" text-gray-300 text-2xl font-cinzel justify-center items-center flex p-5" href="/">
                    Advocacy
                </a>
            </div>
        </div>
    )
}
