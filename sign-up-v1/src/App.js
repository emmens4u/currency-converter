import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormLogin from './FormLogin';
import FormForgot from './FormForgot';

function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/form" element={<Form />}/>
      <Route  path="/formlogin" element={<FormLogin />}/>
      <Route path='/formforgot' element={<FormForgot />}/>
      </Routes>
    </Router>
      
    
  );
}

export default App;
