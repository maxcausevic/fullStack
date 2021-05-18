import logo from './logo.svg';
import './App.css';
import AllProducts from "./components/AllProducts"
import ProductForm from "./components/ProductForm"
import ProductDetail from "./components/ProductDetail"
import EditProduct from "./components/EditProduct"
import {Router, Link} from '@reach/router'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Products!</h1>
      <p><Link to="/products/new">Create New Product</Link></p>

      <p><Link to="/">Home</Link></p>
      <Router>
        <AllProducts path="/"/>
        <ProductForm path="/products/new"/>
        <ProductDetail path="/products/:id"/>
        <EditProduct path="/products/update/:id"/>

      </Router>
    </div>
  );
}

export default App;
