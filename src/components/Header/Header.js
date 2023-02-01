import { Container,Navbar,Card } from "react-bootstrap";
const Header = () => {
    return (

        <header>
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container color='white'>
            <Navbar.Brand>HOME</Navbar.Brand>
            <Navbar.Brand >STORE</Navbar.Brand>
            <Navbar.Brand >ABOUT</Navbar.Brand>
            <button>Cart</button>
            
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