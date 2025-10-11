import "./App.css";
import AppDownload from "./Component/AppDownload";
import Banner from "./Component/Banner";
import BestLaptop from "./Component/BestLaptop";
import BestSeller from "./Component/BestSeller";
import BrandNew from "./Component/BrandNew";
import BrandSection from "./Component/BrandSection";
import DealsSection from "./Component/DealsSection";
import Fotter from "./Component/Fotter";
import Navber from "./Component/Navber";
import RecentlyViewd from "./Component/RecentlyViewd";
import SameProduct from "./Component/SameProduct";
import SearchBer from "./Component/SearchBer";
import TopBar from "./Component/TopBar";
import TopCellsPhone from "./Component/TopCellsPhone";

function App() {
  return (
    <>
      <TopBar />
      <Navber />
      <SearchBer />
      <Banner />
      <BrandSection />
      <DealsSection />
      <BestSeller />
      <BrandNew />
      <TopCellsPhone />
      <BestLaptop />
      <SameProduct />
      <AppDownload />
      <RecentlyViewd />
      <Fotter />
    </>
  );
}

export default App;
