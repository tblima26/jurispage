
import banner from "../images/banner.jpg"

export default function Banner() {
    return (
        <div className=" flex flex-col justify-center items-center overflow-hidden min-h-screen relative">
            <img src={banner} alt="Banner" className="w-full brightness-50  object-cover h-screen">

            </img>
            <div className=" flex w-7xl h-20 absolute flex-col justify-center items-center gap-3">
                <div className="text-5xl text-slate-200">
                    The Supreme Legal Advocates
                </div>
                <div className="text-3xl text-slate-200">
                    Providing innovative and dedicated legal solutions for your needs.
                </div>
                <div className=" justify-center items-center space-x-7">
                    <button className="bg-red-900 text-xl text-slate-200 p-4 rounded-xl"> Meet Our Team</button>
                    <button className=" text-xl text-white border-red-900 border-4 p-4 rounded-3xl">Contact Us</button>
                </div>
            </div>
        </div>
    )
}
