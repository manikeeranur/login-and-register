import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Product from "./components/Product/Product";


import {BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Login} />
      <Route path='/Register' component={Register} />
      <Route path='/Product' component={Product} />
    </Router>
  );
}

export default App;
