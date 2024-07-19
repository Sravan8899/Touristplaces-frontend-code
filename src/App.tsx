import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loginpage from "./components/Loginpage"
import Homepage from "./components/Homepage"
import Create from "./components/create"
import Addnewplaces from "./components/addnewplaces"
import ContactUs from "./components/ContactUs"


function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>     
      <Route path="/" element={<Loginpage />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/addnew" element={<Addnewplaces/>} />
      <Route path="/contacus" element={<ContactUs/>} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
