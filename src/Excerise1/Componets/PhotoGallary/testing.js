import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'  
function ResponsiveExample() {  
  return (  
    <div className="App">  
    <Container>  
    <Row className="bg-primary m-5 p-5">  
      <Col className="bg-danger" xs={8}>1 of 2</Col>  
      <Col className='bg-warning' lg={8}>2 of 2</Col>  

    </Row>  
  </Container>  
    </div>  
  );  
}  
export default ResponsiveExample;  