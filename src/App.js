import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {
  Header,
  Footer,
  Home, 
  Login,
  Signup,
  ResetPassword
} from './components/Index'
import { Container, Col, Row } from 'react-bootstrap'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div style={{ backgroundColor: "#020d18", overflowX: "hidden" }}>
      <BrowserRouter>
        <div>
          {window.location.pathname.startsWith("/admin") ? null : <Header />}
          <ToastContainer position="top-right" autoClose={2000} />
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
          {window.location.pathname.startsWith("/admin") ? null : <Footer />}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
