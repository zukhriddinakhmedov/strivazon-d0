import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Col, Container, Row } from 'react-bootstrap'
import {useState} from "react"

const App = () => {
  const [cart, setCart] = useState([])
  
  const addToCart = (book) => setCart([...cart, book]) 

  const removeFromCart = (indexToRemove) => setCart(cart.filter((b, i) => i !== indexToRemove))
 return(
  <BrowserRouter>
    <Container>
      <Row>
        <Col sm={12} className="text-center background-div">
          <Link to="/">
            <h1>Strivazon Book Store</h1>
          </Link>
        </Col>
        <CartIndicator cartLength={cart.length}/>
      </Row>
      <hr />
      <Routes>
        <Route path="/" element={<BookStore addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Container>
  </BrowserRouter>
 )
}


export default App
