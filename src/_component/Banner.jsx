
import banner from "../images/banner.jpg"

export default function Banner() {
    return (
        <div className=" flex flex-col justify-center items-center overflow-hidden min-h-screen relative">
            <img src={banner} alt="Banner" className="w-full brightness-50  object-cover h-screen">

            </img>
            <div className=" flex w-7xl h-20 absolute flex-col justify-center items-center gap-3">
                <div className="text-6xl text-slate-200 font-bold">
                    The Supreme Legal Advocates
                </div>
                <div className="text-2xl text-slate-200 ">
                    Providing innovative and dedicated legal solutions for your needs.
                </div>
                <div className=" justify-center items-center space-x-7 ">
                    <button className="text-xl text-white border-red-900 p-4 border-4 bg-red-900  rounded-xl hover:bg-transparent hover:border-red-900 transition-all"> Meet Our Team</button>
                    <button className="text-xl text-white border-red-900 p-4 border-4  hover:bg-red-900  rounded-xl transition-all">Contact Us</button>
                </div>
            </div>
        </div>
    )
}
