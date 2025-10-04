import './App.css'
import Banner from './Component/Banner'
import BestSeller from './Component/BestSeller'
import BrandSection from './Component/BrandSection'
import DealsSection from './Component/DealsSection'
import Navber from './Component/Navber'
import SearchBer from './Component/SearchBer'
import TopBar from './Component/TopBar'

function App() {


  return (
    <>
     <TopBar/>
     <Navber/>
     <SearchBer/>
     <Banner/>
     <BrandSection/>
     <DealsSection/>
     <BestSeller/>
    </>
  )
}

export default App
