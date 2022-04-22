import { Routes, Route } from "react-router-dom"
import CurrencyLogin from "./Component/CurrencyLogin"
import CurrencyConverterPage from "./CurrencyConverterPage"


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="converter" element={ <CurrencyConverterPage/> } />
        <Route path="login" element={ <CurrencyLogin/> } />
      </Routes>
    </div>
  )
}

export default App