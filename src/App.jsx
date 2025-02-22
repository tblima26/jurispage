import Logo from './_component/Logo'
import './App.css'


function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col bg-slate-800">
        <div className=" w-full h-14 flex justify-center">
          <div className=" w-7xl  flex justify-between">

            <Logo />
            <div className=" flex p-2 justify-center items-center">
              <a className=" text-gray-300 text-2xl font-(--font-montserrat) justify-center items-center flex p-5 " href="/">
                HOME ABAOUT SERVICE SUCCESS STORY PRICING CONTACT
              </a>
            </div>
          </div>
        </div>
        <div className=' p-2 space-y-3 mt-2'>
          <p className='text-3xl text-blue-50 p-4 font-lato'> Advocacia is set to become a leading law firm, delivering
            excellence and integrity in every case. With a team of experienced
            attorneys, we provide top-tier legal services, ensuring justice and
            protection for our clients. Our commitment to professionalism and
            nnovation will make Advocacia a trusted name in the legal industry.</p>
          <p className='text-3xl text-blue-50 p-4 font-montserrat'> Advocacia is set to become a leading law firm, delivering
            excellence and integrity in every case. With a team of experienced
            attorneys, we provide top-tier legal services, ensuring justice and
            protection for our clients. Our commitment to professionalism and
            nnovation will make Advocacia a trusted name in the legal industry.</p>
        </div>
      </div>
    </>
  )
}

export default App

