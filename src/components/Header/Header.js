import { Container,Navbar,Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import classes from './Header.module.css'
const Header = () => {
    return (

        <header>
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container style={{color:'white'}}>
            <Navbar.Brand>
              <NavLink to='/home' style={{color:'white'}}>HOME
              </NavLink>
              </Navbar.Brand>
            <Navbar.Brand >
              <NavLink to='/' style={{color:'white'}}>
                STORE</NavLink></Navbar.Brand>
            <Navbar.Brand>
              <NavLink activeClassName={classes.active} to='/about' style={{color:'white'}}>ABOUT</NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
              <NavLink to='/login' style={{color:'white'}}>LOGIN</NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink to='/contactus' style={{color:'white'}}>CONTACT US</NavLink>
              </Navbar.Brand>
            <Cart/>
            </Container>
          </Navbar>
          <Card style={{ width: '90rem' ,height:'8rem',backgroundColor:'grey'}}>
          <Card.Text style={{textAlign:'center',color:'white'}}>
          <h1>The Generics</h1>
          </Card.Text>
          </Card>
        </header>
    );
  };
  
  export default Header;