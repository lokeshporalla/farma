import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from "react-bootstrap";
import {Navbar,Nav,navbarDropdown} from 'react-bootstrap';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
  <a class="navbar-brand bg-light" href="#"><img src="https://thumbs.dreamstime.com/b/rice-organic-circle-paddy-grain-products-healthy-food-design-rice-organic-circle-paddy-grain-products-healthy-food-design-188116245.jpg" alt="error" width="60PX" height="60PX"></img></a>
    <a class="navbar-brand" href="#">Farma</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
        {/* <Link to="/Home" class="nav-link active" >Home</Link> */}
        {/* <Nav.Link as={Link} to={"/Home"}  active> Home </Nav.Link> */}
        <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
        {/* <Link to="/Courses" class="nav-link active" >Courses</Link> */}
        {/* <Nav.Link as={Link} to={"/Courses"} active> Courses </Nav.Link> */}
        <a class="nav-link active" href="#">Sellers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Buyers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Delivery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Payments</a>
        </li>
   
        </ul>
      <span className="dropdown">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Profile
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">About Us</a></li>
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
        </ul>
      </span>
    </div>
  </div>
</nav>
<Home />
    </div>
  );
}

export default App;
