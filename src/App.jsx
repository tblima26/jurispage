import Banner from './_component/Banner'
import Logo from './_component/Logo'
import Menu from './_component/Menu'
import About from './_component/About'
import Container from './_component/Container/Container'

import './App.css'
import Profiles from './_component/Profiles'
import Services from './_component/Services/Services'



function App() {
  return (
    <>
      <div className="w-full flex flex-col bg-slate-800">
        {/* Header */}
        <div className="w-full h-16 flex justify-center bg-slate-900">
          <div className="max-w-7xl w-full flex justify-between items-center px-6">
            <Logo />
            <Menu />
          </div>
        </div>

        {/* Banner */}
        <Banner />
      </div>
      <div className="w-full flex bg-gray-200">
        {/* Cards e About */}
        <div className="max-w-7xl w-full mx-auto px-6 py-12 flex 
        flex-col items-center gap-y-14">
          <Container />
          {/* Sobre a empresa */}
          <About />
          <Profiles />
          <Services />
        </div>
      </div >
    </>
  )
}

export default App

