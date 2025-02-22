import Logo from './_component/Logo'
import './App.css'


function App() {
  return (
    <>
      <div className="w-full flex h-screen flex-wrap bg-slate-800">
        <div className=" w-full h-14 flex justify-center">
          <div className=" w-7xl  flex justify-between">
            <div className=" flex p-2 justify-center">
             <Logo />
            </div>
            <div className=" flex p-2 justify-center items-center">
            <a className=" text-gray-300 text-2xl font-(--font-montserrat) justify-center items-center flex p-5 " href="/">
                HOME ABAOUT SERVICE SUCCESS STORY PRICING CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

