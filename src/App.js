import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Casque from "./Components/pages/Casque";
import Laptops from "./Components/pages/Laptops";
import SretKybrd from "./Components/pages/SretKybrd";
function App() {
  return(

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/1" element={<Laptops/>}/>
        <Route path="/2" element={<SretKybrd/>}/>
        <Route path="/3" element={<Casque/>}/>
      </Routes>
   </BrowserRouter>
  )
 
  


}

export default App;
