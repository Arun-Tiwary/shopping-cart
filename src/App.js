import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/header';
import Home from "./components/Home/home";
import Cart from "./components/Cart/cart";
import Footer from "./components/Footer/footer";



function App() {
  return (
  <div className="App">
     <Header />
     
      <Routes>
        <Route path = "/"  element = {<Home />} exact />
        <Route path = "/cart"  element = {<Cart />} exact />
        <Route path = "/notification" element = {<>Notifications</>}  exact />
     
      </Routes>

      <Footer />
  </div>
  
  );
};

export default App;
